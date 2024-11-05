<template>
  <div v-for="(category, index) in categories" :key="category.id" class="c-service"
    :class="{ 'cc-active': isServiceActive[index] }">
    <div class="service-flex" @click="toggleService(index)">
      <div class="service-title_container">
        <div class="service-index">0{{ index + 1 }}</div>
        <div class="service-title">{{ category.name }}</div>
      </div>
      <div class="service-details_container">
        <div class="service-details_inner">
          <div>{{ category.description }}</div>
          <div v-if="index === 0" class="c-button cc-toggle"  @click.stop="selectService({ name: 'setDefault' })">Get A
            Quote</div>
          <div v-if="index > 0" class="service-details_icon" :class="{ 'cc-active': isServiceActive[index] }"></div>
        </div>
      </div>
    </div>
    <div class="services-details_container">
      <div class="service-title_container" />
      <div class="service-details_container">
        <div class="services-list_container" :class="{ 'cc-active': isServiceActive[index]}">
          <div class="services-offered">
            <template v-for="service in category.services" :key="service.id">
              <nuxtLink class="c-service_item" @click.stop="selectService(service)">
                {{ service.name }}
              </nuxtLink>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Render the modal outside of the loop -->
  <QuoteServiceModal v-if="selectedService && modal.has('QuoteServiceModal')" :service="selectedService" />
  <DefaultServiceModal v-if="selectedService && modal.has('DefaultServiceModal')" :service="selectedService" />
  <DefaultOrderSuccessModal />
  <QuoteOrderSuccessModal />


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

const params = useRoute().query


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



const defaultService = { name: 'Startup Advisory', is_quote_service: true, target_party: 'quote_form' }; 

const selectService = (service: Services) => {
  selectedService.value = service;

  if (selectedService.value.name === 'setDefault') { 
    selectedService.value = defaultService; 
  }

  if (selectedService.value.is_quote_service === true) {
    modal.show('QuoteServiceModal');
  } else {
    modal.show('DefaultServiceModal');
  }
}



const handleModalClosed = (service: Services | null) => {
  selectedService.value = service
}


const activeTab = params.tab

onMounted(async () => {

  if (activeTab === 'startup-adivsory') {
    await nextTick();
    setTimeout(() => {
     selectService({ name: 'setDefault' })
  }, 200); 
  }
});

</script>

<style scoped>
/* Add your styles here */
</style>