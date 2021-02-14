<template>
  <div
    class="bg-gray-600 h-navbar w-full py-8 px-16 flex justify-between items-center"
  >
    <h1>
      <nuxt-link to="/" class="font-bold text-2xl">Filip Švehla</nuxt-link>
    </h1>
    <div class="flex">
      <nuxt-link v-if="!paintings" to="/paintings" class="mr-8"
        >paintings</nuxt-link
      >
      <nuxt-link v-if="!installations" to="/installations" class="mr-8"
        >installations</nuxt-link
      >
      <nuxt-link v-if="!about" to="/about" class="mr-8">about</nuxt-link>
      <a href="https://instagram.com" target="_blank" class="text-red-700">
        follow
        <!-- TODO Add icon -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    about: {
      type: Boolean,
      default: false,
    },
    paintings: {
      type: Boolean,
      default: false,
    },
    installations: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
