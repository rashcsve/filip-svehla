<template>
  <div
    class="flex flex-col md:flex-row p-8 md:px-16 md:py-12 md:justify-between md:items-center"
  >
    <div class="flex mb-4 md:mb-0">
      <Instagram />
      <Facebook />
    </div>
    <div class>
      <p>2021 © Filip Švehla. All rights reserved</p>
      <p class="text-xs text-gray-200 md:text-right">
        developed by
        <a class="hover:underline" href="mailto:svetlana.rashchupkina@gmail.com"
          >Svetlana Rashchupkina</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import Facebook from './icons/facebook.vue'
import Instagram from './icons/Instagram.vue'
export default {
  components: { Instagram, Facebook },
}
</script>
