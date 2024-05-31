<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, 88vw" src="@/public/assets/images/insights-hero-image.png" srcset="@/public/assets/images/insights-hero-image-p-500.png 500w, @/public/assets/images/insights-hero-image-p-800.png 800w, @/public/assets/images/insights-hero-image-p-1080.png 1080w, @/public/assets/images/insights-hero-image-p-1600.png 1600w, @/public/assets/images/insights-hero-image.png 1901w">
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block cc-full-width">
          <div class="page-title">
            INSIGHTS
          </div>
          <h1 class="heading-h2">
            Keep Up with Updates from The Legal World
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

</script>

<style scoped>

</style>
