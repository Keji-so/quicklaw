<template>
  <svg
    fill="none"
    height="18"
    viewBox="0 0 33 32"
    width="28"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30.5 16C30.5 17.8385 30.1379 19.659 29.4343 21.3576C28.7308 23.0561 27.6995 24.5995 26.3995 25.8995C25.0995 27.1995 23.5561 28.2307 21.8576 28.9343C20.159 29.6379 18.3385 30 16.5 30C14.6615 30 12.841 29.6379 11.1424 28.9343C9.44387 28.2307 7.90052 27.1995 6.6005 25.8995C5.30048 24.5995 4.26925 23.0561 3.56569 21.3576C2.86212 19.659 2.5 17.8385 2.5 16C2.5 14.1615 2.86212 12.341 3.56569 10.6424C4.26926 8.94387 5.30049 7.40052 6.60051 6.1005C7.90053 4.80048 9.44388 3.76925 11.1424 3.06568C12.841 2.36212 14.6615 2 16.5 2C18.3385 2 20.159 2.36212 21.8576 3.06569C23.5561 3.76926 25.0995 4.80049 26.3995 6.10051C27.6995 7.40053 28.7308 8.94388 29.4343 10.6424C30.1379 12.341 30.5 14.1615 30.5 16L30.5 16Z"
      :stroke="trackColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4" />
    <path
      d="M16.5 2C18.3385 2 20.159 2.36212 21.8576 3.06569C23.5561 3.76925 25.0995 4.80049 26.3995 6.10051C27.6995 7.40053 28.7308 8.94388 29.4343 10.6424C30.1379 12.341 30.5 14.1615 30.5 16"
      :stroke="chaserColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4" />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ chaserColor?: string; trackColor?: string }>(), {
  chaserColor: '#939BA0',
  trackColor: 'white'
})
</script>

<style scoped>
svg {
  animation: spin infinite 2000ms linear;
}
@keyframes spin {
  0% {
    transform: rotate(360deg);
  }
}
</style>
