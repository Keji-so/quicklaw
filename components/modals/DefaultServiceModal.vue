<template>
  <Transition name="modal-fade">
    <div v-if="modal.isVisible" class="c-popup cc-show">
      <div class="c-popup_inner cc-service-checkout">
        <div class="popup-close_btn cc-white" @click="closeModal"></div>
        <div class="heading-h4">{{ selectedService.name }}</div>
        <div class="services-details_block">
          <div class="services-form_wrapper w-form">
            <form id="wf-form-services-form" name="wf-form-services-form" data-name="services form" method="get"
              class="services-form_container" >
              <div id="scrollbar" data-lenis-prevent="" class="services-form_inner">


<div v-if="isPrevVisible">
     <div class="services-form_block">
                  <p class="services-from_header">{{ fieldTitle_1 }}</p>
                  <div class="c-form_field cc-sm" v-for="(field, index) in fields_1" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                      <component :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)"  />
                        <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                  </div>
                </div>

                <div class="services-form_block">
                  <p class="services-from_header">{{ fieldTitle_2 }}</p>
                  <div class="c-form_field cc-sm" v-for="(field, index) in fields_2[0]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                     <div @click="showFields_2" v-if="field.add_button && !isField_2_visible" to="/download-template" class="c-button cc-icon-btn cc-lg w-inline-block">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/plus-white.svg"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                  </div>

                    <div v-if="isField_2_visible" class="c-form_field cc-sm" v-for="(field, index) in fields_2[1]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                   <div @click="hideFields_2" v-if="field.remove_button && isField_2_visible"  class="c-button cc-icon-btn cc-lg cc-error">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/error.png"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                    
                  </div>
                </div>

                  <div class="services-form_block">
                  <p class="services-from_header">{{ fieldTitle_3 }}</p>
                  <div class="c-form_field cc-sm" v-for="(field, index) in fields_3[0]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                     <div @click="showFields_3" v-if="field.add_button && !isField_3_visible"  class="c-button cc-icon-btn cc-lg w-inline-block">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/plus-white.svg"></div>
                    <div>{{ field.button_text }}</div>
                  </div>

                  </div>
                   <div v-if="isField_3_visible" class="c-form_field cc-sm" v-for="(field, index) in fields_3[1]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                   <div @click="hideFields_3" v-if="field.remove_button && isField_3_visible"  class="c-button cc-icon-btn cc-lg cc-error">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/error.png"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                    
                  </div>
                </div>
