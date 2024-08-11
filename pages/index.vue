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
            :src="hero_image.url"
          >
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block">
          <h1 class="heading-h1">
                       {{ hero.heading }}
          </h1>
          <div class="hero-subtext">
                                   {{ hero.description}}
          </div>
          <nuxtLink  class="c-button cc-md" :to="hero.cta_link"> {{ hero.cta_text }}</nuxtLink>
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
                {{ services.title}}
              </div>
            </div>
            <nuxtLink class="c-button" :to="services.cta_link">{{ services.cta_text }}</nuxtLink>
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
              {{insights.title}}
            </div>
          </div>
          <nuxtLink class="c-button cc-md cc-secondary-green" :to="insights.cta_link"> {{insights.cta_text}}</nuxtLink>
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
import type { Hero, ServicesSection, InsightsSection, Image} from "~/types/content"
const content = ref(null);
const hero = ref<Hero[]>([])
const services = ref<ServicesSection[]>([])
const insights = ref<InsightsSection[]>([])
const hero_image = ref<Image[]>([])





const fetchPageData = async () => {
    try {
        const response = await fetch('https://cms.quicklaw.ng/api/home?populate=deep'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        content.value = data.data; 
        hero.value = content.value.hero
        services.value = content.value.services_section
        insights.value = content.value.insights_section
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
  title: `${metaDef.title} - Home`,
})
</script>
