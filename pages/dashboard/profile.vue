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
                      <div class="profile-img_icon" />
                      <div class="profile-image">
                        <img alt="" class="c-img cc-cover" loading="lazy" src="@/public/assets/images/placeholder.svg">
                      </div>
                    </div>
                    <div>Chiamaka Zichat Adebiyi</div>
                  </div>
                  <a class="c-button cc-icon-btn w-inline-block" href="#">
                    <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/edit.svg"></div>
                    <div>Edit</div>
                  </a>
                  <a class="c-button cc-icon-btn w-inline-block" href="#">
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
                  <a class="c-button cc-icon-btn w-inline-block" href="#">
                    <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/edit.svg"></div>
                    <div>Change Password</div>
                  </a><input class="c-button cc-profile-submit w-button" data-wait="" type="submit" value="Save Changes">
                </div>
                <div class="form-flex cc-profile">
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Current Password
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Current-Password" class="c-input cc-trailing w-input" data-name="Current Password" maxlength="256" name="Current-Password" placeholder="••••••••" required type="password">
                      <div class="reveal-toggle" />
                    </div>
                  </div>
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        New Password
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="New-Password" class="c-input cc-trailing w-input" data-name="New Password" maxlength="256" name="New-Password" placeholder="" required type="password">
                      <div class="reveal-toggle cc-hidden" />
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
  <div class="c-popup">
    <div class="c-popup_inner cc-plain">
      <div class="popup-close_btn" />
      <div class="heading-h3">
        Crop Profile Picture
      </div>
      <div class="crop-img_wrapper">
        <div class="crop-image_block">
          <img alt="" class="c-img cc-cover" loading="lazy" sizes="100vw" src="@/public/assets/images/home-hero-image.png" srcset="@/public/assets/images/home-hero-image-p-500.png 500w, @/public/assets/images/home-hero-image-p-800.png 800w, @/public/assets/images/home-hero-image-p-1080.png 1080w, @/public/assets/images/home-hero-image-p-1600.png 1600w, @/public/assets/images/home-hero-image.png 1901w">
          <div class="crop-image_circle" />
        </div>
      </div>
      <div class="btn-flex cc-align-right">
        <a class="c-button" href="#">Use Picture</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
