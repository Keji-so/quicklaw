<template>
  <Transition name="modal-fade">
    <div v-if="modal.isVisible" class="c-popup cc-show">
    <div class="c-popup_inner cc-service-checkout">
      <div class="popup-close_btn cc-white" @click="modal.hide('DefaultServiceForm')"></div>
      <div class="heading-h4">{{selectedService.name}}</div>
      <div class="services-details_block">
        <div class="services-form_wrapper w-form">
          <form id="wf-form-services-form" name="wf-form-services-form" data-name="services form" method="get" class="services-form_container" data-wf-page-id="66533123d0bbd2c82eeaa214" data-wf-element-id="e0bb01c6-2b6a-3e88-98da-6a5417ee327d">
            <div id="scrollbar" data-lenis-prevent="" class="services-form_inner">
              <div class="services-form_block">
                <p class="services-from_header">COMPANY DETAILS</p>
                <div class="c-form_field cc-sm">
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
                </div>
              </div>
              <div class="services-form_block">
                <p class="services-from_header">COMPANY DETAILS</p>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">Company Name</div>
                  </div>
                  <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256" name="Company-Name-3" data-name="Company Name 3" placeholder="Enter Company Name" type="text" id="Company-Name-3" required=""></div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">Alternate Company Name</div>
                  </div>
                  <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256" name="Alternate-Company-Name-2" data-name="Alternate Company Name 2" placeholder="Enter Alternate Company Name" type="text" id="Alternate-Company-Name-2" required=""></div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">Registered Address</div>
                  </div>
                  <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256" name="Registered-Address-2" data-name="Registered Address 2" placeholder="Enter Registered Company Address" type="text" id="Registered-Address-2" required=""></div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">Object of Business</div>
                  </div>
                  <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256" name="Object-of-Business-3" data-name="Object Of Business 3" placeholder="Enter Object of Business" type="text" id="Object-of-Business-3" required=""></div>
                </div>
                <div class="c-form_field cc-mb-0">
                  <div class="c-label_wrapper">
                    <div class="c-label">Scope of Business</div>
                  </div>
                  <div class="c-input_wrapper"><textarea id="Scope-of-Business-2" name="Scope-of-Business-2" maxlength="5000" data-name="Scope Of Business 2" placeholder="Briefly tell us how your company is run ..." required="" class="c-input cc-textarea w-input"></textarea></div>
                </div>
              </div>
            </div>
            <div class="btn-flex cc-order-popup"><input type="submit" data-wait="" class="c-button w-button" value="Next"></div>
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
                <div class="order-id">Order ID: #12456AJ</div>
                <div class="order-details">
                  <div class="order-details_inner">
                    <div>Incorporate A Company</div>
                    <div class="order-price">₦15,000.00</div>
                  </div>
                  <div class="order-code_image"><img src="@/public/assets/images/la_qrcode.png" loading="lazy" alt="" class="c-img"></div>
                </div>
              </div>
              <div class="order-details_bottom">
                <div class="order-details_line"></div>
                <div class="order-details_flex">
                  <div class="order-price_title">SubTotal</div>
                  <div>₦15,000.00</div>
                </div>
                <div class="order-details_flex">
                  <div class="order-price_title">Paystack Transactions Fee</div>
                  <div>₦324.00</div>
                </div>
                <div class="reciept-circle cc-green cc-left"></div>
                <div class="reciept-circle cc-green cc-right"></div>
              </div>
              <div class="order-details_flex">
                <div class="order-price_title">Total</div>
                <div>₦15,324.00</div>
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
import { useModal } from '~/composables/useModal'

import type { Services } from "~/types/categories"


const props = defineProps({
  service: {
   type: Object as () => Services,
    default: () => {}
  }
})

const selectedService = ref<Services>(props.service)

const modal = useModal('DefaultServiceModal')

</script>

<style scoped>

</style>