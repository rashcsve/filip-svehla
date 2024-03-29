<template>
  <div v-if="!isCurrentIndex" class="animate-pulse h-screen"></div>
  <div
    v-else
    class="
      w-full
      px-8
      py-6
      md:px-16 md:py-12
      overflow-y-scroll
      bg-white
      text-gray-200
    "
  >
    <div class="flex justify-between items-center">
      <p class="text-2xl uppercase mr-8 md:mr-0">
        {{ currentCollection.title }}
      </p>
      <p class="italic">{{ currentCollection.year }}</p>
    </div>
    <div v-if="loading" class="h-screen animate-pulse"></div>
    <div v-else>
      <client-only>
        <LightGallery
          class="hidden md:block"
          :images="getImages"
          :index="index"
          :disable-scroll="true"
          @close="onClose(index)"
        />
      </client-only>
      <div
        v-for="(img, ind) in currentCollection.images"
        :key="ind"
        class="px-8 py-4 md:pt-8 md:pb-24 mx-auto md:px-32 flex flex-col"
        :class="{
          'md:flex-row': img.align == 'left' || img.align == 'right',
          'md:flex-row-reverse': img.align == 'right',
          'justify-center mx-auto': img.align == 'center',
        }"
      >
        <div
          class="w-full sm:w-image"
          :class="{ 'mx-auto': img.align == 'center' }"
        >
          <img
            v-lazy-load
            :src="require(`~/assets/images/${img.src}`)"
            :alt="img.info"
            class="cursor-pointer img"
            :class="{
              'w-full': img.align == 'left' || img.align == 'right',
            }"
            @click="setIndex(ind)"
          />
        </div>
        <div
          :class="{
            flex: img.align == 'left' || img.align == 'right',
          }"
        >
          <div
            class="mt-4"
            :class="{
              'md:px-4': img.align == 'left' || img.align == 'right',
              'md:text-right': img.align == 'right',
              'mx-auto': img.align == 'center',
            }"
          >
            <p v-if="img.title">{{ img.title }}</p>
            <p v-if="img.size">{{ img.size }}</p>
            <p v-if="img.material">{{ img.material }}</p>
            <p v-if="img.info">{{ img.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentCollection: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      loading: false,
      images: [],
      index: null,
    }
  },
  computed: {
    currentIndex() {
      return this.$store.getters.getIndex
    },
    isCurrentIndex() {
      return this.currentIndex === this.currentCollection.index
    },
    getImages() {
      const images = []
      this.currentCollection.images.forEach((img) => {
        const imgPath = require(`~/assets/images/${img.src}`)
        const title = `${img.title}, ${img.size}, ${img.material}`
        if (img.title && img.size && img.material) {
          const imgObj = {
            title,
            url: imgPath,
          }
          images.push(imgObj)
        } else {
          images.push(imgPath)
        }
      })
      return images
    },
  },
  watch: {
    async currentIndex() {
      await this.delay()
    },
  },
  methods: {
    setIndex(ind) {
      this.$store.commit('showImage', true)
      this.index = ind
    },
    onClose(index) {
      this.index = null
      this.$store.commit('showImage', false)
    },
    delay() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
  },
}
</script>
