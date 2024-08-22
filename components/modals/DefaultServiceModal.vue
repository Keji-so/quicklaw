<template>
  <Transition name="modal-fade">
    <div v-if="modal.isVisible" class="c-popup cc-show">
    <div class="c-popup_inner cc-service-checkout">
      <div class="popup-close_btn cc-white" @click="closeModal"></div>
      <div class="heading-h4">{{selectedService.name}}</div>
      <div class="services-details_block">
        <div class="services-form_wrapper w-form">
          <form id="wf-form-services-form" name="wf-form-services-form" data-name="services form" method="get" class="services-form_container" data-wf-page-id="66533123d0bbd2c82eeaa214" data-wf-element-id="e0bb01c6-2b6a-3e88-98da-6a5417ee327d">
            <div id="scrollbar" data-lenis-prevent="" class="services-form_inner">
              <div class="services-form_block">
                <p class="services-from_header">{{fieldTitle}}</p>
                <div class="c-form_field cc-sm" v-for="(field, index) in fields" :key="index" >
                      <div class="c-label_wrapper">
                        <label class="c-label">{{ field.label }}</label>
                      </div>
                      <component :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                        class="c-input w-input" :type="field.type" />
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
                                <div class="c-form_field cc-sm">
      <div class="c-label_wrapper">
        <label class="c-label">Email</label>
      </div>
      <input
        v-model="formData.email"
        type="email"
        placeholder="Enter your phone number"
        class="c-input w-input"
      />
    </div>
                <!-- <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">Company Name</div>
                  </div>
                  <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256" name="Company-Name-5" data-name="Company Name 5" placeholder="Enter Company Name" type="text" id="Company-Name-5" required=""></div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">Alternate Company Name</div>
                  </div>
                  <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256" name="Alternate-Company-Name-3" data-name="Alternate Company Name 3" placeholder="Enter Alternate Company Name" type="text" id="Alternate-Company-Name-3" required=""></div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">Registered Address</div>
                  </div>
                  <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256" name="Registered-Address-3" data-name="Registered Address 3" placeholder="Enter Registered Company Address" type="text" id="Registered-Address-3" required=""></div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">Object of Business</div>
                  </div>
                  <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256" name="Object-of-Business-5" data-name="Object Of Business 5" placeholder="Enter Object of Business" type="text" id="Object-of-Business-5" required=""></div>
                </div>
                <div class="c-form_field">
                  <div class="c-label_wrapper">
                    <div class="c-label">Scope of Business</div>
                  </div>
                  <div class="c-input_wrapper"><textarea id="Scope-of-Business-3" name="Scope-of-Business-3" maxlength="5000" data-name="Scope Of Business 3" placeholder="Briefly tell us how your company is run ..." required="" class="c-input cc-textarea w-input"></textarea></div>
                </div>
                <div class="c-form_field">
                  <div class="c-label_wrapper">
                    <div class="c-label">Aims &amp; Objectives</div>
                  </div>
                  <div class="c-input_wrapper"><textarea id="Aims-Objectives-2" name="Aims-Objectives-2" maxlength="5000" data-name="Aims Objectives 2" placeholder="Enter Organisation Aims &amp; Objectives" required="" class="c-input cc-textarea w-input"></textarea></div>
                </div> -->
              </div>
              <div class="services-form_block">
                <p class="services-from_header">{{additionalTitle}}</p>
                <div class="c-form_field cc-sm" v-for="(field, index) in additionalFields" :key="index" >
                      <div class="c-label_wrapper">
                        <label class="c-label">{{ field.label }}</label>
                      </div>
                      <component :is="field.type === 'textarea' ? 'textarea' : 'input'" :placeholder="field.placeholder"
                        class="c-input w-input" :type="field.type" />
                    </div>
              </div>
            </div>
            <div class="btn-flex cc-order-popup"><input @click.prevent="handlePayment" type="submit" data-wait="" class="c-button w-button" value="Next"></div>
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
                    <div>{{selectedService.name}}</div>
                    <div class="order-price">{{selectedService.price}}</div>
                  </div>
                  <div class="order-code_image"><img src="@/public/assets/images/la_qrcode.png" loading="lazy" alt="" class="c-img"></div>
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
              <div class="note-text">Kindly wait for your order confirmation after payment before closing the browser, tab or this page</div>
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
import { useModal } from "~/composables/useModal";

// import { usePay } from '/composables/usePay';
const auth = useAuth();
  const payment = usePay();


const transactionFee = ref<number>(10);
const totalPrice = ref<number>(0);

// const nameRegex = helpers.regex(/^[A-Za-z]+(?:\s[A-Za-z]+)*\s*$/);
const props = defineProps({
  service: {
   type: Object as () => Services,
    default: () => {}
  }
})

const selectedService = ref<Services>(props.service)


totalPrice.value = selectedService?.value.price + transactionFee.value;


const fields = ref<any[]>([])
const fieldTitle = ref<string>()
const additionalFields = ref<any[]>([])
const additionalTitle = ref<string>()


const error = ref<string | null>(null)
const formData = ref<Record<string, any>>({
  phone_number: '', 
  email: '',
});

const createOrderState = useFetchState("/orders/create");



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


const createOrder = async () => {
 const phoneNumber = formData.value.phone_number;
  const companyName = "";
  const alternateCompanyName = "";
  const registeredAddress = "";
  const objectOfBusiness = "";
  const scopeOfBusiness = "";
  const payload = {
    service_id: selectedService?.value.id,
    phone_number: phoneNumber,
    payment_ref: generateRef(),
    total: totalPrice.value,
    subtotal: selectedService.value.price,
    company_details: {
      "Company Name": companyName,
      "Alternate Company Name": alternateCompanyName,
      "Registered Address": registeredAddress,
      "Object of Business": objectOfBusiness,
      "Scope of Business": scopeOfBusiness,
    },
  };
  


  const { data, error } = await usePost(createOrderState.value.url, payload);
  if (data.value) useToastExtended("success").show("Success");
  return data.value;
};

const handlePayment = async () => {
  if (auth.value?.isLoggedIn) {
    payWithPaystack();
  } else modal.show("SignInModal");
};

const payWithPaystack = async () => {
  const order = await createOrder();


  if (order) {
    try {
      await payment.paystack(
        formData.value.email,
        selectedService.value.price,
        order.data.payment_ref
      );
        modal.hide('DefaultServiceModal')
        modal.show('DefaultOrderSuccessModal')
    } catch (error) {
      console.error(error);
    }
  }
};

const generateRef = () => {
  const prefix = () => {
    return "pstk";
  };

  const randomNumber = Math.floor(100000000000 + Math.random() * 900000000000);
  const randomId = prefix() + randomNumber;
  return randomId;
};




const modal = useModal('DefaultServiceModal')

const emit = defineEmits<{
  (event: 'modalClosed', service: Services | null): void;
}>();

const closeModal = () => {
  modal.hide('DefaultServiceModal')
   emit('modalClosed', null);
}

onMounted(() => {
  fetchApiResponse()
})
</script>

<style scoped>

</style>