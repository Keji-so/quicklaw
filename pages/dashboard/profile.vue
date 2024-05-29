<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-dashboard">
        <div class="dashboard-sidebar">
          <nuxtLink class="dashboard-link w-inline-block" to="/dashboard/orders">
            <div class="dashboard-link_icon w-embed">
              <svg fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 22.5C8.32843 22.5 9 21.8284 9 21C9 20.1716 8.32843 19.5 7.5 19.5C6.67157 19.5 6 20.1716 6 21C6 21.8284 6.67157 22.5 7.5 22.5Z" fill="currentColor" />
                <path d="M18 22.5C18.8284 22.5 19.5 21.8284 19.5 21C19.5 20.1716 18.8284 19.5 18 19.5C17.1716 19.5 16.5 20.1716 16.5 21C16.5 21.8284 17.1716 22.5 18 22.5Z" fill="currentColor" />
                <path d="M21 5.25015H4.365L3.75 2.10015C3.71494 1.9282 3.62068 1.77398 3.48364 1.66435C3.3466 1.55472 3.17546 1.49661 3 1.50015H0V3.00015H2.385L5.25 17.4002C5.28506 17.5721 5.37932 17.7263 5.51636 17.836C5.6534 17.9456 5.82454 18.0037 6 18.0002H19.5V16.5002H6.615L6 13.5002H19.5C19.6734 13.5044 19.8429 13.4484 19.9796 13.3418C20.1163 13.2351 20.2119 13.0843 20.25 12.9152L21.75 6.16515C21.7751 6.05387 21.7745 5.93832 21.7483 5.8273C21.722 5.71628 21.6708 5.61271 21.5985 5.52448C21.5261 5.43625 21.4347 5.36568 21.3309 5.31814C21.2272 5.2706 21.114 5.24735 21 5.25015ZM18.9 12.0002H5.715L4.665 6.75015H20.0625L18.9 12.0002Z" fill="currentColor" />
              </svg>
            </div>
            <div class="dashboard-link_text">
              Orders
            </div>
          </nuxtLink>
          <nuxtLink class="dashboard-link w-inline-block w--current" to="/dashboard/profile">
            <div class="dashboard-link_icon w-embed">
              <svg fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3.75C9.10875 3.75 6.75 6.10875 6.75 9C6.75 10.8075 7.6725 12.4125 9.0705 13.3597C6.39525 14.5072 4.5 17.1622 4.5 20.25H6C6 16.9275 8.6775 14.25 12 14.25C15.3225 14.25 18 16.9275 18 20.25H19.5C19.5 17.1622 17.6047 14.508 14.9295 13.359C15.643 12.8773 16.2276 12.2281 16.6321 11.4682C17.0367 10.7083 17.2488 9.86087 17.25 9C17.25 6.10875 14.8912 3.75 12 3.75ZM12 5.25C14.0798 5.25 15.75 6.92025 15.75 9C15.75 11.0798 14.0798 12.75 12 12.75C9.92025 12.75 8.25 11.0798 8.25 9C8.25 6.92025 9.92025 5.25 12 5.25Z" fill="currentColor" />
              </svg>
            </div>
            <div class="dashboard-link_text">
              Profile
            </div>
          </nuxtLink>
          <a class="dashboard-link cc-signout w-inline-block" href="#">
            <div class="dashboard-link_icon w-embed"><svg fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.7082 6C16.4931 4.64142 14.894 3.68382 13.1227 3.25392C11.3514 2.82401 9.49134 2.94206 7.7886 3.59245C6.08586 4.24284 4.62073 5.39491 3.58709 6.89621C2.55344 8.39751 2 10.1773 2 12C2 13.8227 2.55344 15.6025 3.58709 17.1038C4.62073 18.6051 6.08586 19.7572 7.7886 20.4076C9.49134 21.0579 11.3514 21.176 13.1227 20.7461C14.894 20.3162 16.4931 19.3586 17.7082 18" stroke="currentColor" stroke-width="1.5" />
              <path d="M22 12H8" stroke="currentColor" stroke-width="1.5" />
              <path d="M18 8L22 12L18 16" stroke="currentColor" stroke-width="1.5" />
            </svg></div>
            <div class="dashboard-link_text">Sign Out</div>
          </a>
        </div>
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
