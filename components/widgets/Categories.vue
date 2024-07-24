<template>
  <div v-for="(category, index) in categories" :key="category.id" class="c-service"
    :class="{ 'cc-active': isServiceActive[index] }">
    <div class="service-flex" @click="toggleService(index)">
      <div class="service-title_container">
        <div class="service-index">0{{ index + 2 }}</div>
        <div class="service-title">{{ category.name }}</div>
      </div>
      <div class="service-details_container">
        <div class="service-details_inner">
          <div>{{ category.description }}</div>
          <div class="service-details_icon" :class="{ 'cc-active': isServiceActive[index] }"></div>
        </div>
      </div>
    </div>
    <div class="services-details_container">
      <div class="service-title_container" />
      <div class="service-details_container">
        <div class="services-list_container" :class="{ 'cc-active': isServiceActive[index] }">
          <div class="services-offered">
            <template v-for="service in category.services" :key="service.id">
              <div class="c-service_item" @click.stop="selectService(service)">
                {{ service.name }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Render the modal outside of the loop -->
    <ServiceFormModal v-if="selectedService" :service="selectedService" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useModal } from '~/composables/useModal'
import type { Services } from "~/types/categories"
const modal = useModal()
const props = defineProps<{
  categories: Array<{
    id: string
    name: string
    description: string
    services: Services[]
  }>
}>()
const isServiceActive = ref<boolean[]>(Array(props.categories.length).fill(false))
const selectedService = ref<Services | null>(null)
const toggleService = (index: number) => {
  if (isServiceActive.value[index]) {
    isServiceActive.value[index] = false
  } else {
    isServiceActive.value.fill(false)
    isServiceActive.value[index] = true
  }
}
const selectService = (service: Services) => {
  selectedService.value = service // Set the selected service
  modal.show('ServiceFormModal') // Show the modal
}
</script>

<style scoped>
/* Add your styles here */
</style>