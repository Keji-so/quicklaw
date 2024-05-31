<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-dashboard">
       <ProfileSidebar currentPage="orders"/>
        <div class="dashboard-container">
          <div class="dashboard-header">
            <div class="dashboard-header_text">
              <h1 class="heading-h1">
                My Orders
              </h1>
            </div>
          </div>
          <div class="dashboard-utilitiies">
            <div class="order-filter_flex">
              <a class="order-filter cc-active w-inline-block" href="#">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/unordered-list.svg"></div>
                <div>All</div>
              </a>
              <a class="order-filter w-inline-block" href="#">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/check.svg"></div>
                <div>Done</div>
              </a>
              <a class="order-filter w-inline-block" href="#">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/hourglass.svg"></div>
                <div>In Progress</div>
              </a>
              <a class="order-filter w-inline-block" href="#">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/feather.svg"></div>
                <div>Draft</div>
              </a>
              <a class="order-filter w-inline-block" href="#">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/notebook.svg"></div>
                <div>Submitted</div>
              </a>
              <a class="order-filter w-inline-block" href="#">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/cancel.svg"></div>
                <div>Cancelled</div>
              </a>
            </div>
            <a class="c-button cc-icon-btn w-inline-block" href="#">
              <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/cart-add.svg"></div>
              <div>New Order</div>
            </a>
          </div>
          <div id="scrollbar" class="c-table">
            <div>
              <div class="table-header cc-hide-mobile">
                <div class="w-layout-grid table-columns">
                  <div id="w-node-_4abf2dca-da60-c095-6bb9-aaaca2eef5d4-7ac6554d" class="column-header">
                    SERVICE
                  </div>
                  <div id="w-node-_4abf2dca-da60-c095-6bb9-aaaca2eef5d6-7ac6554d" class="column-header">
                    PRICE
                  </div>
                  <div id="w-node-_4abf2dca-da60-c095-6bb9-aaaca2eef5d8-7ac6554d" class="column-header">
                    DATE
                  </div>
                  <div id="w-node-_4abf2dca-da60-c095-6bb9-aaaca2eef5da-7ac6554d" class="column-header">
                    status
                  </div>
                </div>
              </div>
              <div class="table-entry">
                <div class="w-layout-grid table-columns cc-hide-desktop">
                  <div id="w-node-_19c35c8b-8878-93ab-6f33-2cfdf576ffbd-7ac6554d" class="column-header">
                    SERVICE
                  </div>
                  <div id="w-node-_19c35c8b-8878-93ab-6f33-2cfdf576ffbf-7ac6554d" class="column-header">
                    PRICE
                  </div>
                  <div id="w-node-_19c35c8b-8878-93ab-6f33-2cfdf576ffc1-7ac6554d" class="column-header">
                    DATE
                  </div>
                  <div id="w-node-_19c35c8b-8878-93ab-6f33-2cfdf576ffc3-7ac6554d" class="column-header">
                    status
                  </div>
                </div>
                <div class="w-layout-grid table-columns">
                  <div id="w-node-b2319235-1d8b-8528-8df2-5857c263392b-7ac6554d" class="column-text">
                    Employment Agreement
                  </div>
                  <div id="w-node-b2319235-1d8b-8528-8df2-5857c263392d-7ac6554d" class="column-text">
                    ₦15,000.00
                  </div>
                  <div id="w-node-b2319235-1d8b-8528-8df2-5857c263392f-7ac6554d" class="column-text">
                    12/02/2024
                  </div>
                  <div id="w-node-b2319235-1d8b-8528-8df2-5857c2633931-7ac6554d" class="c-status cc-submitted">
                    <div>Submitted</div>
                    <div class="status-color" />
                  </div>
                </div>
              </div>
              <div class="table-entry">
                <div class="w-layout-grid table-columns cc-hide-desktop">
                  <div id="w-node-_23236716-0140-5bcf-7a2a-3b4b0a1cef8f-7ac6554d" class="column-header">
                    SERVICE
                  </div>
                  <div id="w-node-_23236716-0140-5bcf-7a2a-3b4b0a1cef91-7ac6554d" class="column-header">
                    PRICE
                  </div>
                  <div id="w-node-_23236716-0140-5bcf-7a2a-3b4b0a1cef93-7ac6554d" class="column-header">
                    DATE
                  </div>
                  <div id="w-node-_23236716-0140-5bcf-7a2a-3b4b0a1cef95-7ac6554d" class="column-header">
                    status
                  </div>
                </div>
                <div class="w-layout-grid table-columns">
                  <div id="w-node-_1c89021e-40de-cfe9-5a05-860a748bb8da-7ac6554d" class="column-text">
                    Employment Agreement
                  </div>
                  <div id="w-node-_1c89021e-40de-cfe9-5a05-860a748bb8dc-7ac6554d" class="column-text">
                    ₦15,000.00
                  </div>
                  <div id="w-node-_1c89021e-40de-cfe9-5a05-860a748bb8de-7ac6554d" class="column-text">
                    12/02/2024
                  </div>
                  <div id="w-node-_1c89021e-40de-cfe9-5a05-860a748bb8e0-7ac6554d" class="c-status cc-submitted">
                    <div>Submitted</div>
                    <div class="status-color" />
                  </div>
                </div>
              </div>
              <div class="table-entry">
                <div class="w-layout-grid table-columns cc-hide-desktop">
                  <div id="w-node-_98d0e47b-3f1b-4e4c-148a-947cd3753892-7ac6554d" class="column-header">
                    SERVICE
                  </div>
                  <div id="w-node-_98d0e47b-3f1b-4e4c-148a-947cd3753894-7ac6554d" class="column-header">
                    PRICE
                  </div>
                  <div id="w-node-_98d0e47b-3f1b-4e4c-148a-947cd3753896-7ac6554d" class="column-header">
                    DATE
                  </div>
                  <div id="w-node-_98d0e47b-3f1b-4e4c-148a-947cd3753898-7ac6554d" class="column-header">
                    status
                  </div>
                </div>
                <div class="w-layout-grid table-columns">
                  <div id="w-node-de6912e1-8658-9c02-d34b-2c8f3b8054b9-7ac6554d" class="column-text">
                    Employment Agreement
                  </div>
                  <div id="w-node-de6912e1-8658-9c02-d34b-2c8f3b8054bb-7ac6554d" class="column-text">
                    ₦15,000.00
                  </div>
                  <div id="w-node-de6912e1-8658-9c02-d34b-2c8f3b8054bd-7ac6554d" class="column-text">
                    12/02/2024
                  </div>
                  <div id="w-node-de6912e1-8658-9c02-d34b-2c8f3b8054bf-7ac6554d" class="c-status cc-cancelled">
                    <div>Cancelled</div>
                    <div class="status-color" />
                  </div>
                </div>
              </div>
              <div class="table-entry">
                <div class="w-layout-grid table-columns cc-hide-desktop">
                  <div id="w-node-_168cdc6a-e693-a907-af41-878f826a5516-7ac6554d" class="column-header">
                    SERVICE
                  </div>
                  <div id="w-node-_168cdc6a-e693-a907-af41-878f826a5518-7ac6554d" class="column-header">
                    PRICE
                  </div>
                  <div id="w-node-_168cdc6a-e693-a907-af41-878f826a551a-7ac6554d" class="column-header">
                    DATE
                  </div>
                  <div id="w-node-_168cdc6a-e693-a907-af41-878f826a551c-7ac6554d" class="column-header">
                    status
                  </div>
                </div>
                <div class="w-layout-grid table-columns">
                  <div id="w-node-_8fd08648-d3de-f5a1-6110-be947ea456c3-7ac6554d" class="column-text">
                    Employment Agreement
                  </div>
                  <div id="w-node-_8fd08648-d3de-f5a1-6110-be947ea456c5-7ac6554d" class="column-text">
                    ₦15,000.00
                  </div>
                  <div id="w-node-_8fd08648-d3de-f5a1-6110-be947ea456c7-7ac6554d" class="column-text">
                    12/02/2024
                  </div>
                  <div id="w-node-_8fd08648-d3de-f5a1-6110-be947ea456c9-7ac6554d" class="c-status cc-done">
                    <div>Done</div>
                    <div class="status-color" />
                  </div>
                </div>
              </div>
              <div class="table-entry">
                <div class="w-layout-grid table-columns cc-hide-desktop">
                  <div id="w-node-_8f8630ad-88f9-91f1-a493-68c90b91dff5-7ac6554d" class="column-header">
                    SERVICE
                  </div>
                  <div id="w-node-_8f8630ad-88f9-91f1-a493-68c90b91dff7-7ac6554d" class="column-header">
                    PRICE
                  </div>
                  <div id="w-node-_8f8630ad-88f9-91f1-a493-68c90b91dff9-7ac6554d" class="column-header">
                    DATE
                  </div>
                  <div id="w-node-_8f8630ad-88f9-91f1-a493-68c90b91dffb-7ac6554d" class="column-header">
                    status
                  </div>
                </div>
                <div class="w-layout-grid table-columns">
                  <div id="w-node-_67960ca8-7a41-0277-d493-c17bc93d29b5-7ac6554d" class="column-text">
                    Employment Agreement
                  </div>
                  <div id="w-node-_67960ca8-7a41-0277-d493-c17bc93d29b7-7ac6554d" class="column-text">
                    ₦15,000.00
                  </div>
                  <div id="w-node-_67960ca8-7a41-0277-d493-c17bc93d29b9-7ac6554d" class="column-text">
                    12/02/2024
                  </div>
                  <div id="w-node-_67960ca8-7a41-0277-d493-c17bc93d29bb-7ac6554d" class="c-status cc-draft">
                    <div>Draft</div>
                    <div class="status-color" />
                  </div>
                </div>
              </div>
            </div>
            <div class="empty">
              <div class="empty-block_img">
                <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/empty.svg">
              </div>
              <div class="empty-block_text">
                <div>No Available Orders</div>
                <div>You haven’t made any orders yet. <br>Any <span class="uc-bold-text uc-green-text">new order </span>you make will appear here.</div>
              </div>
            </div>
          </div>
          <div class="c-pagination">
            <div class="pagination-btn cc-disabled">
              <div class="pagination-arrow w-embed">
                <svg fill="none" viewbox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.41284 3.55572L0.46875 7.49979L4.41284 11.4438L5.07574 10.7809L2.2633 7.96851L14.5089 7.96851V7.03101L2.26339 7.03101L5.07574 4.21865L4.41284 3.55572Z" fill="currentColor" />
                </svg>
              </div>
              <div>Previous</div>
            </div>
            <div class="pagination-numbers">
              <div class="pagination-number cc-current">
                1
              </div>
              <div class="pagination-number">
                2
              </div>
              <div class="pagination-number">
                3
              </div>
              <div>...</div>
              <div class="pagination-number">
                4
              </div>
            </div>
            <div class="pagination-btn">
              <div>Next</div>
              <div class="pagination-arrow w-embed">
                <svg fill="none" viewbox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5872 3.55572L14.5312 7.49979L10.5872 11.4438L9.92426 10.7809L12.7367 7.96851L0.491134 7.96851V7.03101L12.7366 7.03101L9.92426 4.21865L10.5872 3.55572Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="c-popup">
    <div class="c-popup_inner cc-order-details">
      <div class="popup-close_btn cc-white cc-order" />
      <div class="order-popup_top">
        <div>Order</div>
        <div class="order-number">
          #12345
        </div>
      </div>
      <div class="order-popup_bottom">
        <p class="uc-bold-text">
          Order Details
        </p>
        <div class="order-details_block">
          <div id="w-node-_0f5ab0d1-4486-846a-e9f7-fd8bc738274b-7ac6554d" class="order-detail_item">
            <div class="order-details_title">
              Service
            </div>
            <div>Non-Disclosure Agreement</div>
          </div>
          <div id="w-node-a65130db-320a-572f-9f2b-63437c6595bd-7ac6554d" class="order-detail_item">
            <div class="order-details_title">
              Price
            </div>
            <div>₦20,000.00</div>
          </div>
          <div id="w-node-_728b76aa-dc91-ed07-0698-e4c112fa21d3-7ac6554d" class="order-detail_item">
            <div class="order-details_title">
              Date
            </div>
            <div>12/02/2024</div>
          </div>
          <div id="w-node-_68df62b1-df63-6e44-09b6-975434f288ed-7ac6554d" class="order-detail_item">
            <div class="c-status cc-in-progress">
              <div>In Progress</div>
              <div class="status-color" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="c-popup">
    <div class="c-popup_inner cc-order-recieved">
      <div class="popup-close_btn cc-white cc-order" />
      <div class="order-popup_flex">
        <div class="order-popup_img">
          <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/elephant-illustration.svg">
        </div>
        <div class="order-popup_header">
          <div class="heading-h1">
            Order Received
          </div>
        </div>
      </div>
      <div class="order-popup_note">
        Your Order has been submitted successfully. You will receive your quote via mail. You may track your order via your <a aria-current="page" class="order-text_link w--current" href="../dashboard/orders.html">Quicklaw Dashboard</a>. If you have further questions, kindly send an email to <a class="cc-underline" href="mailto:support@quicklaw.com">support@quicklaw.com</a>.
      </div>
    </div>
  </div>
  <div class="c-popup">
    <div class="c-popup_inner cc-service-checkout">
      <div class="popup-close_btn cc-white" />
      <div class="heading-h4">
        Incorporate A Company
      </div>
      <div class="services-details_block">
        <div class="services-form_wrapper w-form">
          <form id="wf-form-services-form" class="services-form_container" data-name="services form" data-wf-element-id="c5ea830e-7ca9-5090-902b-52ef96a14068" data-wf-page-id="664a3c393d7bd1887ac6554d" method="get" name="wf-form-services-form">
            <div id="scrollbar" class="services-form_inner" data-lenis-prevent="">
              <div class="services-form_block">
                <p class="services-from_header">
                  COMPANY DETAILS
                </p>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Company Name
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <input id="Company-Name" class="c-input w-input" data-name="Company Name" maxlength="256" name="Company-Name" placeholder="Enter Company Name" required type="text">
                  </div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Alternate Company Name
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <input id="Alternate-Company-Name" class="c-input w-input" data-name="Alternate Company Name" maxlength="256" name="Alternate-Company-Name" placeholder="Enter Alternate Company Name" required type="text">
                  </div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Registered Address
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <input id="Registered-Address" class="c-input w-input" data-name="Registered Address" maxlength="256" name="Registered-Address" placeholder="Enter Registered Company Address" required type="text">
                  </div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Object of Business
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <input id="Object-of-Business" class="c-input w-input" data-name="Object of Business" maxlength="256" name="Object-of-Business" placeholder="Enter Object of Business" required type="text">
                  </div>
                </div>
                <div class="c-form_field">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Scope of Business
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <textarea id="Scope-of-Business" class="c-input cc-textarea w-input" data-name="Scope of Business" maxlength="5000" name="Scope-of-Business" placeholder="Briefly tell us how your company is run ..." required />
                  </div>
                </div>
                <div class="c-form_field">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Aims &amp; Objectives
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <textarea id="Aims-Objectives" class="c-input cc-textarea w-input" data-name="Aims &amp; Objectives" maxlength="5000" name="Aims-Objectives" placeholder="Enter Organisation Aims &amp; Objectives" required />
                  </div>
                </div>
              </div>
              <div class="services-form_block">
                <p class="services-from_header">
                  COMPANY DETAILS
                </p>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Company Name
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <input id="Company-Name-3" class="c-input w-input" data-name="Company Name 3" maxlength="256" name="Company-Name-3" placeholder="Enter Company Name" required type="text">
                  </div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Alternate Company Name
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <input id="Alternate-Company-Name-2" class="c-input w-input" data-name="Alternate Company Name 2" maxlength="256" name="Alternate-Company-Name-2" placeholder="Enter Alternate Company Name" required type="text">
                  </div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Registered Address
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <input id="Registered-Address-2" class="c-input w-input" data-name="Registered Address 2" maxlength="256" name="Registered-Address-2" placeholder="Enter Registered Company Address" required type="text">
                  </div>
                </div>
                <div class="c-form_field cc-sm">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Object of Business
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <input id="Object-of-Business-3" class="c-input w-input" data-name="Object Of Business 3" maxlength="256" name="Object-of-Business-3" placeholder="Enter Object of Business" required type="text">
                  </div>
                </div>
                <div class="c-form_field cc-mb-0">
                  <div class="c-label_wrapper">
                    <div class="c-label">
                      Scope of Business
                    </div>
                  </div>
                  <div class="c-input_wrapper">
                    <textarea id="Scope-of-Business-2" class="c-input cc-textarea w-input" data-name="Scope Of Business 2" maxlength="5000" name="Scope-of-Business-2" placeholder="Briefly tell us how your company is run ..." required />
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-flex cc-order-popup">
              <input class="c-button w-button" data-wait="" type="submit" value="Next">
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
          <div class="download-reciept_block" data-lenis-prevent="">
            <div class="download-reciept">
              <div class="order-details_top">
                <div class="download-form_header uc-mb-0">
                  ORDER DETAILS
                </div>
                <div class="order-id">
                  Order ID: #12456AJ
                </div>
                <div class="order-details">
                  <div class="order-details_inner">
                    <div>Incorporate A Company</div>
                    <div class="order-price">
                      ₦15,000.00
                    </div>
                  </div>
                  <div class="order-code_image">
                    <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/la_qrcode.png">
                  </div>
                </div>
              </div>
              <div class="order-details_bottom">
                <div class="order-details_line" />
                <div class="order-details_flex">
                  <div class="order-price_title">
                    SubTotal
                  </div>
                  <div>₦15,000.00</div>
                </div>
                <div class="order-details_flex">
                  <div class="order-price_title">
                    Paystack Transactions Fee
                  </div>
                  <div>₦324.00</div>
                </div>
                <div class="reciept-circle cc-green cc-left" />
                <div class="reciept-circle cc-green cc-right" />
              </div>
              <div class="order-details_flex">
                <div class="order-price_title">
                  Total
                </div>
                <div>₦15,324.00</div>
              </div>
            </div>
            <div class="c-note">
              <div class="note-icon" />
              <div class="note-text">
                Kindly wait for your order confirmation after payment before closing the browser, tab or this page
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="c-popup">
    <div class="c-popup_inner cc-service-checkout">
      <div class="popup-close_btn cc-white" />
      <div class="heading-h4">
        Incorporate A Company
      </div>
      <div class="services-details_block cc-white-bg">
        <div class="service-reciept-code">
          <div class="order-code_image cc-lg">
            <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/la_qrcode.png">
          </div>
          <div class="order-details_inner cc-lg">
            <div class="reciept-text">
              Incorporate a Company
            </div>
            <div class="order-price cc-lg">
              ₦15,000.00
            </div>
          </div>
        </div>
        <div class="service-order_details">
          <div class="purchase-reciept_block">
            <div class="purchase-reciept">
              <div class="purchase-reciept_inner">
                <div class="reciept-text">
                  Thank You For Your Purchase
                </div>
                <div class="order-details_flex cc-lg">
                  <div class="order-price_title cc-lg">
                    Order ID: #12456AJ
                  </div>
                  <div class="uc-grey-text">
                    12/02/2024
                  </div>
                </div>
              </div>
              <div class="order-details_bottom cc-lg">
                <div class="order-details_line" />
                <div class="order-details_flex cc-lg">
                  <div class="order-price_title cc-lg">
                    SubTotal
                  </div>
                  <div>₦15,000.00</div>
                </div>
                <div class="order-details_flex cc-lg">
                  <div class="order-price_title cc-lg">
                    Paystack Transactions Fee
                  </div>
                  <div>₦324.00</div>
                </div>
              </div>
              <div class="order-details_flex cc-lg">
                <div class="order-price_title cc-lg">
                  Total
                </div>
                <div>₦15,324.00</div>
              </div>
            </div>
            <div class="c-note">
              <div class="note-icon" />
              <div class="note-text">
                A receipt has been delivered to your email. You may track your order progress via your dashboard. Thank you for trusting Quicklaw.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="c-popup">
    <div class="c-popup_inner cc-service-checkout">
      <div class="popup-close_btn cc-white" />
      <div class="heading-h4">
        Policy Advice
      </div>
      <div class="services-details_block">
        <div class="services-form_wrapper cc-wide w-form">
          <form id="wf-form-services-quote-form" class="services-form_container" data-name="services quote form" data-wf-element-id="55a88560-2f74-46e4-d9c4-ed9b1d759769" data-wf-page-id="664a3c393d7bd1887ac6554d" method="get" name="wf-form-services-quote-form">
            <div id="scrollbar" class="services-form_inner cc-quote-form" data-lenis-prevent="">
              <div class="c-note cc-grey">
                <div class="note-icon" />
                <div class="note-text">
                  This service does not have a fixed price attached due to its unique intricacies. For this reason, we charge on case-by-case basis for this service. Kindly fill out the form below with the appropriate information to receive a quote.
                </div>
              </div>
              <div class="services-form_block">
                <p class="services-from_header cc-margin-top">
                  COMPANY DETAILS
                </p>
                <div class="form-flex cc-popup">
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Company Name
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Company-Name-2" class="c-input w-input" data-name="Company Name" maxlength="256" name="Company-Name" placeholder="Enter Company Name" required type="text">
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Object of Business
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Object-of-Business-2" class="c-input w-input" data-name="Object of Business" maxlength="256" name="Object-of-Business" placeholder="Enter Object of Business" required type="text">
                    </div>
                  </div>
                </div>
                <div class="form-flex cc-popup">
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Size of Country
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Size-of-Country" class="c-input w-input" data-name="Size of Country" maxlength="256" name="Size-of-Country" placeholder="Enter Size of Country" required type="text">
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Scope of Operations
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <textarea id="Scope-of-Operations" class="c-input cc-textarea w-input" data-name="Scope of Operations" maxlength="5000" name="Scope-of-Operations" placeholder="Briefly state how your company is run" required />
                    </div>
                  </div>
                </div>
                <div class="form-flex cc-popup">
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Additional Information
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <textarea id="Additional-Information" class="c-input cc-textarea w-input" data-name="Additional Information" maxlength="5000" name="Additional-Information" placeholder="Enter additional information" />
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div class="upload-btn">
                      <div class="upload-btn_icon" />
                      <div>Upload Document</div>
                    </div>
                  </div>
                </div>
                <div class="c-form_field">
                  <div class="c-form_field">
                    <a class="c-button cc-icon-btn cc-lg w-inline-block" href="#">
                      <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/plus-white.svg"></div>
                      <div>New Order</div>
                    </a>
                  </div>
                </div>
                <div class="c-form_field">
                  <div class="c-form_field">
                    <a class="c-button cc-icon-btn cc-lg w-inline-block" href="#">
                      <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/plus-white.svg"></div>
                      <div>Add Role</div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="services-form_divider cc-mb-0" />
              <div class="services-form_block">
                <p class="services-from_header cc-margin-top">
                  COMPANY DETAILS
                </p>
                <div class="form-flex cc-popup">
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Company Name
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Company-Name-4" class="c-input w-input" data-name="Company Name 4" maxlength="256" name="Company-Name-4" placeholder="Enter Company Name" required type="text">
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Object of Business
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Object-of-Business-4" class="c-input w-input" data-name="Object Of Business 4" maxlength="256" name="Object-of-Business-4" placeholder="Enter Object of Business" required type="text">
                    </div>
                  </div>
                </div>
                <div class="form-flex cc-popup">
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Size of Country
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="Size-of-Country-2" class="c-input w-input" data-name="Size Of Country 2" maxlength="256" name="Size-of-Country-2" placeholder="Enter Size of Country" required type="text">
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Scope of Operations
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <textarea id="Scope-of-Operations-2" class="c-input cc-textarea w-input" data-name="Scope Of Operations 2" maxlength="5000" name="Scope-of-Operations-2" placeholder="Briefly state how your company is run" required />
                    </div>
                  </div>
                </div>
                <div class="form-flex cc-popup">
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Additional Information
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <textarea id="Additional-Information-2" class="c-input cc-textarea w-input" data-name="Additional Information 2" maxlength="5000" name="Additional-Information-2" placeholder="Enter additional information" />
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div>
                      <div class="upload-btn">
                        <div class="upload-btn_icon" />
                        <div>Upload Document</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-flex cc-align-right">
              <input class="c-button cc-secondary-green w-button" data-wait="" type="submit" value="Get A Quote">
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
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
