<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import type { ColumnDefinition } from 'tabulator-tables'

import { useTabulator } from '../composables/useTabulator'

</script>

<template>
  <div class="capital-across-thesis-view">
    <h2>Capital Across Thesis Risk Management</h2>
    <p class="subtitle">Analyze the Capital Across Thesis Risk Management</p>
  </div>
</template>

<style>
@import 'tabulator-tables/dist/css/tabulator_modern.min.css';
@import '../styles/styles.css';
</style>
<style scoped>
@import '../styles/scoped-styles.css';
</style>