</div>
           

           <div v-if="!isPrevVisible">

            <div class="services-form_block">
                  <p class="services-from_header">{{ fieldTitle_4 }}</p>
                  <div class="c-form_field cc-sm" v-for="(field, index) in fields_4[0]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                     <div @click="showFields_4" v-if="field.add_button && !isField_4_visible" to="/download-template" class="c-button cc-icon-btn cc-lg w-inline-block">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/plus-white.svg"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                  </div>

                    <div v-if="isField_4_visible" class="c-form_field cc-sm" v-for="(field, index) in fields_4[1]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                   <div @click="hideFields_4" v-if="field.remove_button && isField_4_visible"  class="c-button cc-icon-btn cc-lg cc-error">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/error.png"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                    
                  </div>
                </div>


                  <div class="services-form_block mt-20">
                  <p class="services-from_header">{{ fieldTitle_5 }}</p>
                  <div class="c-form_field cc-sm" v-for="(field, index) in fields_5[0]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                  </div>

                    <div  class="c-form_field cc-sm" v-for="(field, index) in fields_5[1]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                  
                     <div @click="showFields_5" v-if="field.add_button && !isField_5_visible" to="/download-template" class="c-button cc-icon-btn cc-lg w-inline-block">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/plus-white.svg"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                    
                  </div>

                      <div v-if="isField_5_visible" class="c-form_field cc-sm" v-for="(field, index) in fields_5[2]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                   <div @click="hideFields_5" v-if="field.remove_button && isField_5_visible"  class="c-button cc-icon-btn cc-lg cc-error">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/error.png"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                    
                  </div>
                </div>

                  <div class="services-form_block">
                  <p class="services-from_header">{{ fieldTitle_6 }}</p>
                  <div class="c-form_field cc-sm" v-for="(field, index) in fields_6[0]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                     <div @click="showFields_6" v-if="field.add_button && !isField_6_visible" to="/download-template" class="c-button cc-icon-btn cc-lg w-inline-block">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/plus-white.svg"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                  </div>

                    <div v-if="isField_6_visible" class="c-form_field cc-sm" v-for="(field, index) in fields_6[1]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                   <div @click="hideFields_6" v-if="field.remove_button && isField_6_visible"  class="c-button cc-icon-btn cc-lg cc-error">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/error.png"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                    
                  </div>
                </div>
           
           </div>


              </div>
              <div class="btn-flex cc-order-popup cc-align">
              <div v-if="!isPrevVisible" @click="showPrev" class="c-button">Previous</div>
              <div v-if="isPrevVisible" @click="showNext" class="c-button cc-left-align">Next</div>
              <input v-if="!isPrevVisible" @click.prevent="handlePayment" type="submit" data-wait=""
                  class="c-button cc-left-align w-button" value="Pay">
                  </div>
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <div class="service-order_details">
            <div data-lenis-prevent="" class="download-reciept_block">
              <div class="download-reciept">
                <div class="order-details_top">
                  <div class="download-form_header uc-mb-0">ORDER DETAILS</div>
                  <div class="order-id"></div>
                  <div class="order-details">
                    <div class="order-details_inner">
                      <div>{{ selectedService.name }}</div>
                      <div class="order-price">₦{{ numberEmptyState(formatNumber(selectedService?.price, "0,0")) }}</div>
                    </div>
                    <div class="order-code_image"><img src="@/public/assets/images/la_qrcode.png" loading="lazy" alt=""
                        class="c-img"></div>
                  </div>
                </div>
                <div class="order-details_bottom">
                  <div class="order-details_line"></div>
                  <div class="order-details_flex">
                    <div class="order-price_title">SubTotal</div>
                    <div>₦{{ numberEmptyState(formatNumber(selectedService?.price, "0,0")) }}</div>
                  </div>
                  <div class="order-details_flex">
                    <div class="order-price_title">Paystack Transactions Fee</div>
                    <div>₦{{ numberEmptyState(formatNumber(transactionFee, "0,0")) }}</div>
                  </div>
                  <div class="reciept-circle cc-green cc-left"></div>
                  <div class="reciept-circle cc-green cc-right"></div>
                </div>
                <div class="order-details_flex">
                  <div class="order-price_title">Total</div>
                  <div>₦{{ numberEmptyState(formatNumber(totalPrice, "0,0")) }}</div>
                </div>
              </div>
              <div class="c-note">
                <div class="note-icon"></div>
                <div class="note-text">Kindly wait for your order confirmation after payment before closing the browser,
                  tab or this page</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>

</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Services } from "~/types/categories"
import { useModal } from "~/composables/useModal"




const transactionFee = ref<number>(10)
const totalPrice = ref<number>(0)
const auth = useAuth()
const isField_2_visible = ref<boolean>(false)
const isField_3_visible = ref<boolean>(false)
const isField_4_visible = ref<boolean>(false)
const isField_5_visible = ref<boolean>(false)
const isField_6_visible = ref<boolean>(false)

const isPrevVisible = ref<boolean>(true)
const containsNextPage = ref<boolean>(false)



const payment = usePay()

// const nameRegex = helpers.regex(/^[A-Za-z]+(?:\s[A-Za-z]+)*\s*$/);
const props = defineProps({
  service: {
    type: Object as () => Services,
    default: () => { }
  }
})

const selectedService = ref<Services>(props.service)

totalPrice.value = selectedService?.value.price + transactionFee.value


const fields_1 = ref<any[]>([])
const fields_2 = ref<any[]>([])
const fields_3 = ref<any[]>([])
const fields_4 = ref<any[]>([])
const fields_5 = ref<any[]>([])
const fields_6 = ref<any[]>([])
const fieldTitle_1 = ref<string>()
const fieldTitle_2 = ref<string>()
const fieldTitle_3 = ref<string>()
const fieldTitle_4 = ref<string>()
const fieldTitle_5= ref<string>()
const fieldTitle_6 = ref<string>()




