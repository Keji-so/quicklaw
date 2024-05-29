<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="88vw" src="@/public/assets/images/legal-hero-image.png" srcset="@/public/assets/images/legal-hero-image-p-500.png 500w, @/public/assets/images/legal-hero-image-p-800.png 800w, @/public/assets/images/legal-hero-image-p-1080.png 1080w, @/public/assets/images/legal-hero-image-p-1600.png 1600w, @/public/assets/images/legal-hero-image.png 1901w">
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block cc-services">
          <div class="page-title">
            LEGAL
          </div>
          <h1 class="heading-h2">
            Terms &amp; <br>Conditions
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
      <div class="legal-container">
        <div class="terms-conditions_content w-richtext">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <blockquote>Block quote</blockquote>
          <p>Ordered list</p>
          <ol role="list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>
          <p>Unordered list</p>
          <ul role="list">
            <li>Item A</li>
            <li>Item B</li>
            <li>Item C</li>
          </ul>
          <p>
            <a href="https://university.webflow.com/lesson/add-and-nest-text-links-in-webflow">Text link</a>
          </p>
          <p><strong>Bold text</strong></p>
          <p><em>Emphasis</em></p>
          <p><sup>Superscript</sup></p>
          <p><sub>Subscript</sub></p>
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
