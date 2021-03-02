<template>
  <nav
    class="h-navbar flex justify-between items-center py-6 pl-16 pr-10"
    :class="[
      `bg-${color}`,
      {
        'rounded-l-3xl': align === 'left',
        'rounded-r-3xl': align === 'right',
        'rounded-none': align === 'center',
      },
    ]"
  >
    <h1>
      <nuxt-link to="/" class="text-2xl">Filip Švehla</nuxt-link>
    </h1>
    <div class="flex items-center">
      <nuxt-link to="/paintings" class="mr-8">paintings</nuxt-link>
      <nuxt-link to="/installations" class="mr-8">installations</nuxt-link>
      <nuxt-link to="/about" class="mr-8">about</nuxt-link>
      <nuxt-link to="/contact" class="mr-8">contact</nuxt-link>
      <instagram-button />
    </div>
  </nav>
</template>

<script>
import InstagramButton from './InstagramButton.vue'
export default {
  components: { InstagramButton },
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
  computed: {
    color() {
      return this.$store.state.color
    },
    align() {
      return this.$store.state.align
    },
  },
}
</script>
