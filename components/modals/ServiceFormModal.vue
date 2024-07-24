<template>
  <Transition name="modal-fade">
    <div v-if="modal.isVisible" class="c-popup cc-show">
      <div class="c-popup_inner cc-service-checkout">
        <div class="popup-close_btn cc-white" @click="modal.hide('ServiceForm')"></div>
        <div class="heading-h4">Policy Advice</div>
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
                <div class="services-form_block">
                  <p class="services-from_header cc-margin-top">COMPANY DETAILS</p>
                  <div class="form-flex cc-popup">
                    <div class="c-form_field">
                      <div class="c-label_wrapper">
                        <div class="c-label">Company Name</div>
                      </div>
                      <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256" name="Company-Name-5"
                          data-name="Company Name 5" placeholder="Enter Company Name" type="text" id="Company-Name-5">
                      </div>
                    </div>
                    <div class="c-form_field">
                      <div class="c-label_wrapper">
                        <div class="c-label">Object of Business</div>
                      </div>
                      <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256"
                          name="Object-of-Business-5" data-name="Object Of Business 5"
                          placeholder="Enter Object of Business" type="text" id="Object-of-Business-5">
                      </div>
                    </div>
                  </div>
                  <div class="form-flex cc-popup">
                    <div class="c-form_field">
                      <div class="c-label_wrapper">
                        <div class="c-label">Size of Country</div>
                      </div>
                      <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256"
                          name="Size-of-Country-3" data-name="Size Of Country 3" placeholder="Enter Size of Country"
                          type="text" id="Size-of-Country-3"></div>
                    </div>
                    <div class="c-form_field">
                      <div class="c-label_wrapper">
                        <div class="c-label">Scope of Operations</div>
                      </div>
                      <div class="c-input_wrapper"><textarea id="Scope-of-Operations-3" name="Scope-of-Operations-3"
                          maxlength="5000" data-name="Scope Of Operations 3"
                          placeholder="Briefly state how your company is run"
                          class="c-input cc-textarea w-input"></textarea></div>
                    </div>
                  </div>
                  <div class="form-flex cc-popup">
                    <div class="c-form_field">
                      <div class="c-label_wrapper">
                        <div class="c-label">Additional Information</div>
                      </div>
                      <div class="c-input_wrapper"><textarea id="Additional-Information-3"
                          name="Additional-Information-3" maxlength="5000" data-name="Additional Information 3"
                          placeholder="Enter additional information" class="c-input cc-textarea w-input"></textarea>
                      </div>
                    </div>
                    <div class="c-form_field">
                      <div class="upload-btn">
                        <div class="upload-btn_icon"></div>
                        <div>Upload Document</div>
                      </div>
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div class="c-form_field">
                      <a href="#" class="c-button cc-icon-btn cc-lg w-inline-block">
                        <div class="button-icon"><img src="@/public/assets/images/plus-white.svg" loading="lazy" alt=""
                            class="c-img"></div>
                        <div>New Order</div>
                      </a>
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div class="c-form_field">
                      <a href="#" class="c-button cc-icon-btn cc-lg w-inline-block">
                        <div class="button-icon"><img src="@/public/assets/images/plus-white.svg" loading="lazy" alt=""
                            class="c-img"></div>
                        <div>Add Role</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="services-form_divider cc-mb-0"></div>
                <div class="services-form_block">
                  <p class="services-from_header cc-margin-top">COMPANY DETAILS</p>
                  <div class="form-flex cc-popup">
                    <div class="c-form_field">
                      <div class="c-label_wrapper">
                        <div class="c-label">Company Name</div>
                      </div>
                      <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256" name="Company-Name-4"
                          data-name="Company Name 4" placeholder="Enter Company Name" type="text" id="Company-Name-4">
                      </div>
                    </div>
                    <div class="c-form_field">
                      <div class="c-label_wrapper">
                        <div class="c-label">Object of Business</div>
                      </div>
                      <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256"
                          name="Object-of-Business-4" data-name="Object Of Business 4"
                          placeholder="Enter Object of Business" type="text" id="Object-of-Business-4">
                      </div>
                    </div>
                  </div>
                  <div class="form-flex cc-popup">
                    <div class="c-form_field">
                      <div class="c-label_wrapper">
                        <div class="c-label">Size of Country</div>
                      </div>
                      <div class="c-input_wrapper"><input class="c-input w-input" maxlength="256"
                          name="Size-of-Country-2" data-name="Size Of Country 2" placeholder="Enter Size of Country"
                          type="text" id="Size-of-Country-2"></div>
                    </div>
                    <div class="c-form_field">
                      <div class="c-label_wrapper">
                        <div class="c-label">Scope of Operations</div>
                      </div>
                      <div class="c-input_wrapper"><textarea id="Scope-of-Operations-2" name="Scope-of-Operations-2"
                          maxlength="5000" data-name="Scope Of Operations 2"
                          placeholder="Briefly state how your company is run"
                          class="c-input cc-textarea w-input"></textarea></div>
                    </div>
                  </div>
                  <div class="form-flex cc-popup">
                    <div class="c-form_field cc-mb-0">
                      <div class="c-label_wrapper">
                        <div class="c-label">Additional Information</div>
                      </div>
                      <div class="c-input_wrapper"><textarea id="Additional-Information-2"
                          name="Additional-Information-2" maxlength="5000" data-name="Additional Information 2"
                          placeholder="Enter additional information" class="c-input cc-textarea w-input"></textarea>
                      </div>
                    </div>
                    <div class="c-form_field">
                      <div>
                        <div class="upload-btn">
                          <div class="upload-btn_icon"></div>
                          <div>Upload Document</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-flex cc-align-right"><input type="submit" data-wait=""
                  class="c-button cc-secondary-green w-button" value="Get A Quote"></div>
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
import { useModal } from '~/composables/useModal'
const props = defineProps<{
  service: {
    id: string
    name: string
    description: string
  }
}>()
const modal = useModal('ServiceFormModal')
</script>

<style scoped></style>