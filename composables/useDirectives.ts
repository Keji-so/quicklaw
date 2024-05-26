import type { DirectiveBinding } from 'vue'

type FormFieldElement = HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement

const vDebounce = {
  beforeMount: (el: FormFieldElement, binding: DirectiveBinding) => {
    const { value, arg } = binding

    el.addEventListener(
      'input',
      lodashDebounce(() => {
        value(el.value)
      }, toMilliseconds(arg))
    )
  }
}

export const useDirectives = () => ({
  vDebounce
})
