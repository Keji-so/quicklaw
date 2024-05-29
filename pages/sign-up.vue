<template>
  <div class="page-wrapper cc-auth">
    <Navbar />
    <section class="c-section cc-auth">
      <div class="auth-wrapper">
        <div class="auth-container">
          <div class="auth-header_container">
            <h1 class="heading-h1">
              Sign Up
            </h1>
            <h2 class="heading-h4">
              Welcome to Quicklaw!
            </h2>
          </div>
          <div class="auth-form_block w-form">
            <form id="signup-form" data-name="signup form" data-wf-element-id="02075ac6-0148-2a1a-73d7-7e4dbce3722f" data-wf-page-id="664cfb9f31fb107700a9779b" method="get" name="wf-form-signup-form">
              <div class="auth-form_inner">
                <div class="form-flex">
                  <div class="c-form_field cc-lg">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Full Name
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Fullname-4" class="c-input w-input" data-name="Fullname" maxlength="256" name="Fullname" placeholder="Enter your First Name &amp; Last Name" required type="text">
                    </div>
                    <div class="c-help">
                      This is some text inside of a div block.
                    </div>
                  </div>
                  <div class="c-form_field cc-lg">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Email Address
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Email-5" class="c-input w-input" data-name="Email" maxlength="256" name="Email" placeholder="Enter your Email Address" required type="email">
                    </div>
                    <div class="c-help">
                      Email is already in use
                    </div>
                  </div>
                </div>
                <div class="form-flex">
                  <div class="c-form_field cc-lg">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Username
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Username" class="c-input w-input" data-name="Username" maxlength="256" name="Username" placeholder="Choose A Username" required type="text">
                    </div>
                    <div class="c-help">
                      Username is unavailable
                    </div>
                  </div>
                  <div class="c-form_field cc-lg">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Password
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Password" class="c-input cc-trailing w-input" data-name="Password" maxlength="256" name="Password" placeholder="Choose a Password" required type="password">
                      <div class="reveal-toggle" />
                    </div>
                    <div class="c-help">
                      Password must have at least 8 characters including numbers &amp; special characters
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-flex">
                <input class="c-button cc-lg w-button" data-wait="" type="submit" value="Sign Up">
              </div>
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <div class="auth-form_subtext">
            Have an account? <a class="c-text_link" href="#"> Log In</a>
          </div>
          <div class="auth-terms_text">
            By clicking ‘Sign Up’, you acknowledge to have read and agreed with Quicklaw <nuxtLink class="cc-underline" to="/terms-and-conditions">
              Terms and Conditions
            </nuxtLink>.
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="c-popup">
    <div class="c-popup_inner">
      <div class="popup-header_container">
        <h1 class="heading-h1">
          Sign In
        </h1>
        <h2 class="heading-h4">
          Welcome back to Quicklaw!
        </h2>
      </div>
      <div class="popup-form_block cc-mb-0 w-form">
        <form id="signin-form" data-name="signin form" data-wf-element-id="b4354ec1-9692-6ec2-6e66-3191d0000fbf" data-wf-page-id="664cfb9f31fb107700a9779b" method="get" name="wf-form-signin-form">
          <div class="popup-form_inner">
            <div class="c-form_field">
              <div class="c-label_wrapper">
                <div class="c-label">
                  Username or Email Address
                </div>
              </div>
              <div class="c-input_wrapper">
                <input id="Username-or-Email-Address" class="c-input w-input" data-name="Username or Email Address" maxlength="256" name="Username-or-Email-Address" placeholder="Enter your Registered Username or Email Address" required type="text">
              </div>
              <div class="c-help">
                Account not found
              </div>
            </div>
            <div class="c-form_field">
              <div class="c-label_wrapper">
                <div class="c-label">
                  Password
                </div>
              </div>
              <div class="c-input_wrapper">
                <input id="Password-3" class="c-input cc-trailing w-input" data-name="Password" maxlength="256" name="Password" placeholder="Enter your Password" required type="password">
                <div class="reveal-toggle" />
              </div>
              <div class="c-help">
                Username or email address and password do not match
              </div>
              <div class="form-cta cc-right_align">
                <a class="c-text_link" href="#">I don’t remember my password</a>
              </div>
            </div>
          </div>
          <div class="btn-flex">
            <input class="c-button cc-lg w-button" data-wait="" type="submit" value="Sign Up">
          </div>
          <div class="auth-form_subtext">
            Don’t have an account? <a aria-current="page" class="c-text_link w--current" href="../authentication/sign-up.html">Sign Up</a>
          </div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <div class="popup-close_btn" />
    </div>
  </div>
  <div class="c-popup">
    <div class="c-popup_inner">
      <div class="auth-header_container">
        <h1 class="heading-h1">
          Forgot Password
        </h1>
        <h2 class="heading-h4">
          Get your account back
        </h2>
      </div>
      <div class="popup-form_block w-form">
        <form id="wf-form-forgot-password-form" data-name="forgot password form" data-wf-element-id="be939699-93b9-0e31-2fbd-ed2a7ea08031" data-wf-page-id="664cfb9f31fb107700a9779b" method="get" name="wf-form-forgot-password-form">
          <div class="popup-form_inner">
            <div class="c-form_field cc-lg">
              <div class="c-label_wrapper">
                <div class="c-label">
                  Username or Email Address
                </div>
              </div>
              <div class="c-input_wrapper">
                <input id="Username-Or-Email-Address-3" class="c-input w-input" data-name="Username Or Email Address" maxlength="256" name="Username-Or-Email-Address" placeholder="Enter your Registered Username or Email Address" required type="text">
              </div>
              <div class="c-help">
                This email is not connected to a Quicklaw account
              </div>
            </div>
          </div>
          <div class="btn-flex">
            <input class="c-button cc-lg w-button" data-wait="" type="submit" value="Submit">
          </div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <div class="popup-close_btn" />
      <div class="popup-back_btn">
        <div class="back-btn_icon" />
        <div>Back to Sign In</div>
      </div>
    </div>
  </div>
  <div>
    <div class="c-popup">
      <div class="c-popup_inner">
        <div class="auth-header_container">
          <h1 class="heading-h1">
            Reset Password
          </h1>
          <h2 class="heading-h4">
            Get your account back
          </h2>
        </div>
        <div class="popup-form_block w-form">
          <form id="wf-form-reset-password-form" data-name="reset password form" data-wf-element-id="a36411ee-03f7-1fd1-6896-f9b455a65999" data-wf-page-id="664cfb9f31fb107700a9779b" method="get" name="wf-form-reset-password-form">
            <div class="popup-form_inner">
              <div class="c-form_field cc-lg">
                <div class="c-label_wrapper">
                  <div class="c-label">
                    Password
                  </div>
                </div>
                <div class="c-input_wrapper">
                  <input id="password-4" class="c-input cc-trailing w-input" data-name="password" maxlength="256" name="password" placeholder="Choose a new password" required type="password">
                  <div class="reveal-toggle" />
                </div>
                <div class="c-help">
                  You cannot use an old password
                </div>
              </div>
            </div>
            <div class="btn-flex">
              <input class="c-button cc-lg w-button" data-wait="" type="submit" value="Submit">
            </div>
          </form>
          <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <div class="popup-close_btn" />
        <div class="popup-back_btn">
          <div class="back-btn_icon" />
          <div>Back to Sign In</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
