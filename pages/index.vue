<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
       <div class="hero-wrapper">
        <div class="hero-illustration cc-illustration-one"><img src="@/public/assets/images/hero-illustration-gold.svg" loading="lazy" alt="" class="c-img"></div>
        <div class="hero-illustration cc-illustration-two"><img src="@/public/assets/images/popup-illustration-4.svg" loading="lazy" alt="" class="c-img"></div>
        <div class="hero-illustration cc-illustration-three"><img src="@/public/assets/images/hero-illustration-green.svg" loading="lazy" alt="" class="c-img"></div>
       <div class="hero-slide_container swiper">
          <div class="c-hero cc-home swiper-wrapper">
            <div class="hero-slide_wrapper swiper-slide">
              <div class="hero-img"><img src="@/public/assets/images/home-hero-image.png" loading="lazy"  alt="" class="c-img cc-cover">
                <div class="hero-img_overlay"></div>
              </div>
              <div class="hero-text_block">
                <h1 class="heading-h1">Welcome to Quicklaw - Your Trusted Online Legal Assistant</h1>
                <div class="hero-subtext">We&#x27;re your innovative, cost-effective, and time-efficient legal partner, redefining the way legal services work for you in Nigeria.</div>
                <a href="#" class="c-button cc-md">Get Started</a>
              </div>
            </div>
            <div class="hero-slide_wrapper swiper-slide">
              <div class="hero-img"><img src="@/public/assets/images/hero-slide-2.png" loading="lazy"  alt="" class="c-img cc-cover cc-right-align">
                <div class="hero-img_overlay"></div>
              </div>
              <div class="hero-text_block">
                <h1 class="heading-h1">Startup <br>Advisory</h1>
                <div class="hero-subtext">Building a Startup? Quicklaw has you covered through your business lifecycle from ideation, formation, operations to winding up!</div>
                <a href="#" class="c-button cc-md">See Startup Advisory</a>
              </div>
            </div>
          </div>
       </div>
        </div>
    </section>
    <section class="c-section cc-small-width">
      <div class="services-section">
        <div class="services-inner">
          <div class="section-header_flex">
            <div class="section-inner_header uc-green-text">
              <div class="heading-h4">
                {{ services.title }}
              </div>
            </div>
            <nuxtLink class="c-button" :to="services.cta_link">{{ services.cta_text }}</nuxtLink>
          </div>
          <div class="services-list">
            <div id="w-node-_045f05d8-f113-974c-fd7e-64a6bb978efe-a4ae8fab" class="services-list_item">
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
            <div id="w-node-_045f05d8-f113-974c-fd7e-64a6bb978efe-a4ae8fab" class="services-list_item">
              <div class="services-list_flex">
                <div class="sevices-list_inner">
                  <div>Protect Your Ideas</div>
                </div>
                <div class="services-list_icon">
                  <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/gavel.svg">
                </div>
              </div>
              <div class="heading-h4">
                Receive adequate legal support and representation you require to protect your intellectual property.
              </div>
            </div>
            <div id="w-node-_045f05d8-f113-974c-fd7e-64a6bb978efe-a4ae8fab" class="services-list_item">
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
            <div id="w-node-_045f05d8-f113-974c-fd7e-64a6bb978efe-a4ae8fab" class="services-list_item">
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
              {{ insightsSection.title }}
            </div>
          </div>
          <nuxtLink class="c-button cc-md cc-secondary-green" :to="insightsSection.cta_link"> {{ insightsSection.cta_text }}</nuxtLink>
        </div>
        <div id="scrollbar-hide" class="insights-wrapper">
          <InsightsComponent :insights="insights" class="insights-block" />
        </div>
      </div>
    </section>
    <FooterNav />
    <Transition name="modal-fade">
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { Hero, ServicesSection, InsightsSection, Image, ArticleContent } from "~/types/content"
import Swiper from 'swiper/bundle';
const content = ref(null)
const hero = ref<Hero[]>([])
const services = ref<ServicesSection[]>([])
const insightsSection = ref<InsightsSection[]>([])
const insights = ref<ArticleContent[]>([])
const hero_image = ref<Image>({})




const fetchPageData = async () => {

  try {
    const response = await fetch('https://cms.quicklaw.ng/api/home?populate=deep')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    content.value = data.data
    hero.value = content.value.hero
    services.value = content.value.services_section
    insightsSection.value = content.value.insights_section
    hero_image.value = hero.value.image.url

  } catch (error) {
    console.error('Error fetching home page data:', error)
  }
}

const fetchAllPosts = async () => {
  try {
    const response = await fetch('https://cms.quicklaw.ng/api/posts?populate=deep')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    insights.value = data.data
  } catch (error) {
    console.error('Error fetching home page data:', error)
  }
}

const initSwiper = () => {
  const homeSwiper = new Swiper('.swiper', {
    speed: 1000,
    allowTouchMove: false,
    slidesPerView: 'auto',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  })  
}

onMounted(() => {
  fetchPageData()
  fetchAllPosts()
  initSwiper()
})

const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} - Home`,
})
</script>
