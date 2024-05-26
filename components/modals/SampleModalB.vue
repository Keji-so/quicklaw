<template>
  <Teleport to="body">
    <dialog
      class="modal"
      :class="{ 'modal-open': modal.isVisible }"
      :style="{ zIndex: modal.zIndex }"
    >
      <div class="modal-box w-11/12 max-w-lg">
        <div class="modal-body">
          <span class="badge badge-warning mb-2">Modal B</span>
          <h3 class="text-lg font-bold">
            Hello! {{ firstName }}
          </h3>
          <p>This modal should typically stand-alone, but also show on another modal depend on where it's called</p>
          <p class="py-4">
            Click
            <span class="text-primary">Close</span>
            to close the modal
          </p>
        </div>
        <div class="modal-action">
          <button
            class="btn btn-error btn-sm"
            @click="modal.hideAll()"
          >
            <span>Close All</span>
          </button>
          <span class="border-r" />
          <button
            class="btn btn-warning btn-sm ml-auto"
            @click="modal.show('SampleModalA')"
          >
            <span>Modal A</span>
          </button>
          <button
            class="btn btn-warning btn-sm"
            @click="modal.show('SampleModalC')"
          >
            <span>Modal C</span>
          </button>
          <button
            class="btn btn-ghost btn-sm"
            @click="modal.hide()"
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

const modal = useModal('SampleModalB')

useWatch(
  () => modal.isVisible,
  (value) => {
    if (!value)
      useToast().show('Modal B has closed', { description: 'No events emitted' })
  }
)
</script>
