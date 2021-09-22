<template>
  <div
    id="gallery"
    class="flex-col-reverse md:flex-row flex flex-grow h-full w-full"
  >
    <ul class="horizontal-collapse__inner">
      <HorizontalCollapseItem
        class-name="horizontal-collapse__item--1"
        :active="true"
      >
        <div class="horizontal-collapse__inactive-content">
          <h2 class="horizontal-collapse__heading">One inactive</h2>
        </div>
        <div class="horizontal-collapse__active-content">
          <h2 class="horizontal-collapse__heading">One active</h2>
          <p class="horizontal-collapse__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            modi laudantium facere aut, nemo praesentium, labore doloremque,
            porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis.
            Recusandae, cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates modi laudantium facere aut, nemo
            praesentium, labore doloremque, porro ipsam qui nihil animi ea
            maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?
          </p>
        </div>
      </HorizontalCollapseItem>
      <HorizontalCollapseItem class-name="horizontal-collapse__item--2">
        <div class="horizontal-collapse__inactive-content">
          <h2 class="horizontal-collapse__heading">Two inactive</h2>
        </div>
        <div class="horizontal-collapse__active-content">
          <h2 class="horizontal-collapse__heading">Two active</h2>
          <p class="horizontal-collapse__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            modi laudantium facere aut, nemo praesentium, labore doloremque,
            porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis.
            Recusandae, cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates modi laudantium facere aut, nemo
            praesentium, labore doloremque, porro ipsam qui nihil animi ea
            maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?
          </p>
        </div>
      </HorizontalCollapseItem>
      <HorizontalCollapseItem class-name="horizontal-collapse__item--3">
        <div class="horizontal-collapse__inactive-content">
          <h2 class="horizontal-collapse__heading">Four inactive</h2>
        </div>
        <div class="horizontal-collapse__active-content">
          <h2 class="horizontal-collapse__heading">Four active</h2>
          <p class="horizontal-collapse__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            modi laudantium facere aut, nemo praesentium, labore doloremque,
            porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis.
            Recusandae, cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates modi laudantium facere aut, nemo
            praesentium, labore doloremque, porro ipsam qui nihil animi ea
            maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?
          </p>
        </div>
      </HorizontalCollapseItem>

      <HorizontalCollapseItem class-name="horizontal-collapse__item--4">
        <div class="horizontal-collapse__inactive-content">
          <h2 class="horizontal-collapse__heading">Five inactive</h2>
        </div>
        <div class="horizontal-collapse__active-content">
          <h2 class="horizontal-collapse__heading">Five active</h2>
          <p class="horizontal-collapse__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            modi laudantium facere aut, nemo praesentium, labore doloremque,
            porro ipsam qui nihil animi ea maiores. Ut excepturi quae veritatis.
            Recusandae, cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates modi laudantium facere aut, nemo
            praesentium, labore doloremque, porro ipsam qui nihil animi ea
            maiores. Ut excepturi quae veritatis. Recusandae, cupiditate?
          </p>
        </div>
      </HorizontalCollapseItem>
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
import { installations } from '../static/installations'
// import Collection from './Collection'
import HorizontalCollapseItem from './HorizontalCollapseItem.vue'
/* eslint-disable no-console */

export default {
  components: {
    HorizontalCollapseItem,
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
/* .fade-enter-active,
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
@media screen and (min-width: 748px) {
  .next {
    width: 80px;
    padding: 8px;
    transition: all 0.7s ease;
    text-decoration: none;
    user-select: none;
  }
  .next:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .text-rotate {
    transform-origin: left;
    transform: translate(50%, 50%) rotate(-90deg);
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
} */

/* $transitionDurationMs: 0.5s; */
/* .horizontal-collapse {
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

.horizontal-collapse__inner {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
}
.horizontal-collapse__item {
  min-height: 42rem;
  list-style: none;
  padding: 0;
  overflow: hidden;
  min-width: 10rem;
  max-width: 40rem;
  position: relative;
  transition: width 0.5s;
}
.horizontal-collapse__item--1 {
  background-color: red;
}
.horizontal-collapse__item--2 {
  background-color: green;
}
.horizontal-collapse__item--3 {
  background-color: blue;
}
.horizontal-collapse__item--4 {
  background-color: purple;
}
/* &--5 {
      background-color: orange;
    }  *
.horizontal-collapse__item.is-active .horizontal-collapse__inactive-content {
  opacity: 0;
}
.horizontal-collapse__item.is-active .horizontal-collapse__active-content {
  opacity: 1;
}
.horizontal-collapse__item-inner {
  padding: 3rem;
}
.horizontal-collapse__inactive-content {
  opacity: 1;
  transition: opacity 0.5s;
  position: absolute;
  bottom: 2rem;
  left: 1rem;
}
.horizontal-collapse__inactive-content .horizontal-collapse__heading {
  user-select: none;
  cursor: default;
  font-size: 3rem;
  line-height: 0;
  margin-bottom: 0;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

.horizontal-collapse__active-content {
  opacity: 0;
  transition: opacity 0.5s;
  cursor: default;
}
.horizontal-collapse__heading {
  margin-top: 0;
  margin-bottom: 2rem;
}
.horizontal-collapse__body {
  margin-bottom: 2rem;
}
.horizontal-collapse__link {
  display: inline-block;
  background-color: #fff;
  color: #333;
  text-decoration: none;
  line-height: 1;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-size: 1.7rem;
  font-weight: bold;
} */
</style>
