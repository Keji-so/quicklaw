<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { smoothScroll } from './commons/lenis'
import { useAllPosts } from './composables/states'

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

const fetchAllPosts = async () => {
  try {
    const response = await fetch('https://cms.quicklaw.ng/api/posts?populate=deep')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    useAllPosts().value = data.data
  } catch (error) {
    console.error('Error fetching home page data:', error)
  }
}

const metaDef = useDefault('meta')

useSeoMeta({ ...metaDef })

const appENV = useRuntimeConfig().public.appENV.toLowerCase()

// disallow google search indexing
if (appENV === 'staging' || appENV === 'local') {
  useHeadSafe({
    meta: [
      {
        name: 'Quicklaw: Home',
        content: 'Quicklaw is dedicated to providing easy access to legal services, helping users attain all their legal needs through cheap and easily accessible legal services through a niche of qualified and experienced legal professionals.'
      }
    ]
  })
}

onMounted(async () => {
  fetchAllPosts()
});
</script>
