<template>
  <li
    v-on-clickaway="away"
    :style="`width: ${isActive ? activeItemWidth : itemMinWidth}px
    ;min-width: ${itemMinWidth}px;max-width: 100%`"
    class="p-0 relative list-none item"
    :class="{
      'is-active': isActive,
      'bg-gray-100': getColor === 'paintingOne',
      'bg-gray-200': getColor === 'paintingTwo',
      'bg-gray-300': getColor === 'paintingThree',
      'bg-white': getColor === 'paintingFour',
    }"
    tabindex="0"
    role="button"
  >
    <div class="w-full p-0 m-0 flex h-full">
      <div
        class="inactive h-full absolute w-24 cursor-pointer"
        @click="click()"
      >
        <slot name="inactive"></slot>
      </div>
      <div
        class="active w-full cursor-default"
        :class="{
          hidden: !isActive,
        }"
      >
        <slot name="active"></slot>
      </div>
    </div>
  </li>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  name: 'HorizontalCollapseItem',
  mixins: [clickaway],
  props: { index: { type: Number, default: null } },
  data() {
    return {
      isActive: false,
      itemMinWidth: 100,
      itemMaxWidth: 1000,
      innerWidth: null,
    }
  },
  computed: {
    activeItemWidth() {
      return this.innerWidth - 300 // 450 is 3 x 150
    },
    showImage() {
      return this.$store.getters.showImage
    },
    getColor() {
      if (this.index === 0) {
        return 'paintingOne'
      } else if (this.index === 1) {
        return 'paintingTwo'
      } else if (this.index === 2) {
        return 'paintingThree'
      } else if (this.index === 3) {
        return 'paintingFour'
      }
      return ''
    },
  },
  mounted() {
    this.innerWidth = document.documentElement.clientWidth
    if (this.index === 0) {
      this.isActive = true
    }
  },
  methods: {
    click() {
      if (!this.showImage) {
        this.isActive = !this.isActive
      }
      this.setIndex()
    },
    away() {
      this.isActive = false
    },
    setIndex() {
      this.$store.commit('showImage', false)
      this.$store.commit('setIndex', this.index)
    },
  },
}
</script>

<style>
.item {
  transition: width 0.5s;
}
.inactive {
  opacity: 1;
  transition: opacity 0.5s;
}
.active {
  opacity: 0;
  transition: opacity 0.5s;
}
.item.is-active .inactive {
  opacity: 0;
}
.item.is-active .active {
  opacity: 1;
}
</style>
