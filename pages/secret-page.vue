<template>
  <div class="container relative mx-auto h-full min-h-screen space-y-4 px-4 py-20 pt-5">
    <div>
      <div class="break-words text-4xl font-bold leading-none">
        Secret Page - Nuxt3:SSR:Boilerplate
      </div>
      <div class="text-2xl leading-none text-gray-700">
        Customer SSR
      </div>
    </div>
    <div class="flex space-x-2">
      <button
        class="btn btn-info btn-sm text-white"
        @click="fetchData"
      >
        All Mockups
      </button>
      <NuxtLink
        v-if="!lodashIsEmpty(mockups[0])"
        class="btn btn-success btn-sm text-white"
        :to="`/mockups/${mockups[0].slug}`"
      >
        Current Mockup
      </NuxtLink>
      <NuxtLink
        v-if="!lodashIsEmpty(mockups[0])"
        class="btn btn-error btn-sm text-white"
        :to="`/mockups/${mockups[0].slug}-wrong`"
      >
        Wrong Mockup
      </NuxtLink>
      <NuxtLink
        class="btn btn-primary btn-sm text-white"
        to="/"
      >
        Home
      </NuxtLink>
    </div>

    <div class="flex items-center space-x-1">
      <span>{{ subTitle }}</span>
      <span class="badge badge-accent badge-sm">authenticated</span>
      <span>:</span>
    </div>
    <div class="mockup-code">
      <pre>{{ mockups ? mockups[0] : 'Not found' }}</pre>
    </div>

    <div>PaginatedCollection Object:</div>
    <div class="mockup-code">
      <pre>{{ paginationData }}</pre>
    </div>
  </div>
  <FooterNav />
</template>

<script setup lang="ts">
import type { Asset } from '~/types/assets'
import type { PaginatedCollection, Pagination } from '~/types'

definePageMeta({
  middleware: ['auth']
})

const mockups = ref<Asset[]>([])
const paginationData = ref<Pagination>()
const subTitle = ref('This will fetch and show the First Mockup')

const fetchData = async () => {
  const { data } = await useGet<PaginatedCollection<Asset>>('/posts/all')

  if (data.value) {
    mockups.value = data.value.data
    paginationData.value = lodashOmit(data.value, 'data')
    subTitle.value = 'First Mockup'
  }
}

const metaDef = useDefault('meta')

useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} - Secret`,
  ogImage: 'https://nuxt.com/social.jpg'
})
</script>
