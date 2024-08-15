<template>
 <Transition name="modal-fade">
  <div  v-if="modal.isVisible" class="c-popup cc-show">
   <div class="c-popup_inner cc-order-details">
      <div class="popup-close_btn cc-white cc-order" @click="closeModal"></div>
      <div class="order-popup_top">
        <div>Order</div>
        <div class="order-number">#{{orderId }}</div>
      </div>
      <div class="order-popup_bottom">
        <p class="uc-bold-text">Order Details</p>
        <div class="order-details_block">
          <div id="w-node-e0bb01c6-2b6a-3e88-98da-6a5417ee3251-2eeaa214" class="order-detail_item">
            <div class="order-details_title">Service</div>
            <div>{{selectedOrder.service.title}}</div>
          </div>
          <div id="w-node-e0bb01c6-2b6a-3e88-98da-6a5417ee3256-2eeaa214" class="order-detail_item">
            <div class="order-details_title">Price</div>
            <div>₦{{selectedOrder.service.price}}</div>
          </div>
          <div id="w-node-e0bb01c6-2b6a-3e88-98da-6a5417ee325b-2eeaa214" class="order-detail_item">
            <div class="order-details_title">Date</div>
            <div>{{ formatDateString(selectedOrder.created_at) }}</div>
          </div>
          <div id="w-node-e0bb01c6-2b6a-3e88-98da-6a5417ee3260-2eeaa214" class="order-detail_item">
            <div class="c-status" :class="`cc-${selectedOrder.order_status}`">
              <div>{{selectedOrder.order_status}}</div>
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

      const selectedOrderId = selectedOrder.value.id
      const orderId = selectedOrderId.slice(0, 5)

const formatDateString = (dateString) => {
  const date = new Date(dateString);

  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};



const closeModal = () => {
  modal.hide('OrderDetailsModal')
}

</script>



<style scoped>

</style>