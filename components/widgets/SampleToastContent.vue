<template>
  <div class="px-2">
    {{ timer.expended.value }}
  </div>
  <div class="px-2">
    {{ title }}
  </div>
  <div class="mockup-code">
    <pre>{{ code }}</pre>
  </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: null
  },

  title: {
    type: String,
    default: 'Sample Toast Content Title'
  }
})

const timer = useTimer(null, { immediate: true })
</script>
