<template>
  <div
    class="container relative mx-auto h-full min-h-screen space-y-4 px-4 py-20 pt-5"
  >
    <div>
      <div class="text-4xl font-bold">
        {{ error.statusCode }} - Error Page - Nuxt3:SSR:Boilerplate
      </div>
      <div class="text-2xl leading-none text-gray-700">
        {{ error.statusMessage }}
      </div>
    </div>

    <div class="mt-[50%] flex space-x-2">
      <NuxtLink class="btn btn-primary btn-sm text-white" to="/">
        Home
      </NuxtLink>
      <button
        class="btn btn-success btn-sm text-white"
        @click="handleClearError"
      >
        Clear Error
      </button>
      <NuxtLink class="btn btn-secondary btn-sm text-white" to="/unknown-page">
        Unknown Page
      </NuxtLink>
    </div>

    <div class="flex items-center space-x-1">
      <span>Error Details</span>
      <span class="badge badge-accent badge-sm">from-server</span>
      <span>:</span>
    </div>
    <div class="mockup-code">
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: {
    default: () => new Error('An error message'),
    type: Object
  }
})

const handleClearError = () => clearError({ redirect: '/' })
</script>
