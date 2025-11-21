<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, shallowRef, watch, nextTick } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { 
  useCapitalAcrossThesisQuery,
  type ThesisCapitalGroup,
  type SymbolDetail
} from '@y2kfund/core/capitalAcrossThesisForRiskManagement'

// Register ECharts components
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])

interface CapitalAcrossThesisProps {
  userId?: string | null
}

const props = withDefaults(defineProps<CapitalAcrossThesisProps>(), {
  userId: '4fbec15d-2316-4805-b2a4-5cd2115a5ac8'
})

// Fetch capital across thesis data
const { data: thesisData, isLoading, error } = useCapitalAcrossThesisQuery(props.userId)

// Breadcrumb navigation state
interface BreadcrumbItem {
  label: string
  level: 'parent' | 'child' | 'symbol'
  parentThesisId?: string | null
  thesisId?: string | null
}

const breadcrumbs = ref<BreadcrumbItem[]>([
  { label: 'All Thesis', level: 'parent' }
])

// Current view state
const currentView = ref<'parent' | 'child' | 'symbol'>('parent')
const selectedParentThesisId = ref<string | null>(null)
const selectedChildThesisId = ref<string | null>(null)

// Helper function to format currency
const formatCurrency = (value: number): string => {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`
  } else if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(2)}K`
  }
  return `$${value.toFixed(2)}`
}

// Helper function to get color based on index
const getColor = (index: number): string => {
  const colors = [
    '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de',
    '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc', '#d4ec59',
    '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3', '#e5cf0d'
  ]
  return colors[index % colors.length]
}

// Computed: Group data by parent thesis
const parentThesisGroups = computed(() => {
  if (!thesisData.value || thesisData.value.length === 0) return []

  // Group by parent thesis
  const parentMap = new Map<string, {
    parentThesisId: string | null
    parentThesisTitle: string
    totalCapital: number
    childTheses: ThesisCapitalGroup[]
  }>()

  thesisData.value.forEach(thesis => {
    const parentKey = thesis.parentThesisId || 'NO_PARENT'
    const parentTitle = thesis.parentThesisTitle || 
                        (thesis.thesisId === null ? 'Unassigned' : 'No Parent Thesis')

    if (!parentMap.has(parentKey)) {
      parentMap.set(parentKey, {
        parentThesisId: thesis.parentThesisId,
        parentThesisTitle: parentTitle,
        totalCapital: 0,
        childTheses: []
      })
    }

    const group = parentMap.get(parentKey)!
    group.totalCapital += thesis.totalCapital
    group.childTheses.push(thesis)
  })

  return Array.from(parentMap.values())
    .sort((a, b) => b.totalCapital - a.totalCapital)
})

// Computed: Get child theses for selected parent
const childThesesForParent = computed(() => {
  if (!selectedParentThesisId.value) return []
  
  const parentGroup = parentThesisGroups.value.find(
    g => (g.parentThesisId || 'NO_PARENT') === selectedParentThesisId.value
  )
  
  return parentGroup?.childTheses || []
})

// Computed: Get symbols for selected child thesis
const symbolsForChild = computed(() => {
  if (!selectedChildThesisId.value) return []
  
  const childThesis = thesisData.value?.find(
    t => (t.thesisId || 'UNASSIGNED') === selectedChildThesisId.value
  )
  
  return childThesis?.symbols || []
})

// Chart title based on current view
const chartTitle = computed(() => {
  if (currentView.value === 'parent') {
    return 'Capital Distribution by Parent Thesis'
  } else if (currentView.value === 'child') {
    const parentGroup = parentThesisGroups.value.find(
      g => (g.parentThesisId || 'NO_PARENT') === selectedParentThesisId.value
    )
    return `Child Thesis under "${parentGroup?.parentThesisTitle}"`
  } else {
    const childThesis = thesisData.value?.find(
      t => (t.thesisId || 'UNASSIGNED') === selectedChildThesisId.value
    )
    return `Symbols in "${childThesis?.thesisTitle}"`
  }
})

