<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-dashboard">
        <ProfileSidebar currentPage="profile" />
        <div class="dashboard-container">
          <div class="dashboard-header">
            <div class="dashboard-header_text">
              <h1 class="heading-h1">
                My<br>Profile
              </h1>
            </div>
          </div>
          <div class="form-block w-form">
            <form id="Profile-Form" class="profile-form" data-name="Profile Form" data-wf-element-id="fc99fde3-b5b6-193b-29c0-cec80822d7d0" data-wf-page-id="664a55043659c7265bdf4114" method="get" name="wf-form-Profile-Form">
              <div class="profile-form_inner">
                <div class="profile-form_flex">
                  <div class="profile-details">
                    <div class="profile-image_container">
                      <div class="profile-img_icon" 
                      :class="isImageEditable ? 'cc-show' : ''"  @click="showModal"/>
                      <div class="profile-image">
                        <img alt="" class="c-img cc-cover" loading="lazy" src="@/public/assets/images/user-placeholder-img.svg">
                      </div>
                    </div>
                    <div>Chiamaka Zichat Adebiyi</div>
                  </div>
                  <a class="c-button cc-icon-btn w-inline-block" :class="isImageEditable ? 'cc-hide' : 'cc-show'" @click="allowImageEdit">
                    <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/edit.svg"></div>
                    <div>Edit</div>
                  </a>
                  <a class="c-button cc-icon-btn w-inline-block" :class="isImageEditable ? '' : 'cc-hide'" >
                    <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/check-white-outline.svg"></div>
                    <div>Save Changes</div>
                  </a>
                </div>
                <div class="profile-form_divider" />
                <div class="form-flex cc-profile">
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Email Address
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Email-Address" class="c-input w-input" data-name="Email Address" maxlength="256" name="Email-Address" placeholder="chiamaka.zichat-adebiyi@email.com" required type="email">
                    </div>
                  </div>
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Username
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Username" class="c-input w-input" data-name="Username" maxlength="256" name="Username" placeholder="chizichat_a" required type="text">
                    </div>
                  </div>
                </div>
              </div>
              <div class="profile-form_inner">
                <div class="profile-form_flex">
                  <p class="uc-medium-text">
                    Password
                  </p>
                  <a class="c-button cc-icon-btn w-inline-block" :class="isPasswordEditable ? 'cc-hide' : 'cc-show'" @click="allowPasswordEdit" >
                    <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/edit.svg"></div>
                    <div>Change Password</div>
                  </a><input :class="isPasswordEditable ? 'cc-show' : 'cc-hide'"  class="c-button cc-profile-submit w-button" data-wait="" type="submit" value="Save Changes">
                </div>
                <div class="form-flex cc-profile">
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper" >
                      <div class="c-label">
                        Current Password
                      </div>
                    </div>
                    <div class="c-input_wrapper" >
                      <input 
                       id="current-password" 
                      class="c-input w-input"
                       maxlength="256" 
                       name="password" 
                       placeholder="Choose a Password"
                       :type="isCurrentPasswordVisible ? 'text' : 'password'">
                      <div @click="toggleCurrentPasswordVisibility" class="reveal-toggle" :class="isCurrentPasswordVisible && 'cc-hidden'" />
                    </div>
                  </div>
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper" :class="isPasswordEditable ? '' : 'cc-hide'">
                      <div class="c-label">
                        New Password
                      </div>
                    </div>
                    <div class="c-input_wrapper" :class="isPasswordEditable ? '' : 'cc-hide'">
                      <input 
                      id="new-password" 
                      class="c-input w-input"
                       maxlength="256" 
                       name="password" 
                       placeholder="Choose a Password"
                       :type="isNewPasswordVisible ? 'text' : 'password'">
                      <div @click="toggleNewPasswordVisibility" class="reveal-toggle" :class="isNewPasswordVisible && 'cc-hidden'"/>
                    </div>
                  </div>
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
      </div>
    </section>
  </div>
  <CropProfilePictureModal />
</template>

<script setup lang="ts">
const modal = useModal('CropProfilePictureModal')
const isImageEditable = ref(false)
const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isPasswordEditable = ref(false)




const allowImageEdit = () => { 
  isImageEditable.value = !isImageEditable.value
}
const allowPasswordEdit = () => { 
  isPasswordEditable.value = !isPasswordEditable.value
}
const showModal =  () => {
  modal.show('CropProfilePictureModal')
}

const toggleCurrentPasswordVisibility = () => {
  isCurrentPasswordVisible.value = !isCurrentPasswordVisible.value
}

const toggleNewPasswordVisibility = () => {
  isNewPasswordVisible.value = !isNewPasswordVisible.value
}

</script>

<style scoped>

</style>
