<template>
  <div id="gallery" class="flex flex-grow h-full w-full">
    <div
      v-for="(item, ind) in data"
      :key="ind"
      class="flex top-0 right-0 relative md:h-screen"
      :class="{
        'w-full': ind === index,
        'md:h-screen sticky': ind !== index && onScroll,
        'md:h-gallery': ind !== index && !onScroll,
      }"
    >
      <transition name="fade">
        <Collection
          v-if="ind === index"
          :current-collection="currentCollection"
        />
      </transition>
      <div
        v-if="ind !== index"
        class="next rounded-b-3xl flex flex-col justify-between items-center md:h-full"
        :class="`bg-${item.color}`"
        @click="next(item.index, item.color)"
      >
        <div class="flex flex-col text-xs italic items-center mt-8 lowercase">
          <p>{{ item.year }}</p>
          <p>{{ item.flag }}</p>
        </div>
        <p
          class="uppercase text-2xl transform -rotate-90 mb-12"
          v-html="item.title"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
import { paintings } from '../static/paintings'
import { installations } from '../static/installations'
import Collection from './Collection'
/* eslint-disable no-console */

export default {
  components: {
    Collection,
  },
  props: {
    arePaintings: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      onScroll: false,
      index: 0,
      data: null,
    }
  },
  computed: {
    currentCollection() {
      return this.data[Math.abs(this.index) % this.data.length]
    },
    otherCollection() {
      return this.data.filter((col) => col.index !== this.index)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    if (this.arePaintings) {
      this.data = paintings
    } else {
      this.data = installations
    }
    this.$store.commit('setColor', this.currentCollection.color)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    next(index, color) {
      this.index = index
      this.$store.commit('setColor', color)
    },
    handleScroll(e) {
      // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      //   this.onScroll = false
      // } else
      if (window.scrollY !== 0) {
        this.onScroll = true
      } else {
        this.onScroll = false
      }
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-enter {
  /* transform: translateX(100%, 0); */
}
.slide-leave-to {
  /* transform: translateX(-100%, 0); */
}

.next {
  cursor: pointer;
  width: 80px;
  padding: 8px;
  transition: all 0.7s ease;
  text-decoration: none;
  user-select: none;
}
.next:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
.card {
  transition: all 200ms ease-in-out 50ms;
}
</style>
