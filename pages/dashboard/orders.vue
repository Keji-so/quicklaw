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
              <nuxtLink @click="filterOrdersByStatus(null)" class="order-filter w-inline-block" :class="{ 'cc-active': !params.status }">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/unordered-list.svg"></div>
                <div>All</div>
              </nuxtLink>
              <nuxtLink @click="filterOrdersByStatus('done')" class="order-filter w-inline-block" :class="{ 'cc-active': params.status === 'done' }">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/check.svg"></div>
                <div>Done</div>
              </nuxtLink>
              <nuxtLink @click="filterOrdersByStatus('in-progress')" class="order-filter w-inline-block" :class="{ 'cc-active': params.status === 'in-progress' }">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/hourglass.svg"></div>
                <div>In Progress</div>
              </nuxtLink>
              <nuxtLink @click="filterOrdersByStatus('draft')" class="order-filter w-inline-block" :class="{ 'cc-active': params.status === 'draft' }">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/feather.svg"></div>
                <div>Draft</div>
              </nuxtLink>
              <nuxtLink @click="filterOrdersByStatus('submitted')"  class="order-filter w-inline-block" :class="{ 'cc-active': params.status === 'submitted' }">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/notebook.svg"></div>
                <div>Submitted</div>
              </nuxtLink>
              <nuxtLink @click="filterOrdersByStatus('cancelled')" class="order-filter w-inline-block" :class="{ 'cc-active': params.status === 'cancelled' }">
                <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/cancel.svg"></div>
                <div>Cancelled</div>
              </nuxtLink>
            </div>
            <nuxtLink to="/download-template" class="c-button cc-icon-btn w-inline-block">
              <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/cart-add.svg"></div>
              <div>New Order</div>
            </nuxtLink>
          </div>
          <div id="scrollbar" class="c-table">
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
            <div>
             
             <div v-if="orders.length > 0">
              <div v-for="order in orders" :key="order.id" class="table-entry" :class="isTableEmpty ? '' : 'cc-show'" @click="getSelectedOrder(order)">
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
                  <div  class="column-text">
                    {{order.service.title}}
                  </div>
                  <div class="column-text">
                    ₦{{order.service.price}}
                  </div>
                  <div  class="column-text">
                    {{ formatDateString(order.created_at) }}
                  </div>
                  <div  class="c-status" :class="`cc-${order.order_status}`">
                    <div>{{order.order_status}}</div>
                    <div class="status-color" />
                  </div>
                </div>
              </div>
             </div>
             
            </div>
            <div class="empty" v-if="orders.length === 0">
              <div class="empty-block_img">
                <img alt="" class="c-img" loading="lazy" src="@/public/assets/images/empty.svg">
              </div>
              <div class="empty-block_text">
                <div>No Available Orders</div>
                <div v-if="isTableEmpty && orders.length === 0">You haven’t made any orders yet. <br>Any <span class="uc-bold-text uc-green-text"><nuxtLink to="/download-template.vue" class="order-link">new order</nuxtLink></span> you make will appear here.</div>
              </div>
            </div>
          </div>
          <div class="c-pagination" v-if="orders.length > 0" >
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
            <template v-if="orders.length">
      <div class="flex mt-8 justify-center">
        <Paginate
          v-model="params.page"
          activeClass="bg-primary text-white"
          :clickHandler="pageTriggered"
          :pageCount="pagination.last_page" />
      </div>
    </template>
        </div>
      </div>
    </section>
  </div>
  <OrderDetailsModal v-if="modal.has('OrderDetailsModal')" :selectedOrder="selectedOrder" />
</template>

<script setup lang="ts">
import type { Pagination } from '~/types'
import type { Order } from "~/types/assets"


 const user = {
    ...useAuth().value.user
  }
const isTableEmpty = ref(null)
const orders = ref<Order[]>([])
const filteredOrders = ref<Order[]>([])
const currentStatus = ref('all')
const selectedOrder = ref<Order>()
const activeFilter = ref('all')
const pagination = ref<Pagination>(useDefault('pagination'))

const params = ref(sanitizeQuery(useRoute().query))



const modal = useModal()

const userOrderState = useFetchState('/orders')

const fetchAllOrders = async () => {
  const { data } = await useGet<Order>(userOrderState.value.url, params.value)
    if (data.value) {
      orders.value = data.value.data as Order[] 
      pagination.value = usePaginate(lodashOmit(data.value, 'data'))!
      isTableEmpty.value = orders.value.length <= 0      
    } 
  // showAllOrders()
}

const pageTriggered = (page: number) => {
  scrollToTop()
  orders.value = []
  params.value = sanitizeQuery({ ...params.value, ...{ page } })
}

const filterOrdersByStatus = (status) => {
  // currentStatus.value = status
  // if (orders.value && orders.value.length > 0) {
  //   filteredOrders.value = orders.value.filter(order => order.order_status === status)
  //   activeFilter.value = status
  // } else {
  //   filteredOrders.value = []
  // }
  params.value = sanitizeQuery({ ...params.value, ...{ status, page: undefined } })

 
}


// const showAllOrders = () => {
//   currentStatus.value = 'all'
//   activeFilter.value = 'all'
//   filteredOrders.value = orders.value
// }

const getSelectedOrder = (order:Order) => {
     selectedOrder.value = order 
     modal.show('OrderDetailsModal') 
 };



const formatDateString = (dateString) => {
  const date = new Date(dateString);

  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};


useWatch(params, () => {
  useRouter().push({
    path: '/dashboard/orders',
    query: params.value
  })
  fetchAllOrders()
})

onMounted(() => {
fetchAllOrders()
})

const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Orders`,
})
</script>

<style scoped>

</style>
