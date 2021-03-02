<template>
  <div
    class="flex items-center menu flex-wrap md:justify-between w-full md:w-auto"
  >
    <nuxt-link to="/paintings" class="mb-4 md:mb-0 md:mr-8"
      >paintings</nuxt-link
    >
    <nuxt-link to="/installations" class="mb-4 md:mb-0 md:mr-8"
      >installations</nuxt-link
    >
    <nuxt-link to="/about" class="mb-4 md:mb-0 md:mr-8">about</nuxt-link>
    <nuxt-link to="/contact" class="mb-4 md:mb-0 md:mr-8">contact</nuxt-link>
    <instagram-button />
  </div>
</template>

<script>
import InstagramButton from './InstagramButton'
export default {
  components: {
    InstagramButton,
  },
}
</script>
