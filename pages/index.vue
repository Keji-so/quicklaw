<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero cc-home">
        <div class="hero-img">
          <img
            alt=""
            class="c-img cc-cover"
            loading="lazy"
            sizes="(max-width: 767px) 90vw, 88vw"
            src="@/public/assets/images/home-hero-image.png"
            srcset="
              @/public/assets/images/home-hero-image-p-500.png   500w,
              @/public/assets/images/home-hero-image-p-800.png   800w,
              @/public/assets/images/home-hero-image-p-1080.png 1080w,
              @/public/assets/images/home-hero-image-p-1600.png 1600w,
              @/public/assets/images/home-hero-image.png        1901w
            "
          >
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block">
          <h1 class="heading-h1">
            Welcome to Quicklaw - Your Trusted Online Legal Assistant
          </h1>
          <div class="hero-subtext">
            We&#x27;re your innovative, cost-effective, and time-efficient legal partner,
            redefining the way legal services work for you in Nigeria.
          </div>
          <a class="c-button cc-md" href="#">Get Started</a>
        </div>
        <div class="hero-illustration cc-illustration-one">
          <img
            alt=""
            class="c-img"
            loading="lazy"
            src="@/public/assets/images/hero-illustration-gold.svg"
          >
        </div>
        <div class="hero-illustration cc-illustration-two">
          <img
            alt=""
            class="c-img"
            loading="lazy"
            src="@/public/assets/images/popup-illustration-4.svg"
          >
        </div>
        <div class="hero-illustration cc-illustration-three">
          <img
            alt=""
            class="c-img"
            loading="lazy"
            src="@/public/assets/images/hero-illustration-green.svg"
          >
        </div>
      </div>
    </section>
    <section class="c-section cc-small-width">
      <div class="services-section">
        <div class="services-inner">
          <div class="section-header_flex">
            <div class="section-inner_header uc-green-text">
              <div class="heading-h4">
                OUR SERVICES
              </div>
            </div>
            <nuxtLink class="c-button" to="/services">Explore Our Services</nuxtLink>
          </div>
          <div class="services-list">
             <div
              id="w-node-_045f05d8-f113-974c-fd7e-64a6bb978efe-a4ae8fab"
              class="services-list_item"
            >
              <div class="services-list_flex">
                <div class="sevices-list_inner">
                  <div>Start A Business</div>
                </div>
                <div class="services-list_icon">
                  <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/gavel.svg">
                </div>
              </div>
              <div class="heading-h4">
                We provide you with the legal support you need to get your business up and
                running without stress.
              </div>
            </div>
               <div
              id="w-node-_045f05d8-f113-974c-fd7e-64a6bb978efe-a4ae8fab"
              class="services-list_item"
            >
              <div class="services-list_flex">
                <div class="sevices-list_inner">
                  <div>Protect Your Ideas</div>
                </div>
                <div class="services-list_icon">
                  <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/gavel.svg">
                </div>
              </div>
              <div class="heading-h4">
                Receive adequate legal support and  representation you require to protect your intellectual property.
              </div>
            </div>
               <div
              id="w-node-_045f05d8-f113-974c-fd7e-64a6bb978efe-a4ae8fab"
              class="services-list_item"
            >
              <div class="services-list_flex">
                <div class="sevices-list_inner">
                  <div>Draft & Review Agreement</div>
                </div>
                <div class="services-list_icon">
                  <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/gavel.svg">
                </div>
              </div>
              <div class="heading-h4">
               Creating and reviewing contract agreements is easier with Quicklaw’s self- service.
              </div>
            </div>
               <div
              id="w-node-_045f05d8-f113-974c-fd7e-64a6bb978efe-a4ae8fab"
              class="services-list_item"
            >
              <div class="services-list_flex">
                <div class="sevices-list_inner">
                  <div>Download a Template</div>
                </div>
                <div class="services-list_icon">
                  <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/gavel.svg">
                </div>
              </div>
              <div class="heading-h4">
               With our legal templates, you don’t have to stress yourself with drafting new documents.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="c-section cc-full-width">
      <div class="insights-section">
        <div class="section-header_flex cc-insights">
          <div class="section-inner_header uc-white-text">
            <div class="heading-h4">
              INSIGHTS
            </div>
          </div>
          <nuxtLink class="c-button cc-md cc-secondary-green" to="/insights">Explore All Insights</nuxtLink>
        </div>
        <div id="scrollbar" class="insights-wrapper">
        <Insights classes="insights-block"/>
        </div>
      </div>
    </section>
    <FooterNav />
    <Transition name="modal-fade">
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { Asset } from '~/types/assets'
import type { PaginatedCollection, Pagination } from '~/types'

// const mockups = ref<Asset[]>([])
// const paginationData = ref<Pagination>()
// const subTitle = ref('This will fetch and show the First Mockup')

// const fetchData = async () => {
//   const { data } = await useGet<PaginatedCollection<Asset>>('/posts')

//   if (data.value) {
//     mockups.value = data.value.data
//     paginationData.value = lodashOmit(data.value, 'data')
//     subTitle.value = 'First Mockup'
//   }
// }

const metaDef = useDefault('meta')
// You should not update title or any other like this,
// metaDef.title += ' - Home'
// it will update the meta default value metaDef
// You can remove this comments
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} - Home`,
})
</script>
