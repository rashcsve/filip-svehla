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
  </div>
</template>

<script>
import { paintings } from '../static/paintings'
import { installations } from '../static/installations'
import Collection from './Collection'
import HorizontalCollapseItem from './HorizontalCollapseItem.vue'

export default {
  components: {
    Collection,
    HorizontalCollapseItem,
  },
  props: {
    paintings: {
      type: Boolean,
      default: false,
    },
    installations: {
      type: Boolean,
      default: false,
    },
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
    }
  },
  mounted() {
    if (this.paintings) {
      this.data = paintings
      this.$store.commit('setColor', 'paintingOne')
    } else if (this.installations) {
      this.data = installations
      this.$store.commit('setColor', 'installationOne')
    }
    this.setIndex(0)
    this.$store.commit('setAlign', 'left')
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScrolling)
  },
  methods: {
    setIndex(ind) {
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
.heading {
  bottom: 2rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}
</style>
