<template>
  <div class="container relative mx-auto h-full min-h-screen space-y-4 px-4 py-20 pt-5">
    <div>
      <div class="text-4xl font-bold leading-none">
        Check DC - Nuxt3:SSR:Boilerplate
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
        Fetch Published Mockups
      </button>
      <NuxtLink
        v-if="!lodashIsEmpty(mockups[0])"
        class="btn btn-success btn-sm text-white"
        :to="`/mockups/${mockups[0].slug}`"
      >
        View Current Mockup
      </NuxtLink>
      <NuxtLink
        v-if="!lodashIsEmpty(mockups[0])"
        class="btn btn-secondary btn-sm text-white"
        to="/mockups/unknown-mockup"
      >
        View Unknown Mockup
      </NuxtLink>
    </div>

    <div class="flex items-center space-x-1">
      <span>{{ subTitle }}</span>
      <span class="badge badge-accent badge-sm">unauthenticated</span>
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

const mockups = ref<Asset[]>([])
const paginationData = ref<Pagination>()
const subTitle = ref('This will fetch and show the First Mockup')

const fetchData = async () => {
  const { data } = await useGet<PaginatedCollection<Asset>>('/posts')

  if (data.value) {
    mockups.value = data.value.data
    paginationData.value = lodashOmit(data.value, 'data')
    subTitle.value = 'First Mockup'
  }
}

const metaDef = useDefault('meta')
// You should not update title or any other like this,
// metaDef.title += ' - Home'
// it will update the meta default value metaDef
// You can remove this comments
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} - Home`
})
</script>
