<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, 88vw" src="@/public/assets/images/contact-hero-image.png" srcset="@/public/assets/images/contact-hero-image-p-500.png 500w, @/public/assets/images/contact-hero-image-p-800.png 800w, @/public/assets/images/contact-hero-image-p-1080.png 1080w, @/public/assets/images/contact-hero-image-p-1600.png 1600w, @/public/assets/images/contact-hero-image.png 1901w">
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block cc-services">
          <div class="page-title">
            CONTACT US
          </div>
          <h1 class="heading-h2">
            We Love Hearing From You
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
      <div class="contact-section">
        <div class="contact-container">
          <div class="contact-header">
            <h2 class="heading-h3">
              Leave A Message
            </h2>
          </div>
          <div class="form-block w-form">
            <form id="wf-form-" data-name="contact form" data-wf-element-id="3125d455-bda2-658a-bfe8-5cd0dfe56fc3" data-wf-page-id="6646598ea35a1ad891c89f2c" method="get" name="wf-form-">
              <div class="contact-form_inner">
                <div class="form-flex">
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Full Name*
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="fullname-2" class="c-input w-input" data-name="fullname" maxlength="256" name="fullname" placeholder="Enter your First Name &amp; Last Name" required type="text">
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Email Address*
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Email-3" class="c-input w-input" data-name="Email" maxlength="256" name="Email" placeholder="Enter your Email Address" required type="email">
                    </div>
                  </div>
                </div>
                <div class="c-form_field">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Subject*
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <input id="Subject" class="c-input w-input" data-name="Subject" maxlength="256" name="Subject" placeholder="Enter the Subject of your Message" required type="text">
                  </div>
                </div>
                <div class="c-form_field">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Message*
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <textarea id="Message" class="c-input cc-textarea w-input" data-name="Message" maxlength="5000" name="Message" placeholder="Enter your Message here..." required />
                  </div>
                </div>
              </div><input class="c-button w-button" data-wait="" type="submit" value="Submit Message">
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
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
  title: `${metaDef.title} | Contact`,
})
</script>

<style scoped>

</style>
