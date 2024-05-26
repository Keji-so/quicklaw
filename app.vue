<template>
  <NuxtPage />
</template>

<script setup lang="ts">
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
