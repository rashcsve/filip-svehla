<template>
  <div id="gallery" class="flex">
    <transition-group name="fade" tag="div" class="w-full">
      <div v-for="i in [index]" :key="i" class="flex h-full">
        <div
          class="w-full px-16 py-12 overflow-y-scroll"
          :class="currentCollection.color"
        >
          <div class="flex justify-between items-center">
            <p class="italic">{{ currentCollection.year }}</p>
            <p class="text-2xl uppercase">{{ currentCollection.title }}</p>
            <p class="lowercase italic">{{ currentCollection.flag }}</p>
          </div>
          <div
            v-for="(img, ind) in currentCollection.images"
            :key="ind"
            class="pt-8 pb-16"
            :class="{
              flex: img.align == 'left' || img.align == 'right',
              'flex-row-reverse': img.align == 'right',
              'justify-center': img.align == 'center',
            }"
          >
            <img
              :src="require(`~/assets/images/${img.src}.png`)"
              :alt="img.info"
              :class="{
                'w-2/3': img.align == 'left' || img.align == 'right',
              }"
            />
            <div
              :class="{
                flex: img.align == 'left' || img.align == 'right',
              }"
            >
              <p
                v-if="img.title"
                class="mt-4"
                :class="{
                  'px-4': img.align == 'left' || img.align == 'right',
                  'text-right': img.align == 'right',
                }"
              >
                {{ img.title }}
              </p>
              <p
                :class="{
                  'px-4': img.align == 'left' || img.align == 'right',
                  'text-right': img.align == 'right',
                }"
                v-html="img.info"
              ></p>
            </div>
          </div>
        </div>
        <aside
          class="flex top-0 right-0 relative md:h-screen"
          :class="{ 'md:h-screen sticky': onScroll, 'md:h-gallery': !onScroll }"
        >
          <div
            v-for="(col, ind) in otherCollection"
            :key="ind"
            :class="col.color"
          >
            <div
              class="next flex flex-col justify-between items-center md:h-full"
              @click="next(col.index)"
            >
              <div
                class="flex flex-col text-xs italic items-center mt-8 lowercase"
              >
                <p>{{ col.year }}</p>
                <p>{{ col.flag }}</p>
              </div>
              <p class="uppercase text-2xl transform -rotate-90 mb-12">
                {{ col.title }}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </transition-group>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  data() {
    return {
      onScroll: false,
      index: 0,
      collection: [
        {
          index: 0,
          title: 'Stripes',
          year: '2020',
          flag: 'Paintings',
          color: 'bg-orange-600',
          images: [
            {
              src: 'paintings/stripes_1',
              align: 'center',
              title: 'Proužkyyyy',
              info: '2020<br>Acrylic on Canvas<br>160 x 120 cm',
            },
            {
              src: 'paintings/stripes_2',
              align: 'right',
              info: '2020<br>Acrylic on Canvas<br>160 x 120 cm',
            },
            {
              src: 'paintings/stripes_3',
              align: 'left',
              info: '2020<br>Acrylic on Canvas<br>160 x 120 cm',
            },
          ],
        },
        {
          index: 1,
          title: 'GRID',
          year: '2020',
          flag: 'Paintings',
          color: 'bg-blue-600',
          images: [
            {
              src: 'paintings/stripes_1',
              align: 'center',
              title: 'Grid grid',
              info: '2020<br>Acrylic on Canvas<br>160 x 120 cm',
            },
            {
              src: 'paintings/stripes_2',
              align: 'right',
              info: '2020<br>Acrylic on Canvas<br>160 x 120 cm',
            },
          ],
        },
        {
          index: 2,
          title: 'sosi',
          year: '2020',
          flag: 'Paintings',
          color: 'bg-white',
          images: [
            {
              src: 'paintings/stripes_1',
              align: 'center',
              title: 'SOSIII',
              info: '2020<br>Acrylic on Canvas<br>160 x 120 cm',
            },
            {
              src: 'paintings/stripes_1',
              align: 'left',
              info: '2020<br>Acrylic on Canvas<br>160 x 120 cm',
            },
          ],
        },
      ],
    }
  },
  computed: {
    currentCollection() {
      return this.collection[Math.abs(this.index) % this.collection.length]
    },
    otherCollection() {
      return this.collection.filter((col) => col.index !== this.index)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    next(index) {
      this.index = index
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
.next {
  cursor: pointer;
  width: 80px;
  padding: 8px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
.next:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
