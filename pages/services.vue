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
        <div class="c-service">
          <div class="service-flex">
            <div class="service-title_container">
              <div class="service-index">
                01
              </div>
              <div class="service-title">
                Startup Advisory
              </div>
            </div>
            <div class="service-details_container">
              <div class="service-details_inner">
                <div>Quicklaw provides legal services and company secretarial duties that suit the entire business life cycle We help your startup observe all due diligence and get investment-ready.</div>
                <a class="c-button" href="#">Get A Quote</a>
              </div>
            </div>
          </div>
        </div>

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
const fetchAllCategories = async () => {
  try {
    const response = await fetch("/categories.json")
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    categories.value = await response.json()
  } catch (error) {
    console.error("Failed to fetch categories:", error)
  }
}
fetchAllCategories()

</script>

<style scoped>

</style>
