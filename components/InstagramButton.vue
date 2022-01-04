<template>
  <a
    href="https://www.instagram.com/svehlafilip/"
    target="_blank"
    class="
      text-red-700
      flex
      px-4
      py-2
      transition-colors
      items-center
      bg-white
      rounded-xl
      hover:bg-gray-100
    "
  >
    <InstagramSvg class="w-4 h-4 mr-2" />
    follow
  </a>
</template>

<script>
import InstagramSvg from './svg/InstagramSvg'
export default {
  components: {
    InstagramSvg,
  },
}
</script>
