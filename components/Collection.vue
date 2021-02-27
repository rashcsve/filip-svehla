<template>
  <div
    class="w-full px-16 py-12 overflow-y-scroll bg-white"
    :class="`text-${currentCollection.color}`"
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
