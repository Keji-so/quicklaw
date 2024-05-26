<template>
  <ul
    v-if="!noLiSurround"
    :class="containerClass"
  >
    <li
      v-if="firstLastButton"
      :class="[pageClass, firstPageSelected() ? disabledClass : '']"
    >
      <a
        :class="pageLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        @click.prevent="selectFirstPage()"
        @keyup.enter="selectFirstPage()"
        v-html="firstButtonText"
      />
    </li>

    <li
      v-if="!(firstPageSelected() && hidePrevNext)"
      :class="[prevClass, firstPageSelected() ? disabledClass : '']"
    >
      <a
        :class="prevLinkClass"
        :tabindex="firstPageSelected() ? -1 : 0"
        @click.prevent="prevPage()"
        @keyup.enter="prevPage()"
        v-html="prevText"
      />
    </li>

    <li
      v-for="(page, index) in pages"
      :key="index"
      :class="[
        pageClass,
        page.selected ? activeClass : '',
        page.disabled ? disabledClass : '',
        page.breakView ? breakViewClass : '',
      ]"
    >
      <a
        v-if="page.breakView"
        :class="[pageLinkClass, breakViewLinkClass]"
        tabindex="0"
      >
        <slot name="breakViewContent">{{ breakViewText }}</slot>
      </a>
      <a
        v-else-if="page.disabled"
        :class="pageLinkClass"
        tabindex="0"
      >
        {{ page.content }}
      </a>
      <a
        v-else
        :class="pageLinkClass"
        tabindex="0"
        @click.prevent="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
      >
        {{ page.content }}
      </a>
    </li>

    <li
      v-if="!(lastPageSelected() && hidePrevNext)"
      :class="[nextClass, lastPageSelected() ? disabledClass : '']"
    >
      <a
        :class="nextLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        @click.prevent="nextPage()"
        @keyup.enter="nextPage()"
        v-html="nextText"
      />
    </li>

    <li
      v-if="firstLastButton"
      :class="[pageClass, lastPageSelected() ? disabledClass : '']"
    >
      <a
        :class="pageLinkClass"
        :tabindex="lastPageSelected() ? -1 : 0"
        @click.prevent="selectLastPage()"
        @keyup.enter="selectLastPage()"
        v-html="lastButtonText"
      />
    </li>
  </ul>

  <div
    v-else
    :class="containerClass"
  >
    <a
      v-if="firstLastButton"
      :class="[pageLinkClass, firstPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click.prevent="selectFirstPage()"
      @keyup.enter="selectFirstPage()"
      v-html="firstButtonText"
    />
    <a
      v-if="!(firstPageSelected() && hidePrevNext)"
      :class="[prevLinkClass, firstPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click.prevent="prevPage()"
      @keyup.enter="prevPage()"
      v-html="prevText"
    />
    <template
      v-for="(page, index) in pages"
      :key="index"
    >
      <a
        v-if="page.breakView"
        :class="[pageLinkClass, breakViewLinkClass, page.disabled ? disabledClass : '']"
        tabindex="0"
      >
        <slot name="breakViewContent">{{ breakViewText }}</slot>
      </a>
      <a
        v-else-if="page.disabled"
        :class="[pageLinkClass, page.selected ? activeClass : '', disabledClass]"
        tabindex="0"
      >
        {{ page.content }}
      </a>
      <a
        v-else
        :class="[pageLinkClass, page.selected ? activeClass : '']"
        tabindex="0"
        @click.prevent="handlePageSelected(page.index + 1)"
        @keyup.enter="handlePageSelected(page.index + 1)"
      >
        {{ page.content }}
      </a>
    </template>
    <a
      v-if="!(lastPageSelected() && hidePrevNext)"
      :class="[nextLinkClass, lastPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click.prevent="nextPage()"
      @keyup.enter="nextPage()"
      v-html="nextText"
    />
    <a
      v-if="firstLastButton"
      :class="[pageLinkClass, lastPageSelected() ? disabledClass : '']"
      tabindex="0"
      @click.prevent="selectLastPage()"
      @keyup.enter="selectLastPage()"
      v-html="lastButtonText"
    />
  </div>
</template>

