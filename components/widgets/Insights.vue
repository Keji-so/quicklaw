<template>
 <div :class="classes" >
            <div  class="insights-block_img">
              <img
                alt=""
                class="c-img cc-cover"
                loading="lazy"
                src="@/public/assets/images/placeholder.svg"
              >
            </div>
            <div class="insights-block_details">
              <div class="insights-title heading-h3">
                Why Do I Need to Register My Business?
              </div>
              <div class="insights-block_date">
                JAN 10, 2023
              </div>
              <a class="arrow-link" >Read Insight</a>
            </div>
          </div>
</template>

<script setup lang="ts">
defineProps<{ classes: string }>()
</script>

<style scoped>

</style>