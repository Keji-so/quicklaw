<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, 88vw" src="@/public/assets/images/services-hero-image1.png" srcset="@/public/assets/images/services-hero-image1-p-500.png 500w, @/public/assets/images/services-hero-image1-p-800.png 800w, @/public/assets/images/services-hero-image1-p-1080.png 1080w, @/public/assets/images/services-hero-image1-p-1600.png 1600w, @/public/assets/images/services-hero-image1.png 1901w">
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block cc-services">
          <div class="page-title">
            SERVICES
          </div>
          <h1 class="heading-h2">
            Here’s What We Can Help You With
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
import type { Categories, Services } from "~/types/categories"
import { useModal } from '~/composables/useModal'

const modal = useModal()
const categories = ref<Categories[]>([])
const fetchCategoriesState = useFetchState('/categories/all')


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
  fetchAllCategories();
});

const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Services`,
})
</script>

<style scoped>

</style>
