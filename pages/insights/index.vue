<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, 88vw" 
            :src="hero_image.url"
          >
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block cc-full-width">
          <div class="page-title">
            {{hero.heading}}
          </div>
          <h1 class="heading-h2">
                        {{hero.description}}
          </h1>
        </div>
        <div class="hero-illustration cc-illustration-one">
          <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/hero-illustration-gold.svg">
        </div>
        <div class="hero-illustration cc-illustration-four">
          <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/popup-illustration-4.svg">
        </div>
        <div class="hero-illustration cc-illustration-five">
          <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/hero-illustration-green.svg">
        </div>
      </div>
    </section>
    <section class="c-section">
      <div class="insights">
        <div class="section-header_flex">
          <div class="section-inner_header uc-green-text">
            <div class="heading-h4">
              POPULAR INSIGHTS
            </div>
          </div>
        </div>
        <div class="insights-flex_container">
          <Insights classes="insights-block cc-featured" to="/insights/open" />
          <div class="insights-grid">
          
            <Insights classes="insights-block cc-sm" />
          </div>
        </div>
      </div>
      <div class="all-insights_container">
        <div class="section-header_flex">
          <div class="section-inner_header uc-green-text">
            <div class="heading-h4">
              ALL INSIGHTS
            </div>
          </div>
        </div>
        <div class="insights-grid cc-lg">
        <Insights classes="insights-block cc-sm" />
      
        </div>
      </div>
    </section>
    <FooterNav />
  </div>
</template>

<script setup lang="ts">
import type { Hero, Image } from "~/types/content"
const content = ref(null);
const hero = ref<Hero[]>([])
const hero_image = ref<Image[]>([])




const fetchPageData = async () => {
    try {
        const response = await fetch('https://cms.quicklaw.ng/api/insight?populate=deep'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        content.value = data.data; 
        hero.value = content.value.hero
        hero_image.value = hero.value.image.formats.large
        
    } catch (error) {
        console.error('Error fetching home page data:', error);
    }
};


onMounted(() => {
  fetchPageData()
});

const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Insights`,
})
</script>

<style scoped>

</style>
