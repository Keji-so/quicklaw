<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, 88vw"
           :src="hero_image"
           >
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block cc-services">
          <div class="page-title">
                                   {{ hero.heading }}

          </div>
          <h1 class="heading-h2">
                                              {{ hero.description}}

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
      <div class="services-wrapper">
      <Categories :categories="categories" />
      </div>
    </section>
    <FooterNav />
  </div>
</template>

<script setup lang="ts">
import type { Categories } from "~/types/categories"
import type { Hero, Image } from "~/types/content"
import { useModal } from '~/composables/useModal'
const content = ref(null);
const hero = ref<Hero[]>([])
const hero_image = ref<Image>({})



const modal = useModal()
const categories = ref<Categories[]>([])
const fetchCategoriesState = useFetchState('/categories/all')


const fetchPageData = async () => {
    try {
        const response = await fetch('https://cms.quicklaw.ng/api/service?populate=deep')
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        content.value = data.data; 
        hero.value = content.value.hero
        hero_image.value = hero.value.image.url
        
    } catch (error) {
        console.error('Error fetching home page data:', error);
    }
};


const fetchAllCategories = async () => {
  const { data } = await useGet<Categories>(fetchCategoriesState.value.url, {});
  try {
    const { data } = await useGet<Categories>(fetchCategoriesState.value.url,{})
    if (data.value) {
      categories.value = data.value.data as Categories[] 
    } 
    }
    catch (error) {
    console.error('Error fetching categories:', error);
  }
}



// no result property
const noResultCopy = computed(() => {
  if (fetchCategoriesState.value.error) {
    if (!useOnline().value) {
      return 'Network error, check connectivity'
    } else {
      return fetchCategoriesState.value.error
    }
  }

  if (lodashIsEmpty(categories.value)) {
    return 'No Categories Found'
  }
})

onMounted(() => {
  fetchPageData()
  fetchAllCategories()
});

const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Services`,
})
</script>

<style scoped>

</style>
