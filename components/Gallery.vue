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
      <transition name="show">
        <Collection
          v-if="ind === index"
          :current-collection="currentCollection"
          class="coll"
        />
      </transition>
      <div
        v-if="ind !== index"
        class="next card rounded-b-3xl flex flex-col justify-between items-center md:h-full"
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
        <div class="flex flex-col text-xs italic items-center mt-8 lowercase">
          <p>{{ item.year }}</p>
          <p>{{ item.flag }}</p>
        </div>
        <div class="absolute bottom-0">
          <p
            class="uppercase text-2xl text-rotate mb-12"
            v-html="item.title"
          ></p>
        </div>
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
      this.$store.commit('setColor', 'paintingOne')
    } else {
      this.data = installations
      this.$store.commit('setColor', 'instalOne')
    }
    this.$store.commit('setAlign', 'left')
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    next(index, flag) {
      this.index = index
      this.setColor(index, flag)
      let align
      if (index === 0) {
        align = 'left'
      } else if (index === this.data.length - 1) {
        align = 'right'
      } else {
        align = 'center'
      }
      this.$store.commit('setAlign', align)
    },
    enter(el, done) {
      const tl = this.$gsap.timeline({ onComplete: done })
      tl.set(el, {
        x: window.innerWidth * 1.5,
      })
      tl.to(el, 0.7, {
        x: 0,
        ease: 'power2.easeOut',
      })
    },
    leave(el, done) {
      const tl = this.$gsap.timeline()
      tl.fromTo(
        el,
        1,
        { autoAlpha: 1 },
        { autoAlpha: 0, ease: 'power2.easeOut', onComplete: done }
      )
    },
    handleScroll(e) {
      if (window.scrollY !== 0) {
        this.onScroll = true
      } else {
        this.onScroll = false
      }
    },
    setColor(index, flag) {
      const color = this.getColor(index, flag)
      this.$store.commit('setColor', color)
    },
    getColor(index, flag) {
      if (flag === 'paintings' && index === 0) {
        return 'paintingOne'
      } else if (flag === 'paintings' && index === 1) {
        return 'paintingTwo'
      } else if (flag === 'paintings' && index === 2) {
        return 'paintingThree'
      } else if (flag === 'paintings' && index === 3) {
        return 'paintingFour'
      } else if (flag === 'installation' && index === 0) {
        return 'instalOne'
      } else if (flag === 'installation' && index === 1) {
        return 'instalTwo'
      } else if (flag === 'installation' && index === 2) {
        return 'instalThree'
      } else if (flag === 'installation' && index === 3) {
        return 'instalFour'
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
.slide-enter-active,
.slide-leave-active {
  transition: 1s ease;
}
.slide-enter {
  transform: translateX(100%, 0);
}
.slide-leave-to {
  transform: translateX(-100%, 0);
}
.show-enter-to,
.show-leave {
  transform: translateX(0);
  transition: all 0.5s ease-in;
}
.show-enter,
.show-leave-to {
  transform: translateX(50%);
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
.text-rotate {
  transform-origin: left;
  transform: translate(50%, 50%) rotate(-90deg);
}
</style>
