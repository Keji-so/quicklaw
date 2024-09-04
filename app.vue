<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { smoothScroll } from './commons/lenis'

onMounted(() => {
  setTimeout(() => {
    smoothScroll()
  }, 2000)
})

const isOnline = useOnline()
const toast = useToast({
  slot: { icon: false },
  queue: false,
  props: {
    position: 'topEnd',
    timeout: '1s'
  }
})

useWatch(isOnline, (value) => {
  if (value) {
    toast.show('You are back online')
  }
  else {
    toast.show('You are offline', {
      iconClass: 'text-white',
      textClass: 'text-white',
      bodyClass: 'bg-red-500',
      progressClass: 'bg-white'
    })
  }
})

const metaDef = useDefault('meta')

useSeoMeta({ ...metaDef })

const appENV = useRuntimeConfig().public.appENV.toLowerCase()

// disallow google search indexing
if (appENV === 'staging' || appENV === 'local') {
  useHeadSafe({
    meta: [
      { name: 'robots', content: 'noindex, nofollow' },
      { name: 'googlebot', content: 'noindex' }
    ]
  })
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(.9rem); */
  transform: translateY(-40px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(4px);
}
</style>