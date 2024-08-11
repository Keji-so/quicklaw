<template>
 <div v-for="(insight, index) in insights" :key="insight.id" :class="classes" >
            <div  class="insights-block_img">
              <img
                alt=""
                class="c-img cc-cover"
                loading="lazy"
                src="@/public/assets/images/placeholder.svg"
              >
            </div>
            <div class="insights-block_details">
              <div class="insights-title heading-h3">
                {{insight.title}}
              </div>
              <div class="insights-block_date">
                {{formatDate(insight.date)}}
              </div>
              <nuxtLink :to="`/insights/${insight.slug}`"  class="arrow-link" >Read Insight</nuxtLink>
            </div>
          </div>
</template>

<script setup lang="ts">
import type { ArticleContent } from "~/types/content"
const insights = ref<ArticleContent[]>([])


const fetchPosts = async () => {
    try {
        const response = await fetch('https://cms.quicklaw.ng/api/posts?populate=deep');
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data = await response.json()
        insights.value = data.data      
        
    } catch (error) {
        console.error('Error fetching home page data:', error)
    }
};


onMounted(() => {
  fetchPosts()
});
defineProps<{ classes: string }>()
</script>

<style scoped>

</style>