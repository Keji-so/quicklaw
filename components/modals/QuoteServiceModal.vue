<template>
  <Transition name="modal-fade">
    <div v-if="modal.isVisible" class="c-popup cc-show">
      <div class="c-popup_inner cc-service-checkout">
        <div class="popup-close_btn cc-white" @click="closeModal"></div>
        <div class="heading-h4">{{ selectedService.name }}</div>
        <div class="services-details_block">
          <div class="services-form_wrapper cc-wide w-form">
            <form id="wf-form-services-quote-form" name="wf-form-services-quote-form" data-name="services quote form"
              method="get" class="services-form_container" data-wf-page-id="66533123d0bbd2c82eeaa214"
              data-wf-element-id="e0bb01c6-2b6a-3e88-98da-6a5417ee332b">
              <div id="scrollbar" data-lenis-prevent="" class="services-form_inner cc-quote-form">
                <div class="c-note cc-grey">
                  <div class="note-icon"></div>
                  <div class="note-text">This service does not have a fixed price attached due to its unique
                    intricacies. For this reason, we charge on case-by-case basis for this service. Kindly fill out
                    the form below with the appropriate information to receive a quote.</div>
                </div>
                <div class="services-form_block" >
                  <p class="services-from_header cc-margin-top">{{fieldTitle_1}}</p>
                  <div class="form-flex cc-popup"  >

                    <div class="c-form_field cc-categories" v-for="(field, index) in fields_1" :key="index" >
                      <div class="c-label_wrapper">
                        <label class="c-label">{{ field.label }}</label>
                      </div>
                      <component  v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                    </div>
                  </div>

                </div>
                <div class="services-form_divider cc-mb-0"></div>
                <div class="services-form_block">
                  <p class="services-from_header cc-margin-top">{{fieldTitle_2}}</p>
                  <div class="form-flex cc-popup">
                <div  class="c-form_field cc-categories" v-for="(field, index) in fields_2[0]" :key="index" >
                      <div  class="c-label_wrapper">
                        <label class="c-label">{{ field.label }}</label>
                      </div>
                       <component  v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                         <div @click="showFields_2" v-if="field.add_button && !isField_2_visible" to="/download-template" class="c-button cc-icon-btn cc-lg w-inline-block">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/plus-white.svg"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                    </div>

  <div v-if="isField_2_visible" class="c-form_field cc-categories" v-for="(field, index) in fields_2[1]" :key="index">
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
                </div>

                 <div class="services-form_block">
                  <p class="services-from_header cc-margin-top">{{fieldTitle_3}}</p>
                  <div class="form-flex cc-popup">
                <div class="c-form_field cc-categories" v-for="(field, index) in fields_3[0]" :key="index" >
                      <div class="c-label_wrapper">
                        <label class="c-label">{{ field.label }}</label>
                      </div>
                       <component  v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                         <div @click="showFields_3" v-if="field.add_button && !isField_3_visible" to="/download-template" class="c-button cc-icon-btn cc-lg w-inline-block">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/plus-white.svg"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                    </div>

  <div v-if="isField_3_visible" class="c-form_field cc-categories" v-for="(field, index) in fields_3[1]" :key="index">
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

                    <div class="services-form_block">
                  <p class="services-from_header cc-margin-top">{{fieldTitle_4}}</p>
                  <div class="form-flex cc-popup">
                <div class="c-form_field cc-categories" v-for="(field, index) in fields_4[0]" :key="index" >
                      <div class="c-label_wrapper">
                        <label class="c-label">{{ field.label }}</label>
                      </div>
                       <component  v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                         <div @click="showFields_4" v-if="field.add_button && !isField_4_visible" to="/download-template" class="c-button cc-icon-btn cc-lg w-inline-block">
                     <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/plus-white.svg"></div>
                    <div>{{ field.button_text }}</div>
                  </div>
                    </div>

  <div v-if="isField_4_visible" class="c-form_field cc-categories" v-for="(field, index) in fields_4[1]" :key="index">
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
                </div>

                    <div class="services-form_block mt-20">
                  <p class="services-from_header">{{ fieldTitle_5 }}</p>
                    <div class="form-flex cc-popup">
                  <div class="c-form_field cc-categories" v-for="(field, index) in fields_5[0]" :key="index">
                    <div class="c-label_wrapper">
                      <label class="c-label">{{ field.label }}</label>
                    </div>
                     <component v-if="field.type" :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                       :value="formData[field.model]" class="c-input w-input" :type="field.type" @input="updateFormData(field.model, $event)" />
                         <label v-if="field.type === 'file'" class="file-label">
                           {{ field.placeholder }}
                        </label>
                  </div>

                    <div  class="c-form_field cc-categories" v-for="(field, index) in fields_5[1]" :key="index">
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

                </div>

                     <div class="services-form_block">
                  <p class="services-from_header">{{ fieldTitle_6 }}</p>
                     <div class="form-flex cc-popup">
                  <div class="c-form_field cc-categories" v-for="(field, index) in fields_6[0]" :key="index">
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

                    <div v-if="isField_6_visible" class="c-form_field cc-categories" v-for="(field, index) in fields_6[1]" :key="index">
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
              <div class="btn-flex cc-align-right"><input type="submit" data-wait=""
                  class="c-button cc-secondary-green w-button" value="Get A Quote"  @click.prevent="submitForm"></div>
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
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Services } from "~/types/categories"
import { useModal } from "~/composables/useModal";



const props = defineProps({
  service: {
    type: Object as () => Services,
    default: () => { }
  }
})

const selectedService = ref<Services>(props.service)

const isField_2_visible = ref<boolean>(false)
const isField_3_visible = ref<boolean>(false)
const isField_4_visible = ref<boolean>(false)
const isField_5_visible = ref<boolean>(false)
const isField_6_visible = ref<boolean>(false)



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


const error = ref<string | null>(null)


// Load form fields JSON
const loadFormFields = async () => {
  try {
    const response = await fetch('/formFields.json') // Adjust the path as necessary
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

const formData = ref<Record<string, any>>({
});

const createOrderState = useFetchState("/orders/create");

const auth = useAuth();


const submitForm = async () => {
  if (auth.value?.isLoggedIn) {
    createOrder()
  } else {
    modal.show("SignInModal")
   modal.hide('QuoteServiceModal')
  }
};


const updateFormData = (model, event) => {
      if (!(model in formData.value)) {
        formData.value[model] = event.target.value;
      } else {
        formData.value[model] = event.target.value; 
      }

    };


const createOrder = async () => {
  const date = formatDate(Date.now())
  if (auth.value?.isLoggedIn) {
    const payload = {
      payment_ref: `QTE-${date}`,
      service_id: selectedService?.value.id,
      company_details: {
        ...formData.value
      },
    }


    const { data, error } = await usePost(createOrderState.value.url, payload)

    
    if (data.value) {
      useToastExtended("success").show("Success")
       modal.hide('QuoteServiceModal')
       modal.show('DefaultOrderSuccessModal')
    }
    return data.value
   
  }
};
const modal = useModal('QuoteServiceModal')

const generateRef = () => {
  const prefix = () => {
    return "pstk";
  };

  const randomNumber = Math.floor(100000000000 + Math.random() * 900000000000);
  const randomId = prefix() + randomNumber;
  return randomId;
};

const emit = defineEmits<{
  (event: 'modalClosed', service: Services | null): void;
}>();

const closeModal = () => {
  modal.hide('QuoteServiceModal')
  emit('modalClosed', null);
}




onMounted(() => {
  fetchApiResponse()
})
</script>

<style scoped></style>