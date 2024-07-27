<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, 88vw" src="@/public/assets/images/about-hero-image.png" srcset="@/public/assets/images/about-hero-image-p-500.png 500w, @/public/assets/images/about-hero-image-p-800.png 800w, @/public/assets/images/about-hero-image-p-1080.png 1080w, @/public/assets/images/about-hero-image-p-1600.png 1600w, @/public/assets/images/about-hero-image.png 1901w">
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block">
          <div class="page-title">
            ABOUT US
          </div>
          <h1 class="heading-h2">
            The Best Legal Support Service Starts Here
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
            Founder’s Note
          </h2>
          <div class="founders-note">
            Quicklaw was formed out of the difficulty faced by our immediate community in securing and trusting in the services of a lawyer at an affordable rate. From the inception of Quicklaw, our vision has been to empower individuals and businesses with accessible legal assistance, transcending the complexities of the legal landscape in Nigeria.<br><br>Today, I am humbled by the incredible strides we have taken together. Our commitment to democratising legal support has become the driving force behind our innovative online platform. We are bridging this gap by partnering with a wide talent pool of lawyers across Nigeria to cater to a range of legal services via our website. It is with immense pride that I witness Quicklaw evolve into a beacon of legal guidance, breaking down barriers and making essential legal<br>services more than a mere aspiration.<br><br>Our community, comprising clients, legal professionals, and the Quicklaw team, has been the heartbeat of this endeavor. Each interaction, feedback, and success story propels us forward. As we continue this journey, our dedication remains unwavering—to provide a seamless, empathetic, and efficient legal assistant that transforms the daunting into the manageable.<br><br>Thank you for entrusting us with your legal needs. Together, we are rewriting the narrative of legal support, making it a collaborative and empowering experience for all.
          </div>
          <div>
            <div>With gratitude,</div>
            <div class="founders-signature">
              Sade
            </div>
            <div class="uc-medium-text">
              Founder, Quicklaw
            </div>
          </div>
        </div>
        <div class="founders-image">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 44vw, 41vw" src="@/public/assets/images/sade-quicklaw.png" srcset="@/public/assets/images/sade-quicklaw-p-500.png 500w, @/public/assets/images/sade-quicklaw-p-800.png 800w, @/public/assets/images/sade-quicklaw.png 1212w">
        </div>
      </div>
      <h3 class="block-quote">
        We are equipped with lawyers whose expertise span across various aspects of the legal sector. This empowers us with the ability to properly manage all your legal issues.
      </h3>
      <div class="about-flex">
        <div class="about-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 41vw, 39vw" src="@/public/assets/images/aboot.png" srcset="@/public/assets/images/aboot-p-500.png 500w, @/public/assets/images/aboot-p-800.png 800w, @/public/assets/images/aboot.png 851w">
        </div>
        <div class="about-text_container">
          <div class="about-text_illustration">
            <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/about-illustration.svg">
          </div>
          <div class="about-text_block">
            <div class="about-header_text">
              <div class="uc-green-text">
                WHO WE ARE
              </div>
            </div>
            <div>Quicklaw is an online legal assistant which creates innovative, cost-effective and time-efficient legal services. This is achieved through a pool of experts who ensure that all your legal issues are handled professionally and in your best interest.<br><br>We leverage the affordability, speed and accessibility of technology to redefine legal services. On our website, you can access free legal information, legal agreements as well as the services of qualified and experienced legal practitioners in Nigeria.</div>
          </div>
        </div>
      </div>
    </section>
    <FooterNav />
  </div>
</template>

<script setup lang="ts">
const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | About`,
})
</script>

<style scoped>

</style>
