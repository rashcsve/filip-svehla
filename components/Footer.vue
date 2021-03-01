<template>
  <div class="flex px-16 py-12 justify-between items-center">
    <div class="flex">
      <Instagram />
      <Facebook />
    </div>
    <div class>
      <p>2021 © Filip Švehla. All rights reserved</p>
      <p class="text-xs text-gray-700 text-right">
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
