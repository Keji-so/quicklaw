<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, 88vw" src="@/public/assets/images/download-hero-image.png" srcset="@/public/assets/images/download-hero-image-p-500.png 500w, @/public/assets/images/download-hero-image-p-800.png 800w, @/public/assets/images/download-hero-image-p-1080.png 1080w, @/public/assets/images/download-hero-image-p-1600.png 1600w, @/public/assets/images/download-hero-image.png 1901w">
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block">
          <div class="page-title">
            DOWNLOAD A TEMPLATE
          </div>
          <h1 class="heading-h2">
            Buy An Agreement Template
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
      <div class="download-agreement_section">
        <div class="download-form_container">
          <div class="download-form_prompt">
            Purchase a legally vetted agreement template for a host of services. These agreements have been drafted to enable you to insert key information with ease.
          </div>
          <h2 class="download-form_header">
            SELECT A TEMPLATE
          </h2>
          <div class="form-block w-form">
            <form id="wf-form-Download-Form" data-name="Download Form" data-wf-element-id="ae1177f9-ef0a-374f-766b-63f55115de85" data-wf-page-id="66478d188a7cf431ed0b2b29" method="get" name="wf-form-Download-Form">
              <div class="c-form_field cc-sm">
                <div class="c-label_wrapper">
                  <div class="c-label">
                    Select A Template
                  </div>
                </div>
                <div class="c-dropdown">
                  <div  class="dropdown-toggle" @click="toggleDropdown">
                    <div>{{selectedService?.name}}</div>
                  </div>
                  <div v-if="isDropdownOpen" class="dropdown-list">
                    <div v-for="(service, index) in services" :key="service.id" class="dropdown-list_item" @click="handleChange(service)">
                      {{service.name}}
                    </div>
                  </div>
                </div>
              </div>
              <div class="c-form_field cc-sm">
                <div class="c-label_wrapper">
                  <div class="c-label">
                    Full Name
                  </div>
                </div>
                <div class="c-input_wrapper">
                  <input id="Fullname-4" class="c-input w-input" data-name="Fullname" maxlength="256" name="Fullname" placeholder="Enter Full Name" required type="text">
                </div>
                <div class="c-help">
                  This is a dummy help text
                </div>
              </div>
              <div class="c-form_field cc-sm">
                <div class="c-label_wrapper">
                  <div class="c-label">
                    Email Address
                  </div>
                </div>
                <div class="c-input_wrapper">
                  <input id="Email-Address" class="c-input w-input" data-name="Email Address" maxlength="256" name="Email-Address" placeholder="Enter Email Address" required type="email">
                </div>
                <div class="c-help">
                  This is a dummy help text
                </div>
              </div>
              <div class="c-form_field cc-sm">
                <div class="c-label_wrapper">
                  <div class="c-label">
                    Phone Number
                  </div>
                </div>
                <div class="c-input_wrapper">
                  <input id="Phone-Number" class="c-input w-input" data-name="Phone Number" maxlength="256" name="Phone-Number" placeholder="Enter Phone Number" required type="tel">
                </div>
                <div class="c-help">
                  This is a dummy help text
                </div>
              </div>
              <div class="uc-align-right">
                <input class="c-button cc-secondary-green w-button" data-wait="" type="submit" value="Checkout">
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
        <div class="download-reciept_block cc-download">
          <div class="download-reciept">
            <div class="order-details_top">
              <div class="download-form_header uc-mb-0">
                ORDER DETAILS
              </div>
              <div class="order-id">
                Order ID: #12456AJ
              </div>
              <div class="order-details">
                <div class="order-details_inner">
                  <div>{{selectedService?.name}}</div>
                  <div class="order-price">
                    ₦{{ formatNumber(selectedService?.price, '0,0') }}
                  </div>
                </div>
                <div class="order-code_image">
                  <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/la_qrcode.png">
                </div>
              </div>
            </div>
            <div class="order-details_bottom">
              <div class="order-details_line" />
              <div class="order-details_flex">
                <div class="order-price_title">
                  SubTotal
                </div>
               <div>₦{{ numberEmptyState(formatNumber(selectedService?.price, '0,0')) }}</div>

              </div>
              <div class="order-details_flex">
                <div class="order-price_title">
                  Paystack Transactions Fee
                </div>
                <div>₦{{ numberEmptyState(formatNumber(transactionFee, '0,0')) }}</div>
              </div>
              <div class="reciept-circle cc-left" />
              <div class="reciept-circle cc-right" />
            </div>
            <div class="order-details_flex">
              <div class="order-price_title">
                Total
              </div>
              <div>₦{{ numberEmptyState(formatNumber(totalPrice, '0,0')) }}</div>
            </div>
          </div>
          <div class="c-note">
            <div class="note-icon" />
            <div class="note-text">
              Kindly wait for your order confirmation after payment before closing the browser, tab or this page
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterNav />
  </div>
</template>

<script setup lang="ts">
import type { Services } from "~/types/services"
import { useModal } from '~/composables/useModal'

const modal = useModal()
const services = ref<Services[]>([])
const selectedService = ref<Services | []>([])
const isDropdownOpen = ref(false)
const transactionFee = ref<number>(324)
const totalPrice = ref<number>(0)


const fetchServicesState = useFetchState('/services/all')



const fetchAllServices = async () => {
// const { data } = await useGet<Services>(fetchServicesState.value.url, {});
//   try {
//     const { data } = await useGet<Services>(fetchServicesState.value.url,{})
//     if (data.value) {
//       services.value = data.value as Services[] 
//     } 
//     }
//     catch (error) {
//     console.error('Error fetching categories:', error);
//   }


  try {
    const response = await fetch('/services.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data: Services[] = await response.json()
    services.value = data

    // Set the first service as the selected service if available
    if (data.length > 0) {
      selectedService.value = data[0]
      totalPrice.value = selectedService?.value.price + transactionFee.value
    }
  } catch (error) {
    console.error('Error fetching services:', error)
  }
}

const handleChange = (service: Services) => {
  selectedService.value = service
  isDropdownOpen.value = false // Close dropdown after selection
  getTotalPrice()
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const getTotalPrice = () => {
  if(selectedService.value) {
  totalPrice.value = selectedService?.value.price + transactionFee.value
    }
}

onMounted(() => {
  fetchAllServices()
})

// SEO Meta
const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Download a Template`,
})
</script>

<style scoped>

</style>
