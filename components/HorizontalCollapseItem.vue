<template>
  <li
    v-on-clickaway="away"
    :style="`width: ${isActive ? activeItemWidth : itemMinWidth}px
    ;min-width: ${itemMinWidth}px;max-width: 100%`"
    class="p-0 relative list-none item"
    :class="{
      'hover:opacity-75': !isActive,
      'is-active hover:opacity-100': isActive,
      'bg-gray-100': getColor === 'paintingOne',
      'bg-gray-200': getColor === 'paintingTwo',
      'bg-gray-300': getColor === 'paintingThree',
      'bg-white': getColor === 'paintingFour',
      'bg-sunglow-100': getColor === 'instalOne',
      'bg-sunset-100': getColor === 'instalTwo',
      'bg-royalblue-100': getColor === 'instalThree',
      'bg-flamingo-100': getColor === 'instalFour',
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
    name() {
      return this.$store.getters.getName
    },
    activeItemWidth() {
      return this.innerWidth - 300 // 450 is 3 x 150
    },
    showImage() {
      return this.$store.getters.showImage
    },
    getColor() {
      if (this.name.includes('painting')) {
        if (this.index === 0) {
          return 'paintingOne'
        } else if (this.index === 1) {
          return 'paintingTwo'
        } else if (this.index === 2) {
          return 'paintingThree'
        } else if (this.index === 3) {
          return 'paintingFour'
        }
      } else if (this.name.includes('installation')) {
        if (this.index === 0) {
          return 'instalOne'
        } else if (this.index === 1) {
          return 'instalTwo'
        } else if (this.index === 2) {
          return 'instalThree'
        } else if (this.index === 3) {
          return 'instalFour'
        }
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
