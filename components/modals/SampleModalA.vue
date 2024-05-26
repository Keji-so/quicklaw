<template>
  <Teleport to="body">
    <dialog
      class="modal"
      :class="{ 'modal-open': modal.isVisible }"
      :style="{ zIndex: modal.zIndex }"
    >
      <div class="modal-box w-11/12 max-w-2xl">
        <div class="modal-body">
          <span class="badge badge-warning mb-2">Modal A</span>
          <h3 class="text-lg font-bold">
            Hello! {{ firstName }}
          </h3>
          <p class="py-4">
            Click
            <span class="text-primary">Close</span>
            to close the modal
          </p>
        </div>
        <div class="modal-action justify-normal">
          <button
            class="btn btn-error btn-sm ml-auto"
            @click="modal.hideAll(['SampleModalA', 'SampleModalB'])"
          >
            <span>Close A & B</span>
          </button>
          <button
            class="btn btn-error btn-sm"
            @click="modal.hide('SampleModalB')"
          >
            <span>Close B</span>
          </button>
          <span class="border-r" />
          <button
            class="btn btn-warning btn-sm"
            @click="modal.show('SampleModalB')"
          >
            <span>Modal B</span>
          </button>
          <button
            class="btn btn-warning btn-sm"
            @click="modal.show('SampleModalC')"
          >
            <span>Modal C</span>
          </button>

          <button
            class="btn btn-ghost btn-sm"
            @click="modal.hideAll()"
          >
            <span>Close</span>
          </button>
        </div>
      </div>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
defineProps({
  firstName: {
    default: '',
    type: String
  }
})

const emit = defineEmits(['modalClose'])

const modal = useModal('SampleModalA')

useWatch(
  () => modal.isVisible,
  (value) => {
    if (!value)
      emit('modalClose', 'Modal A has closed')
  }
)
</script>