// Chart subtitle
const chartSubtitle = computed(() => {
  if (currentView.value === 'parent') {
    const total = parentThesisGroups.value.reduce((sum, g) => sum + g.totalCapital, 0)
    return `Total Capital: ${formatCurrency(total)}`
  } else if (currentView.value === 'child') {
    const total = childThesesForParent.value.reduce((sum, t) => sum + t.totalCapital, 0)
    return `Total Capital: ${formatCurrency(total)}`
  } else {
    const total = symbolsForChild.value.reduce((sum, s) => sum + s.capitalInvested, 0)
    return `Total Capital: ${formatCurrency(total)}`
  }
})

// ECharts option
const chartOption = computed(() => {
  let pieData: any[] = []

  if (currentView.value === 'parent') {
    // Parent thesis view
    pieData = parentThesisGroups.value.map((group, index) => ({
      name: group.parentThesisTitle,
      value: group.totalCapital,
      itemStyle: { color: getColor(index) },
      // Store parent ID for drill-down
      parentThesisId: group.parentThesisId || 'NO_PARENT'
    }))
  } else if (currentView.value === 'child') {
    // Child thesis view
    pieData = childThesesForParent.value.map((thesis, index) => ({
      name: thesis.thesisTitle,
      value: thesis.totalCapital,
      itemStyle: { color: getColor(index) },
      // Store child thesis ID for drill-down
      thesisId: thesis.thesisId || 'UNASSIGNED'
    }))
  } else {
    // Symbol view
    pieData = symbolsForChild.value.map((symbol, index) => ({
      name: symbol.symbolRoot,
      value: symbol.capitalInvested,
      itemStyle: { color: getColor(index) }
    }))
  }

  return {
    title: {
      subtext: chartSubtitle.value,
      left: 'center',
      top: 10,
      textStyle: {
        fontSize: 13,
        fontWeight: 'normal',
        color: '#1565c0',
        lineHeight: 20
      },
      subtextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        const percentage = params.percent.toFixed(2)
        const value = formatCurrency(params.value)
        return `<strong>${params.name}</strong><br/>Capital: ${value}<br/>Percentage: ${percentage}%`
      }
    },
    legend: {
      orient: 'vertical',
      right: 110,
      top: 'center',
      type: 'scroll',
      pageButtonPosition: 'end',
      formatter: (name: string) => {
        const item = pieData.find(d => d.name === name)
        if (item) {
          return `${name}: ${formatCurrency(item.value)}`
        }
        return name
      }
    },
    series: [
      {
        name: chartTitle.value,
        type: 'pie',
        radius: ['40%', '70%'], // Donut chart
        center: ['35%', '50%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: (params: any) => {
            return `${params.name}\n${params.percent.toFixed(1)}%`
          }
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold'
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: pieData
      }
    ]
  }
})

// Chart instance reference
const chartRef = shallowRef()

// Handle chart click for drill-down
const handleChartClick = (params: any) => {
  console.log('🖱️ Chart clicked!', {
    currentView: currentView.value,
    clickedData: params.data,
    name: params.name
  })
  
  if (currentView.value === 'parent') {
    // Drill down to child thesis
    const parentThesisId = params.data.parentThesisId
    console.log('⬇️ Drilling down to child thesis:', parentThesisId)
    selectedParentThesisId.value = parentThesisId
    currentView.value = 'child'
    
    breadcrumbs.value.push({
      label: params.name,
      level: 'child',
      parentThesisId
    })
  } else if (currentView.value === 'child') {
    // Drill down to symbols
    const thesisId = params.data.thesisId
    console.log('⬇️ Drilling down to symbols:', thesisId)
    selectedChildThesisId.value = thesisId
    currentView.value = 'symbol'
    
    breadcrumbs.value.push({
      label: params.name,
      level: 'symbol',
      thesisId
    })
  } else {
    console.log('ℹ️ Already at symbol level, no further drill-down')
  }
}

// Navigate breadcrumb
const navigateTo = (index: number) => {
  const item = breadcrumbs.value[index]
  
  if (item.level === 'parent') {
    currentView.value = 'parent'
    selectedParentThesisId.value = null
    selectedChildThesisId.value = null
  } else if (item.level === 'child') {
    currentView.value = 'child'
    selectedParentThesisId.value = item.parentThesisId || null
    selectedChildThesisId.value = null
  } else if (item.level === 'symbol') {
    currentView.value = 'symbol'
    selectedChildThesisId.value = item.thesisId || null
  }
  
  // Truncate breadcrumbs
  breadcrumbs.value = breadcrumbs.value.slice(0, index + 1)
}

