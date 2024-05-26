<template>
  <div class="container relative mx-auto h-full min-h-screen space-y-4 px-4 py-20 pt-5">
    <div>
      <div class="break-words text-4xl font-bold leading-none">
        Dynamic Page - Nuxt3:SSR:Boilerplate
      </div>
      <div class="text-2xl leading-none text-gray-700">
        Customer SSR
      </div>
    </div>
    <div class="flex space-x-2">
      <NuxtLink
        class="btn btn-primary btn-sm text-white"
        to="/"
      >
        Home
      </NuxtLink>
      <NuxtLink
        class="btn btn-success btn-sm text-white"
        to="/mockups"
      >
        Back to All
      </NuxtLink>
    </div>

    <div class="flex items-center space-x-1">
      <span>{{ mockup?.title }}</span>
      <span class="badge badge-accent badge-sm">from-server</span>
      <span>:</span>
    </div>
    <div class="mockup-code">
      <pre>{{ mockup }}</pre>
    </div>
  </div>
  <FooterNav />
</template>

<script setup lang="ts">
import type { Asset } from '~/types/assets'

const route = useRoute()
const mockup = ref<Asset | null>()
const metaDef = useDefault('meta')

// This next line is critical
// It serves as an initializer for the application error instance using NuxtApp under the hood.
// Hence you cant use this in a composable, it will through some higher level fatal error
// For component -> compError, For page -> pageError
// You can remove the above comments
const pageError = useError()

const { data, error } = await useGet<Asset>(`/posts/${route.params.slug}`)

mockup.value = data.value

if (error.value) {
  pageError.value = useErrorExtended(error.value, {
    routePath: route.path
  })
}

useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} - ${mockup.value?.title}`
})
</script>