<script setup lang="ts">
const compProps = defineProps({
  modelValue: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: true
  },
  forcePage: {
    type: Number,
    default: null
  },
  clickHandler: {
    type: Function,
    default: () => {}
  },
  pageRange: {
    type: Number,
    default: 3
  },
  marginPages: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String,
    default: 'Prev'
  },
  nextText: {
    type: String,
    default: 'Next'
  },
  breakViewText: {
    type: String,
    default: '…'
  },
  containerClass: {
    type: String,
    default: 'btn-group'
  },
  pageClass: {
    type: String,
    default: null
  },
  pageLinkClass: {
    type: String,
    default: 'btn btn-sm'
  },
  prevClass: {
    type: String,
    default: null
  },
  prevLinkClass: {
    type: String,
    default: 'btn btn-sm'
  },
  nextClass: {
    type: String,
    default: null
  },
  nextLinkClass: {
    type: String,
    default: 'btn btn-sm'
  },
  breakViewClass: {
    type: String,
    default: null
  },
  breakViewLinkClass: {
    type: String,
    default: null
  },
  activeClass: {
    type: String,
    default: 'btn-disabled'
  },
  disabledClass: {
    type: String,
    default: 'btn-disabled'
  },
  noLiSurround: {
    type: Boolean,
    default: true
  },
  firstLastButton: {
    type: Boolean,
    default: false
  },
  firstButtonText: {
    type: String,
    default: 'First'
  },
  lastButtonText: {
    type: String,
    default: 'Last'
  },
  hidePrevNext: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue'])

const innerValue = ref(1)

const selected = computed({
  get: () => compProps.modelValue || innerValue.value,
  set: (newValue) => {
    innerValue.value = newValue
  }
})
const pages = computed(() => {
  const items: Record<string, any> = {}
  if (compProps.pageCount <= compProps.pageRange) {
    for (let index = 0; index < compProps.pageCount; index++) {
      const page = {
        index,
        content: index + 1,
        selected: index === selected.value - 1
      }
      items[index] = page
    }
  }
  else {
    const halfPageRange = Math.floor(compProps.pageRange / 2)

    const setPageItem = (index: number) => {
      const page = {
        index,
        content: index + 1,
        selected: index === selected.value - 1
      }

      items[index] = page
    }

    const setBreakView = (index: number) => {
      const breakView = {
        disabled: true,
        breakView: true
      }

      items[index] = breakView
    }

    // 1st - loop through low end of margin pages
    for (let i = 0; i < compProps.marginPages; i++)
      setPageItem(i)

    // 2nd - loop through selected range
    let selectedRangeLow = 0
    if (selected.value - halfPageRange > 0)
      selectedRangeLow = selected.value - 1 - halfPageRange

    let selectedRangeHigh = selectedRangeLow + compProps.pageRange - 1
    if (selectedRangeHigh >= compProps.pageCount) {
      selectedRangeHigh = compProps.pageCount - 1
      selectedRangeLow = selectedRangeHigh - compProps.pageRange + 1
    }

    for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= compProps.pageCount - 1; i++)
      setPageItem(i)

    // Check if there is breakView in the left of selected range
    if (selectedRangeLow > compProps.marginPages)
      setBreakView(selectedRangeLow - 1)

    // Check if there is breakView in the right of selected range
    if (selectedRangeHigh + 1 < compProps.pageCount - compProps.marginPages)
      setBreakView(selectedRangeHigh + 1)

    // 3rd - loop through high end of margin pages
    for (let i = compProps.pageCount - 1; i >= compProps.pageCount - compProps.marginPages; i--)
      setPageItem(i)
  }
  return items
})

const handlePageSelected = (selected_: number) => {
  if (selected.value === selected_)
    return

  innerValue.value = selected_
  emit('update:modelValue', selected_)
  compProps.clickHandler(selected_)
}
const prevPage = () => {
  if (selected.value <= 1)
    return

  handlePageSelected(selected.value - 1)
}
const nextPage = () => {
  if (selected.value >= compProps.pageCount)
    return

  handlePageSelected(selected.value + 1)
}
const firstPageSelected = () => selected.value === 1
const lastPageSelected = () => selected.value === compProps.pageCount || compProps.pageCount === 0
const selectFirstPage = () => {
  if (selected.value <= 1)
    return

  handlePageSelected(1)
}
const selectLastPage = () => {
  if (selected.value >= compProps.pageCount)
    return

  handlePageSelected(compProps.pageCount)
}

onBeforeUpdate(() => {
  if (compProps.forcePage === undefined)
    return

  if (compProps.forcePage !== selected.value)
    selected.value = compProps.forcePage
})
</script>

<style lang="css" scoped>
a {
  cursor: pointer;
}
</style>

<!-- This was ported from the Vue 2 version with a few defaults updated based on DaisyUI -->
<!-- https://github.com/lokyoung/vuejs-paginate -->
<!-- by UDB 🐼 - aeadedoyin.com -->