// Setup chart event listener when data is loaded
watch(thesisData, async (newData) => {
  if (newData && newData.length > 0) {
    console.log('📊 Thesis data loaded, waiting for chart to render...')
    
    // Wait for next tick and a bit more to ensure chart is fully rendered
    await nextTick()
    
    setTimeout(() => {
      console.log('⏰ Attempting to attach event listener...')
      console.log('📊 chartRef.value:', chartRef.value)
      
      if (chartRef.value) {
        console.log('✅ chartRef.value exists')
        
        // Get the actual ECharts instance from vue-echarts component
        const chartInstance = (chartRef.value as any)?.chart
        console.log('📊 Chart instance:', chartInstance)
        
        if (chartInstance) {
          console.log('✅ Attaching click handler to chart instance')
          chartInstance.on('click', handleChartClick)
        } else {
          console.error('❌ Chart instance not found')
          console.log('📊 Available properties:', Object.keys(chartRef.value))
        }
      } else {
        console.error('❌ chartRef.value is still null/undefined')
      }
    }, 300)
  }
}, { immediate: true })

onBeforeUnmount(() => {
  if (chartRef.value) {
    const chartInstance = (chartRef.value as any)?.chart
    if (chartInstance) {
      chartInstance.off('click', handleChartClick)
    }
  }
})
</script>

<template>
  <div class="capital-across-thesis-view">
    <h2>Capital Deployment by Investment Thesis</h2>
    <p class="subtitle">Analyze capital deployment across investment theses with drill-down capability</p>

    <!-- Loading State -->
    <div v-if="isLoading || !thesisData" class="loading">
      <p>Loading capital data...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error">
      <p>Error loading data: {{ error }}</p>
    </div>

    <!-- Main Content -->
    <div v-else-if="thesisData.length > 0" class="content">
      <!-- Breadcrumb Navigation -->
      <div class="breadcrumb">
        <span 
          v-for="(crumb, index) in breadcrumbs" 
          :key="index"
          class="breadcrumb-item"
          :class="{ active: index === breadcrumbs.length - 1 }"
          @click="navigateTo(index)"
        >
          {{ crumb.label }}
          <span v-if="index < breadcrumbs.length - 1" class="separator">›</span>
        </span>
      </div>

      <!-- Chart Container -->
      <div class="chart-container">
        <v-chart 
          ref="chartRef"
          class="chart" 
          :option="chartOption" 
          autoresize
        />
      </div>

      <!-- Instructions -->
      <div class="instructions">
        <p v-if="currentView === 'parent'">
          💡 <strong>Click on any parent thesis slice</strong> to drill down into child theses
        </p>
        <p v-else-if="currentView === 'child'">
          💡 <strong>Click on any child thesis slice</strong> to see symbols, or use breadcrumb to go back
        </p>
        <p v-else>
          💡 <strong>Symbol level reached</strong> - Use breadcrumb navigation to go back
        </p>
      </div>

      <!-- Summary Stats -->
      <div class="summary-stats">
        <div class="stat-card">
          <div class="stat-label">Total Thesis Groups</div>
          <div class="stat-value">{{ parentThesisGroups.length }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total Child Theses</div>
          <div class="stat-value">{{ thesisData.length }}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total Capital Deployed</div>
          <div class="stat-value">
            {{ formatCurrency(thesisData.reduce((sum, t) => sum + t.totalCapital, 0)) }}
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Unique Symbols</div>
          <div class="stat-value">
            {{ new Set(thesisData.flatMap(t => t.symbols.map(s => s.symbolRoot))).size }}
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="empty-state">
      <p>No capital data available. Please check your positions and thesis assignments.</p>
    </div>
  </div>
</template>

<style>
@import '../styles/styles.css';
</style>
<style scoped>
@import '../styles/scoped-styles.css';
</style>