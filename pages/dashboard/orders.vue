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
              <div v-if="!isTableEmpty" class="table-entry">
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
            </div>
            <div v-if="isTableEmpty" class="empty">
              <div class="empty-block_img">
                <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/empty.svg">
              </div>
              <div class="empty-block_text">
                <div>No Available Orders</div>
                <div>You haven’t made any orders yet. <br>Any <span class="uc-bold-text uc-green-text">new order </span>you make will appear here.</div>
              </div>
            </div>
          </div>
          <div class="c-pagination" v-if="!isTableEmpty" >
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
</template>

<script setup lang="ts">
const isTableEmpty = ref(true)

const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Orders`,
})
</script>

<style scoped>

</style>
