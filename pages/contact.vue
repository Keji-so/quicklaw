<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-hero">
        <div class="hero-img">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="(max-width: 767px) 90vw, 88vw"
                                    :src="hero_image || '#'"

            >
          <div class="hero-img_overlay" />
        </div>
        <div class="hero-text_block cc-services">
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
      <div class="contact-section">
        <div class="contact-container">
          <div class="contact-header">
            <h2 class="heading-h3">
                                                           {{ form_content.title }}
            </h2>
          </div>
          <div class="form-block w-form">
            <form id="contact-form" name="contact-form" @submit.prevent="submitForm">
              <div class="contact-form_inner">
                <div class="form-flex">
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Full Name*
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
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Email Address*
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
                </div>
                <div class="c-form_field">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Subject*
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <input id="subject" v-model.lazy="formData.subject" class="c-input w-input"
                      :class="{ 'cc-error': v$.formData.subject.$error }" name="subject"
                      placeholder="Enter the Subject of your Messsage" type="text">
                  </div>
                  <div v-if="v$.formData.subject.$errors.length" class="c-help cc-error">
                    {{ v$?.formData.subject?.$errors[0]?.$message }}
                  </div>
                </div>
                <div class="c-form_field">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Message*
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <textarea id="message" v-model.lazy="formData.message" class="c-input cc-textarea w-input"
                      :class="{ 'cc-error': v$.formData.message.$error }" name="subject" type="text"
                      placeholder="Enter your Message here..." />
                  </div>
                  <div v-if="v$.formData.message.$errors.length" class="c-help cc-error">
                    {{ v$?.formData.message?.$errors[0]?.$message }}
                  </div>
                </div>
              </div><input class="c-button w-button" data-wait="" type="submit" :value="form_content.cta_text">
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
import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength, helpers } from '@vuelidate/validators'
import type { Hero, Image, Form } from "~/types/content"


const contactSubmitState = useFetchState('/contact-us')
const nameRegex = helpers.regex(/^[A-Za-z]+(?:\s[A-Za-z]+)*\s*$/)

const content = ref(null);
const hero = ref<Hero[]>([])
const hero_image = ref<Image>({})
const form_content = ref<Form[]>([])



const fetchPageData = async () => {
    try {
        const response = await fetch('https://cms.quicklaw.ng/api/contact?populate=deep')
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        content.value = data.data; 
        hero.value = content.value.hero
         hero_image.value = hero.value.image.url
        form_content.value = content.value.form
         
        
        
        
    } catch (error) {
        console.error('Error fetching home page data:', error);
    }
};



const formData = reactive({
  full_name: '',
  email: '',
  subject: '',
  message: '',
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
    subject: {
      required: helpers.withMessage('Message subject is required', required),
    },
    message: {
      required: helpers.withMessage('Message body is required', required),
      maxLength: helpers.withMessage('Message is too long', maxLength(5000)),
    },

  },

}))

const v$ = useVuelidate(
  rules,
  {
    formData,
  },
  { $autoDirty: true },
)

const submitForm = async () => {
  v$.value.$touch()

  const isFormInvalid =
    v$.value.formData.full_name.$invalid ||
    v$.value.formData.email.$invalid ||
    v$.value.formData.subject.$invalid ||
    v$.value.formData.message.$invalid

  if (isFormInvalid) {
    useToastExtended('error').show('Some fields require your attention')
    return false
  }


  const { data, error } = await usePost(contactSubmitState.value.url, formData)

  if (data.value) {
    useToastExtended('success').show('Thank you for your form submission!')
    formData.full_name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''
    v$.value.$reset()
  }

  if (error.value) {
    useToastExtended('error').show('An error occurred, please try again')
    return false
  }
}

onMounted(() => {
  fetchPageData()
})

const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Contact`,
})
</script>

<style scoped></style>
