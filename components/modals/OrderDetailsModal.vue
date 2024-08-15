<template>
 <Transition name="modal-fade">
  <div  v-if="modal.isVisible" class="c-popup cc-show">
   <div class="c-popup_inner cc-order-details">
      <div class="popup-close_btn cc-white cc-order" @click="closeModal"></div>
      <div class="order-popup_top">
        <div>Order</div>
        <div class="order-number">#12345</div>
      </div>
      <div class="order-popup_bottom">
        <p class="uc-bold-text">Order Details</p>
        <div class="order-details_block">
          <div id="w-node-e0bb01c6-2b6a-3e88-98da-6a5417ee3251-2eeaa214" class="order-detail_item">
            <div class="order-details_title">Service</div>
            <div>order title</div>
          </div>
          <div id="w-node-e0bb01c6-2b6a-3e88-98da-6a5417ee3256-2eeaa214" class="order-detail_item">
            <div class="order-details_title">Price</div>
            <div>₦20,000.00</div>
          </div>
          <div id="w-node-e0bb01c6-2b6a-3e88-98da-6a5417ee325b-2eeaa214" class="order-detail_item">
            <div class="order-details_title">Date</div>
            <div>date</div>
          </div>
          <div id="w-node-e0bb01c6-2b6a-3e88-98da-6a5417ee3260-2eeaa214" class="order-detail_item">
            <div class="c-status cc-in-progress">
              <div>{{selectedOrder}}</div>
              <div class="status-color"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </Transition>

</template>

<script setup lang="ts">
const modal = useModal('OrderDetailsModal')
import type { Order } from "~/types/assets"

const props = defineProps({
  selectedOrder: {
    type: Object as () => Order,
    default: () => {}
  }
})

const selectedOrder = ref<Order>(props.selectedOrder)
console.log(selectedOrder)
console.log(props)
console.log('just selected order');




const closeModal = () => {
  modal.hide('OrderDetailsModal')
}

</script>



<style scoped>

</style>