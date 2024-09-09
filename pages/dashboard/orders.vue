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
                <div v-if="isTableEmpty && orders.length === 0">You haven’t made any orders yet. <br>Any <span class="uc-bold-text uc-green-text"><nuxtLink to="/download-template" class="order-link">new order</nuxtLink></span> you make will appear here.</div>
              </div>
            </div>
          </div>
            <template v-if="orders.length">
        <Paginate
          v-model="params.page"
          activeClass="cc-current"
          prevText="Previous"
          nextText="Next"
          containerClass="c-pagination"
          :clickHandler="pageTriggered"
          :pageCount="pagination.last_page" />
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
}

const pageTriggered = (page: number) => {
  scrollToTop()
  orders.value = []
  params.value = sanitizeQuery({ ...params.value, ...{ page } })
}

const filterOrdersByStatus = (status) => {
  params.value = sanitizeQuery({ ...params.value, ...{ status, page: undefined } })

 
}


const getSelectedOrder = (order:Order) => {
     selectedOrder.value = order 
     modal.show('OrderDetailsModal') 
 };



const formatDateString = (dateString) => {
  const date = new Date(dateString);

  const month = String(date.getMonth() + 1).padStart(2, '0');
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
