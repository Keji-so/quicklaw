<template>
  <section class="c-section">
    <div class="footer-wrapper">
      <div class="footer-illustration cc-img-one">
        <img
          alt=""
          class="c-img cc-align-right"
          loading="lazy"
          src="@/public/assets/images/footer-illustration-two.svg"
        >
      </div>
      <div class="footer-illustration cc-img-two">
        <img
          alt=""
          class="c-img cc-align-right"
          loading="lazy"
          src="@/public/assets/images/footer-illustration-one.svg"
        >
      </div>
      <div class="c-footer">
        <div class="footer-inner">
          <nuxtLink class="footer-logo w-inline-block" to="/">
            <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/quicklaw-logo.png">
          </nuxtLink>
          <div class="footer-inner_flex">
            <div class="newsletter-block">
              <div class="newsletter-block_header">
                <div class="heading-h1">
                                     {{footer.newsletter_title}}
                </div>
              </div>
              <div class="form-block w-form">
                <form
                  id="wf-form-newsletter-form"
                  data-name="newsletter-form"
                  data-wf-element-id="92f51844-067f-5d48-422c-e3f0b7a77531"
                  data-wf-page-id="6645f16080eddb8ba4ae8fab"
                  method="get"
                  name="wf-form-newsletter-form"
                >
                  <div class="c-form_field cc-mb-0">
                    <div class="c-input_wrapper">
                      <input
                        id="email-2"
                        class="c-input cc-trailing cc-footer w-input"
                        data-name="Email 2"
                        maxlength="256"
                        name="email-2"
                        :placeholder="footer.newsletter_placeholder"
                        required
                        type="email"
                      ><input
                        class="input-icon cc-trailing cc-arrow w-button"
                        data-wait=""
                        type="submit"
                        value=""
                      >
                    </div>
                  </div>
                </form>
                <div class="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div class="footer-links_wrapper">
              <div
                id="w-node-_92f51844-067f-5d48-422c-e3f0b7a7753d-b7a77522"
                class="footer-links"
              >
                <div class="footer-link_header">
                  MENU
                </div>
                <nuxtLink class="footer-link" to="/about">
                  About Us
                </nuxtLink>
                <nuxtLink class="footer-link" to="/services">
                  Services
                </nuxtLink>
                <nuxtLink class="footer-link" to="/insights">
                  Insights
                </nuxtLink>
              </div>
              <div
                id="w-node-_92f51844-067f-5d48-422c-e3f0b7a77546-b7a77522"
                class="footer-links"
              >
                <div class="footer-link_header">
                  SUPPORT
                </div>
                <nuxtLink class="footer-link" to="/terms-and-conditions">
                  Terms &amp; Conditions
                </nuxtLink>
                <nuxtLink class="footer-link  w-inline-block" to="/contact">
                  Contact Us
                </nuxtLink>
              </div>
              <div
                id="w-node-_92f51844-067f-5d48-422c-e3f0b7a7754d-b7a77522"
                class="footer-links"
              >
                <div class="footer-link_header">
                  CONNECT WITH US
                </div>
                <div class="social-links">
                  <a class="social-link w-inline-block" href="#">
                    <div class="w-embed">
                      <svg
                        fill="none"
                        viewbox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.1041 3.75H25.921L17.5819 13.2819L27.3928 26.25H19.7113L13.6955 18.3839L6.81061 26.25H2.99163L11.9116 16.0543L2.5 3.75104H10.3765L15.8145 10.9409L22.1041 3.75ZM20.7651 23.9661H22.88L9.22729 5.91464H6.95789L20.7651 23.9661Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a class="social-link w-inline-block" href="#">
                    <div class="w-embed">
                      <svg
                        fill="none"
                        viewbox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 10.6313C12.5813 10.6313 10.6313 12.6 10.6313 15C10.6313 17.4 12.6 19.3687 15 19.3687C17.4 19.3687 19.3687 17.4 19.3687 15C19.3687 12.6 17.4 10.6313 15 10.6313ZM28.125 15C28.125 13.1812 28.125 11.4 28.0312 9.58125C27.9375 7.48125 27.45 5.60625 25.9125 4.0875C24.375 2.55 22.5188 2.0625 20.4188 1.96875C18.6 1.875 16.8188 1.875 15 1.875C13.1812 1.875 11.4 1.875 9.58125 1.96875C7.48125 2.0625 5.60625 2.55 4.0875 4.0875C2.55 5.625 2.0625 7.48125 1.96875 9.58125C1.875 11.4 1.875 13.1812 1.875 15C1.875 16.8188 1.875 18.6 1.96875 20.4188C2.0625 22.5188 2.55 24.3937 4.0875 25.9125C5.625 27.45 7.48125 27.9375 9.58125 28.0312C11.4 28.125 13.1812 28.125 15 28.125C16.8188 28.125 18.6 28.125 20.4188 28.0312C22.5188 27.9375 24.3937 27.45 25.9125 25.9125C27.45 24.375 27.9375 22.5188 28.0312 20.4188C28.1437 18.6188 28.125 16.8188 28.125 15ZM15 21.7313C11.2688 21.7313 8.26875 18.7313 8.26875 15C8.26875 11.2688 11.2688 8.26875 15 8.26875C18.7313 8.26875 21.7313 11.2688 21.7313 15C21.7313 18.7313 18.7313 21.7313 15 21.7313ZM22.0125 9.5625C21.15 9.5625 20.4375 8.86875 20.4375 7.9875C20.4375 7.10625 21.1313 6.4125 22.0125 6.4125C22.8937 6.4125 23.5875 7.10625 23.5875 7.9875C23.5922 8.19288 23.5548 8.39705 23.4773 8.58734C23.3999 8.77763 23.2843 8.95 23.1375 9.09375C22.9937 9.24051 22.8214 9.35618 22.6311 9.43359C22.4408 9.511 22.2366 9.54849 22.0312 9.54375L22.0125 9.5625Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                  <a class="social-link w-inline-block" href="#">
                    <div class="w-embed">
                      <svg
                        fill="none"
                        viewbox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.625 16.6875H19.4375L20.5625 12.1875H16.625V9.9375C16.625 8.77875 16.625 7.6875 18.875 7.6875H20.5625V3.9075C20.1958 3.85913 18.8109 3.75 17.3484 3.75C14.294 3.75 12.125 5.61412 12.125 9.0375V12.1875H8.75V16.6875H12.125V26.25H16.625V16.6875Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-contact_block">
            <div class="footer-link_header">
              CONTACT US
            </div>
            <div>
              <div class="footer-contact_container">
                <div class="footer-contact_flex">
                  <div class="footer-contact_icon">
                    <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/house.svg">
                  </div>
                  <nuxtLink class="footer-contact_link" target="_blank" to="https://maps.app.goo.gl/VQGzw8nJtxNskUVN8">
                   {{footer.address}}
                  </nuxtLink>
                </div>
                <div class="footer-contact_flex">
                  <div class="footer-contact_icon">
                    <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/phone.svg">
                  </div>
                  <div>
                    <nuxtLink v-for="(contact_number, index) in contact_numbers" :key="contact_number.id" class="footer-contact_link" :to="`tel:${contact_number.number}`">
                    {{ contact_number.number }}
                    </nuxtLink>
                  </div>
                </div>
                <div class="footer-contact_flex">
                  <div class="footer-contact_icon">
                    <img
                      alt=""
                      class="c-img"
                      loading="lazy"
                      src="@/public/assets/images/envelope.svg"
                    >
                  </div>
                  <nuxtLink class="footer-contact_link" :to="`mailto:${footer.contact_email}`">
                    {{ footer.contact_email }}
                  </nuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-block">
          <div class="copyright-inner w-embed w-script">
            Quicklaw ©
            {{ currentYear }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { footerData, ContactNumber } from "~/types/content"
const content = ref(null);
const footer = ref<footerData[]>([])
const contact_numbers= ref<ContactNumber[]>([])





const fetchFooterData = async () => {
    try {
        const response = await fetch('https://cms.quicklaw.ng/api/footer?populate=deep'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
         footer.value  = data.data; 
         contact_numbers.value = footer.value.contact_numbers
         
        
        
    } catch (error) {
        console.error('Error fetching home page data:', error);
    }
};

onMounted(() => {
  fetchFooterData();
});
const currentYear = ref<number>(new Date().getFullYear())
</script>

<style scoped>

</style>
