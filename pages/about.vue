<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, 88vw" :src="hero_image || '#'">
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block">
          <div class="page-title">
            {{ hero.heading }}
          </div>
          <h1 class="heading-h2">
            {{ hero.description }}
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
    <section class="c-section cc-small-width">
      <div class="founders-section">
        <div class="founders-note_block">
          <h2 class="founders-note_header">
            {{ founders_note.title }}
          </h2>
          <div v-html="founders_note.content" class="founders-note">
          </div>
          <div>
            <div class="founders-signature">
              Sade
            </div>
            <div class="uc-medium-text">
              {{ founders_note.position }}
            </div>
          </div>
        </div>
        <div class="founders-image">
          <img alt="" class="c-img cc-cover" loading="lazy"
            sizes="(max-width: 767px) 90vw, (max-width: 991px) 44vw, 41vw" :src="founders_image">
        </div>
      </div>
      <h3 class="block-quote">
        {{ who_we_are.quote }}
      </h3>
      <div class="about-flex">
        <div class="about-img">
          <img alt="" class="c-img cc-cover" loading="lazy"
            sizes="(max-width: 767px) 90vw, (max-width: 991px) 41vw, 39vw" :src="about_image">
        </div>
        <div class="about-text_container">
          <div class="about-text_illustration">
            <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/about-illustration.svg">
          </div>
          <div class="about-text_block">
            <div class="about-header_text">
              <div class="uc-green-text">
                {{ who_we_are.title }}
              </div>
            </div>
            <div>
              {{ who_we_are.description }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterNav />
  </div>
</template>

<script setup lang="ts">
import type { Hero, FoundersNote, WhoWeAreSection, Image } from "~/types/content"
const content = ref(null)
const hero = ref<Hero[]>([])
const founders_note = ref<FoundersNote[]>([])
const who_we_are = ref<WhoWeAreSection[]>([])
const hero_image = ref<Image>({})
const founders_image = ref<Image>({})
const about_image = ref<Image>({})






const fetchPageData = async () => {
  try {
    const response = await fetch('https://cms.quicklaw.ng/api/about?populate=deep')

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    content.value = data.data
    hero.value = content.value.hero
    hero_image.value = hero.value.image.url
    founders_note.value = content.value.founders_note
    founders_image.value = founders_note.value.image.url
    who_we_are.value = content.value.who_we_are_section
    about_image.value = who_we_are.value.image.url


  } catch (error) {
    console.error('Error fetching home page data:', error)
  }
}

onMounted(() => {
  fetchPageData()
})

const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | About`,
})
</script>

<style scoped></style>
