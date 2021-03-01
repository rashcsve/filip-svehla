<template>
  <nav
    class="h-navbar text-white flex justify-between items-center py-6 px-16"
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
      <nuxt-link to="/" class="font-bold text-2xl">Filip Švehla</nuxt-link>
    </h1>
    <div class="flex">
      <nuxt-link to="/paintings" class="mr-8">paintings</nuxt-link>
      <nuxt-link to="/installations" class="mr-8">installations</nuxt-link>
      <nuxt-link to="/about" class="mr-8">about</nuxt-link>
      <a href="https://instagram.com" target="_blank" class="text-red-700">
        follow
        <!-- TODO Add icon -->
      </a>
    </div>
  </nav>
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
