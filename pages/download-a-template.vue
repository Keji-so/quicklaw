<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, 88vw"
                        :src="hero_image.url"
            >
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block">
          <div class="page-title">
                                  {{ hero.heading }}
          </div>
          <h1 class="heading-h2">
                                               {{ hero.description}}
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
            {{body_content.form_info_text}}
          </div>
          <h2 class="download-form_header">
            SELECT A TEMPLATE
          </h2>
          <div class="form-block w-form">
            <form id="wf-form-Download-Form" data-name="Download Form"
              data-wf-element-id="ae1177f9-ef0a-374f-766b-63f55115de85" data-wf-page-id="66478d188a7cf431ed0b2b29"
              method="get" name="wf-form-Download-Form">
              <div class="c-form_field cc-sm">
                <div class="c-label_wrapper">
                  <div class="c-label">
                    Select A Template
                  </div>
                </div>
                <div class="c-dropdown">
                  <div class="dropdown-toggle" @click="toggleDropdown">
                    <div>{{ selectedService?.name }}</div>
                  </div>
                  <div v-if="isDropdownOpen" class="dropdown-list">
                    <div v-for="(service, index) in services" :key="service.id" class="dropdown-list_item"
                      @click="handleChange(service)">
                      {{ service.name }}
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
                  <input id="full-name" v-model="formData.full_name" class="c-input w-input"
                    :class="{ 'cc-error': v$.formData.full_name.$error }" maxlength="256" name="Full-Name"
                    placeholder="Enter your First Name &amp; Last Name" type="text">
                </div>
                <div v-if="v$.formData.full_name.$errors.length" class="c-help cc-error">
                  {{ v$?.formData.full_name?.$errors[0]?.$message }}
                </div>

              </div>
              <div class="c-form_field cc-sm">
                <div class="c-label_wrapper">
                  <div class="c-label">
                    Email Address
                  </div>
                </div>
                <div class="c-input_wrapper">
                  <input id="email" v-model.lazy="formData.email" class="c-input w-input"
                    :class="{ 'cc-error': v$.formData.email.$error }" maxlength="256" name="email"
                    placeholder="Enter your Email Address" type="email">
                </div>
                <div v-if="v$.formData.email.$errors.length" class="c-help cc-error">
                  {{ v$?.formData.email?.$errors[0]?.$message }}
                </div>
              </div>
              <div class="c-form_field cc-sm">
                <div class="c-label_wrapper">
                  <div class="c-label">
                    Phone Number
                  </div>
                </div>
                <div class="c-input_wrapper">
                  <input id="phone-number" v-model.lazy="formData.phone_number"
                    :class="{ 'cc-error': v$.formData.phone_number.$error }" class="c-input w-input" maxlength="256"
                    name="phone_number" placeholder="Enter Phone Number" type="tel">
                </div>
                <div v-if="v$.formData.phone_number.$errors.length" class="c-help cc-error">
                  {{ v$?.formData.phone_number?.$errors[0]?.$message }}
                </div>
              </div>
              <div class="uc-align-right">
                <input class="c-button cc-secondary-green w-button" data-wait="" type="submit" value="Checkout"
                  @click.prevent="handlePayment">
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
                  <div>{{ selectedService?.name }}</div>
                  <div class="order-price">
                    <div>₦{{ numberEmptyState(formatNumber(selectedService?.price, '0,0')) }}</div>
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
                      {{body_content.order_info_text}}

            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterNav />
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import type { Hero, Image, DownloadTemplateData } from "~/types/content"
import type { Services } from "~/types/services"
import { useModal } from '~/composables/useModal'


const modal = useModal('SignInModal')
const content = ref(null);
const hero = ref<Hero[]>([])
const hero_image = ref<Image[]>([])
const body_content = ref<DownloadTemplateData[]>([])
const services = ref<Services[]>([])
const selectedService = ref<Services | []>([])
const isDropdownOpen = ref(false)
const transactionFee = ref<number>(324)
const totalPrice = ref<number>(0)
// const router = useRouter()
const auth = useAuth()
// const payment = usePay()
const nameRegex = helpers.regex(/^[A-Za-z]+(?:\s[A-Za-z]+)*\s*$/)

const fetchServicesState = useFetchState('/services/all')
const createOrderState = useFetchState('/order/create')


const fetchPageData = async () => {
    try {
        const response = await fetch('https://cms.quicklaw.ng/api/download-template?populate=deep')
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        content.value = data.data; 
        hero.value = content.value.hero
         hero_image.value = hero.value.image
         body_content.value = content.value
        
        
        
    } catch (error) {
        console.error('Error fetching home page data:', error);
    }
};


const formData = ref({
  id: '',
  subtotal: '',
  total: '',
  phone_number: '',
})


const rules = computed(() => ({
  formData: {
    full_name: {
      required: helpers.withMessage('Please enter your full name', required),
      nameRegex: helpers.withMessage('Name should only contain letters', nameRegex),
    },
    email: {
      required: helpers.withMessage('Please enter a valid email address', required),
      email: helpers.withMessage('Please enter a valid email address', email)
    },
    phone_number: {
      required: helpers.withMessage('Phone number is required', required),
      maxLength: helpers.withMessage('Phone number must be at most 10 digits long', maxLength(14)),
      minLength: helpers.withMessage('Phone number must be at least 10 digits long', minLength(10))
    },
  },

}))

const v$ = useVuelidate(
  rules,
  {
    formData,
    $autoDirty: true,
  },
)

const fetchAllServices = async () => {
  const { data } = await useGet<Services>(fetchServicesState.value.url, {});
    try {
      const { data } = await useGet<Services>(fetchServicesState.value.url,{})
      if (data.value) {
        services.value = data.value.data as Services[] 
        
     if (services.value.length > 0) {
       selectedService.value = services.value[0]
       totalPrice.value = selectedService?.value.price + transactionFee.value
    }
      } 
      }
      catch (error) {
      console.error('Error fetching categories:', error);
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
  if (selectedService.value) {
    totalPrice.value = selectedService?.value.price + transactionFee.value
  }
}


const handlePayment = async () => {
  if (auth.value?.isLoggedIn) {
    //   v$.value.$touch()
    //   if (v$.value.$invalid) {
    //     useToastExtended('error').show('Some fields require your attention')
    //     return false
    // }
    const { data, error } = await usePost(createOrderState.value.url, formData)
    // formData.value.id = selectedService?.value.name 
    // formData.value.subtotal = selectedService?.value.price
    // formData.value.total = totalPrice.value     

  }
  else modal.show('SignInModal')
}

// const initializePaystackCheckout = () => {
//   const handler = window.PaystackPop.setup({
//     key: process.env.PAYSTACK_PUBLIC_KEY, // Replace with your Paystack public key
//     service: selectedService.name,
//     full_name: formData.value.name,
//     email: formData.value.email,
//     phone: formData.value.phone,
//     amount: selectedService?.value.price, 
//     currency: 'NGN', 
//     callback: function (response) {
//       alert('Payment successful! Reference: ' + response.reference)
//     },
//     onClose: function () {
//       alert('Payment was canceled')
//     },
//   })

//   handler.openIframe() // Open the payment modal
// }

const prefillForm = () => {
  formData.value = deepClone(auth.value.user)
  if (auth.value.user)
    formData.value.profile_payload = deepClone(auth.value.user)
    console.log(auth.value.user);
    
}
prefillForm()

onMounted(() => {
  fetchPageData()
  fetchAllServices()
})

// SEO Meta
const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Download a Template`,
})
</script>

<style scoped></style>
