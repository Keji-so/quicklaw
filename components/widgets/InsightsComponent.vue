<template>
  <div v-for="(insight, index) in insights" :key="insight.id" :class="computedClass">
    <div class="insights-block_img">
      <img alt="" class="c-img cc-cover" loading="lazy">
    </div>
    <div class="insights-block_details">
      <div class="insights-title heading-h3">
        {{ insight.title }}
      </div>
      <div class="insights-block_date">
        {{ formatDate(insight.date) }}
      </div>
      <nuxtLink :to="`/insights/${insight.slug}`" class="arrow-link">Read Insight</nuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

const computedClass = computed(() => {
  return props.class
})

const props = defineProps<{
  class: {
    type: string
  },
  insights: Array<{
    id: number
    title: string
    quote: string
    content: string
    date: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    featured: boolean | null
    cover_image: string | null
    references: string[]
    category: string | null
  }>
}>()



onMounted(() => {
})
</script>

<style scoped></style>