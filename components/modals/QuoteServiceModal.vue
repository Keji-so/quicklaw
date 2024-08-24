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
                  <p class="services-from_header cc-margin-top">{{fieldTitle}}</p>
                  <div class="form-flex cc-popup"  >
                    <div class="c-form_field cc-categories" v-for="(field, index) in fields" :key="index" >
                      <div class="c-label_wrapper">
                        <label class="c-label">{{ field.label }}</label>
                      </div>
                      <component :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                        class="c-input w-input" :type="field.type" />
                    </div>
                  </div>

                                    <div class="c-form_field cc-sm">
      <div class="c-label_wrapper">
        <label class="c-label">Phone Number</label>
      </div>
      <input
        v-model="formData.phone_number"
        type="tel"
        placeholder="Enter your phone number"
        class="c-input w-input"
      />
    </div>
                  <!-- <div class="form-flex cc-popup">
                    <div class="c-form_field">
                      <div class="upload-btn">
                        <div class="upload-btn_icon"></div>
                        <div>Upload Document</div>
                      </div>
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div class="c-form_field">
                      <a class="c-button cc-icon-btn cc-lg w-inline-block">
                        <div class="button-icon"><img src="@/public/assets/images/plus-white.svg" loading="lazy" alt=""
                            class="c-img"></div>
                        <div>New Order</div>
                      </a>
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div class="c-form_field">
                      <a class="c-button cc-icon-btn cc-lg w-inline-block">
                        <div class="button-icon"><img src="@/public/assets/images/plus-white.svg" loading="lazy" alt=""
                            class="c-img"></div>
                        <div>Add Role</div>
                      </a>
                    </div>
                  </div> -->
                </div>
                <div class="services-form_divider cc-mb-0"></div>
                <div class="services-form_block">
                  <p class="services-from_header cc-margin-top">{{additionalTitle}}</p>
                  <div class="form-flex cc-popup">
                <div class="c-form_field cc-categories" v-for="(field, index) in additionalFields" :key="index" >
                      <div class="c-label_wrapper">
                        <label class="c-label">{{ field.label }}</label>
                      </div>
                      <component :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                        class="c-input w-input" :type="field.type" />
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




const fields = ref<any[]>([])
const fieldTitle = ref<string>()
const additionalFields = ref<any[]>([])
const additionalTitle = ref<string>()


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
  const targetParty = selectedService.value.target_party
  const formFields = await loadFormFields()

  if (formFields.hasOwnProperty(targetParty)) {
    fields.value = formFields[targetParty].fields
    additionalFields.value = formFields[targetParty].additional_fields
    fieldTitle.value = formFields[targetParty].field_title
    additionalTitle.value = formFields[targetParty].additional_title

  } else {
    error.value = 'Invalid target party.'
  }

}

const formData = ref<Record<string, any>>({
  phone_number: '', 
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


const createOrder = async () => {
  if (auth.value?.isLoggedIn) {
    const phoneNumber = formData.value.phone_number
    const companyName = ""
    const alternateCompanyName = ""
    const registeredAddress = ""
    const objectOfBusiness = ""
    const scopeOfBusiness = ""
    const payload = {
      // payment_ref: generateRef(),
      payment_ref: 'etryu',
      service_id: selectedService?.value.id,
      phone_number: phoneNumber,
      company_details: {
        "Company Name": companyName,
        "Alternate Company Name": alternateCompanyName,
        "Registered Address": registeredAddress,
        "Object of Business": objectOfBusiness,
        "Scope of Business": scopeOfBusiness,
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