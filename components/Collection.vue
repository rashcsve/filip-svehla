<template>
  <div
    class="w-full px-16 py-12 overflow-y-scroll bg-white"
    :class="`text-${currentCollection.color}`"
  >
    <div class="flex justify-between items-center">
      <p class="text-2xl uppercase" v-html="currentCollection.title"></p>
      <p class="italic">{{ currentCollection.year }}</p>
      <!-- <p class="lowercase italic">{{ currentCollection.flag }}</p> -->
    </div>
    <div
      v-for="(img, ind) in currentCollection.images"
      :key="ind"
      class="pt-8 pb-16 mx-auto px-32"
      :class="{
        flex: img.align == 'left' || img.align == 'right',
        'flex-row-reverse': img.align == 'right',
        'justify-center mx-auto': img.align == 'center',
      }"
    >
      <div class="sm:w-image" :class="{ 'mx-auto': img.align == 'center' }">
        <img
          :src="require(`~/assets/images/${img.src}.jpg`)"
          :alt="img.info"
          :class="{
            'w-full': img.align == 'left' || img.align == 'right',
          }"
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
            'px-4': img.align == 'left' || img.align == 'right',
            'text-right': img.align == 'right',
            'mx-auto': img.align == 'center',
          }"
        >
          <p v-if="img.title" v-html="img.title"></p>
          <p v-if="img.size">{{ img.size }}</p>
          <p v-if="img.material">{{ img.material }}</p>
          <p v-if="img.info">{{ img.info }}</p>
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
}
</script>

<style lang="scss" scoped></style>
