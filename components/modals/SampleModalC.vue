<template>
  <Teleport to="body">
    <dialog
      class="modal cursor-pointer"
      :class="{ 'modal-open': modal.isVisible }"
      :style="{ zIndex: modal.zIndex }"
      @click.self="modal.hide()"
    >
      <div class="modal-box w-11/12 max-w-2xl cursor-default">
        <div class="modal-body">
          <span class="badge badge-warning mb-2">Modal C</span>
          <div class="mockup-code">
            <pre>{{ entity }}</pre>
          </div>
          <p class="py-4">
            Click
            <span class="text-primary">Backdrop</span>
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
          <button
            class="btn btn-error btn-sm"
            @click="modal.hide('SampleModalA')"
          >
            <span>Close A</span>
          </button>
          <button
            class="btn btn-error btn-sm"
            @click="modal.hideAll(['SampleModalA', 'SampleModalB'])"
          >
            <span>Close A & B</span>
          </button>
        </div>
      </div>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
defineProps({
  entity: {
    default: () => {},
    type: Object
  }
})

const emit = defineEmits(['modalClose'])

const modal = useModal('SampleModalC')

useWatch(
  () => modal.isVisible,
  (value) => {
    if (!value)
      emit('modalClose', 'Bye! Modal C has closed')
  }
)
</script>
