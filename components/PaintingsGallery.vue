<template>
  <div
    id="gallery"
    class="
      m-auto
      flex-col-reverse
      justify-center
      md:flex-row
      flex flex-grow
      w-full
      overflow-hidden
    "
  >
    <ul v-if="data" class="flex p-0 m-0 flex-row">
      <div
        v-for="(item, ind) in data"
        :key="ind"
        class="flex top-0 right-0 relative md:rounded-b-3xl item"
        :class="{
          'w-full': ind === index,
        }"
      >
        <HorizontalCollapseItem :index="ind">
          <template #inactive>
            <div
              class="
                hidden
                md:flex
                flex-col
                text-xs
                italic
                items-center
                md:mt-8
                lowercase
                w-full
              "
            >
              <p>{{ item.year }}</p>
              <p>{{ item.flag }}</p>
            </div>
            <div
              class="
                heading
                pr-10
                leading-none
                mb-0
                uppercase
                md:text-2xl
                select-none
                flex
              "
              :class="{ fixed: !notFixedTitle, absolute: notFixedTitle }"
            >
              {{ item.title }}
            </div>
          </template>
          <template #active>
            <Collection :current-collection="item" class="coll w-full" />
          </template>
        </HorizontalCollapseItem>
      </div>
    </ul>
    <!-- <div
      v-for="(item, ind) in data"
      :key="ind"
      class="flex top-0 right-0 relative md:h-screen"
      :class="{
        'w-full': ind === index,
        'md:h-screen md:sticky': ind !== index && onScroll,
        'md:h-gallery': ind !== index && !onScroll,
      }"
    >
      <transition name="show">
        <Collection
          v-if="ind === index"
          :current-collection="currentCollection"
          class="coll"
        />
      </transition>
      <div
        v-if="ind !== index"
        class="w-full px-8 py-2 flex-row-reverse md:p-0 next cursor-pointer md:rounded-b-3xl flex md:flex-col justify-between items-center md:h-full"
        :class="{
          'bg-gray-100': getColor(item.index, item.flag) === 'paintingOne',
          'bg-gray-200': getColor(item.index, item.flag) === 'paintingTwo',
          'bg-gray-300': getColor(item.index, item.flag) === 'paintingThree',
          'bg-white': getColor(item.index, item.flag) === 'paintingFour',
          'bg-sunglow-100': getColor(item.index, item.flag) === 'instalOne',
          'bg-sunset-100': getColor(item.index, item.flag) === 'instalTwo',
          'bg-royalblue-100': getColor(item.index, item.flag) === 'instalThree',
          'bg-flamingo-100': getColor(item.index, item.flag) === 'instalFour',
        }"
        @click="next(item.index, item.flag)"
      >
        <div
          class="hidden md:flex flex-col text-xs italic items-center md:mt-8 lowercase"
        >
          <p>{{ item.year }}</p>
          <p>{{ item.flag }}</p>
        </div>
        <div class="hidden md:flex md:absolute bottom-0">
          <p class="uppercase md:text-2xl text-rotate md:mb-12 md:w-image">
            {{ item.title }}
          </p>
        </div>
        <p class="uppercase md:hidden">{{ item.year }}</p>
        <p class="md:hidden text-xs italic lowercase">{{ item.title }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import { paintings } from '../static/paintings'
import Collection from './Collection'
import HorizontalCollapseItem from './HorizontalCollapseItem.vue'
/* eslint-disable no-console */

export default {
  components: {
    Collection,
    HorizontalCollapseItem,
  },
  data() {
    return {
      notFixedTitle: false,
      index: 0,
      data: null,
    }
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScrolling)
      this.setIndex(0)
    }
  },
  mounted() {
    this.data = paintings
    this.$store.commit('setColor', 'paintingOne')
    this.$store.commit('setAlign', 'left')
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScrolling)
  },
  methods: {
    setColor(index, flag) {
      const color = this.getColor(index, flag)
      this.$store.commit('setColor', color)
    },
    setIndex(ind) {
      console.log('galee ', ind)
      this.$store.commit('showImage', false)
      this.$store.commit('setIndex', ind)
    },
    handleScrolling() {
      const documentHeight = document.body.scrollHeight
      const screenHeight = window.screen.height
      const currentScrollY = window.scrollY
      if (documentHeight - (screenHeight + currentScrollY) <= 138) {
        this.notFixedTitle = true
      } else {
        this.notFixedTitle = false
      }
    },
  },
}
</script>

<style>
.horizontal-collapse {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5rem;
  color: #fff;
}
.horizontal-collapse:before,
.horizontal-collapse:after {
  box-sizing: border-box;
}
/* .horizontal-collapse__item.is-active .horizontal-collapse__inactive-content {
  opacity: 0;
}
.horizontal-collapse__item.is-active .horizontal-collapse__active-content {
  opacity: 1;
} */
/* .horizontal-collapse__inactive-content {
  opacity: 1;
  transition: opacity 0.5s;
  position: relative;
  width: 100px;
  height: 100%;
  /* bottom: 2rem; *
  /* left: 1rem; *
} */
.heading {
  bottom: 2rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

/* .horizontal-collapse__active-content {
  opacity: 0;
  transition: opacity 0.5s;
  cursor: default;
} */
.horizontal-collapse__heading {
  margin-top: 0;
  margin-bottom: 2rem;
}
.horizontal-collapse__body {
  margin-bottom: 2rem;
}
</style>
