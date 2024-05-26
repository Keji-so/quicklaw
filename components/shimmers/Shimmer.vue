<template>
  <div
    class="relative overflow-hidden"
    :class="[bgClass, loaderClass]"
  >
    <div
      class="shimmer absolute bottom-0 left-0 right-0 top-0"
      :style="shimmerStyle"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'rectangle'
  },
  bgClass: {
    type: String,
    default: 'bg-gray-300'
  },
  cssClass: {
    type: String,
    default: ''
  },
  shimmerColor: {
    type: String,
    default: '#ffffff'
  }
})
const loaderTypes = { rectangle: 'rectangle', circle: 'circle' }
const loaderClasses = {
  [loaderTypes.rectangle]: 'rounded',
  [loaderTypes.circle]: 'rounded-full'
}
const defShimmerColor = '#ffffff'

const isHexColor = (hexColor: string) => {
  const hex = hexColor.replace('#', '')

  return typeof hexColor === 'string' && hexColor.startsWith('#') && hex.length === 6 && !Number.isNaN(Number(`0x${hex}`))
}

const hexToRgb = (hex: string) => `${hex.match(/\w\w/g)?.map(x => +`0x${x}`)}`

const { type, bgClass, cssClass, shimmerColor } = toRefs(props)

const shimmerStyle = computed(() => {
  const rgb = isHexColor(shimmerColor.value) ? hexToRgb(shimmerColor.value) : defShimmerColor

  return {
    backgroundImage: `linear-gradient(90deg, rgba(${rgb}, 0) 0%, rgba(${rgb}, 0.2) 20%, rgba(${rgb}, 0.5) 60%, rgba(${rgb}, 0))`
  }
})

const loaderClass = computed(() => (cssClass.value ? cssClass.value : loaderClasses[type.value]))
</script>

<style lang="css" scoped>
.shimmer {
  transform: translateX(-100%);
  animation: shimmer 1.4s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