const error = ref<string | null>(null)
const formData = ref<Record<string, any>>({
})

const createOrderState = useFetchState("/orders/create")


const showFields_2 = () => { 
  isField_2_visible.value = true
}

const hideFields_2 = () => { 
  isField_2_visible.value = false
}

const showFields_3 = () => { 
  isField_3_visible.value = true
}

const hideFields_3 = () => { 
  isField_3_visible.value = false
}

const showFields_4 = () => { 
  isField_4_visible.value = true
}

const hideFields_4 = () => { 
  isField_4_visible.value = false
}

const showFields_5 = () => { 
  isField_5_visible.value = true
}

const hideFields_5 = () => { 
  isField_5_visible.value = false
}

const showFields_6 = () => { 
  isField_6_visible.value = true
}

const hideFields_6 = () => { 
  isField_6_visible.value = false
}

const showNext = () => { 
  isPrevVisible.value = false
  // containsNextPage.value = true
}

const showPrev = () => { 
  isPrevVisible.value = true
}





// Load form fields JSON
const loadFormFields = async () => {
  try {
    const response = await fetch('/formFields.json') 
    if (!response.ok) {
      throw new Error('Failed to load form fields')
    }
    return await response.json()
  } catch (err) {
    console.error(err)
    error.value = 'Error loading form fields.'
  }
}

const fetchApiResponse = async () => {
  const targetParty = lodashSnakeCase(selectedService.value.name)  
  const formFields = await loadFormFields()

  if (formFields.hasOwnProperty(targetParty)) {
    fields_1.value = formFields[targetParty].fields_1
    fields_2.value = formFields[targetParty].fields_2
    fields_3.value = formFields[targetParty].fields_3
    fields_4.value = formFields[targetParty].fields_4
    fields_5.value = formFields[targetParty].fields_5
    fields_6.value = formFields[targetParty].fields_6
    fieldTitle_1.value = formFields[targetParty].field_title_1
    fieldTitle_2.value = formFields[targetParty].field_title_2
    fieldTitle_3.value = formFields[targetParty].field_title_3
    fieldTitle_4.value = formFields[targetParty].field_title_4
    fieldTitle_5.value = formFields[targetParty].field_title_5
    fieldTitle_6.value = formFields[targetParty].field_title_6


  } else {
    error.value = 'Invalid target party.'
  }

}


const createOrder = async () => {
  const payload = {
    service_id: selectedService?.value.id,
    payment_ref: generateRef(),
    total: totalPrice.value,
    subtotal: selectedService.value.price,
    company_details: {
          ...formData.value
    },
  }



  const { data, error } = await usePost(createOrderState.value.url, payload)
  if (data.value) useToastExtended("success").show("Success")
  return data.value
}

const handlePayment = async () => {
  if (auth.value?.isLoggedIn && modal.isVisible) {
    payWithPaystack()
  } else {
    modal.show("SignInModal")
    modal.hide('DefaultServiceModal')
  }
}

const userEmail = auth.value.user.email

const payWithPaystack = async () => {
  const order = await createOrder()


  if (order) {
    try {
      await payment.paystack(
        userEmail,
        selectedService.value.price,
        order.data.payment_ref
      )
      modal.hide('DefaultServiceModal')
      modal.show('DefaultOrderSuccessModal')
    } catch (error) {
      console.error(error)
      
    }
  }
}

const updateFormData = (model, event) => {
      if (!(model in formData.value)) {
        formData.value[model] = event.target.value;
      } else {
        formData.value[model] = event.target.value; 
      }

    };

const generateRef = () => {
  const prefix = () => {
    return "pstk"
  }
  const randomNumber = Math.floor(100000000000 + Math.random() * 900000000000)
  const randomId = prefix() + randomNumber
  return randomId
}




const modal = useModal('DefaultServiceModal')

const emit = defineEmits<{
  (event: 'modalClosed', service: Services | null): void
}>()

const closeModal = () => {
  modal.hide('DefaultServiceModal')
  emit('modalClosed', null)
}

onMounted(() => {
  fetchApiResponse()
})
</script>

<style scoped>

</style>