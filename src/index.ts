// src/index.ts
import capitalAcrossThesis from './views/CapitalAcrossThesis.vue'

// Named export
export { capitalAcrossThesis }

// Default export (optional)
export default capitalAcrossThesis

// Props interface
export interface capitalAcrossThesisProps {
  userId?: string | null    // Current user ID for access control
}
