<template>
  <div class="bg-gray-100 w-full md:h-screen">
    <div
      class="md:grid md:grid-cols-2 md:grid-rows-layout overflow-hidden w-full md:h-screen relative"
    >
      <div class="bg-red-500 overflow-hidden w-full"></div>
      <div
        class="bg-green-500 col-start-2 col-end-2 row-start-1 row-end-3 w-full overflow-hidden"
      >
        <navbar-top />
      </div>
      <div
        class="bg-blue-500 row-start-2 row-end-4 w-full overflow-hidden flex"
      >
        <navbar-bottom />
      </div>
      <div
        class="bg-yellow-500 col-start-2 col-end-2 row-start-3 row-end-4 w-full overflow-hidden"
      ></div>
      <h1 class="absolute text-4xl text-white title">Filip Švehla</h1>
    </div>
  </div>
</template>

<script>
import NavbarTop from '../components/Homepage/NavbarTop'
import NavbarBottom from '../components/Homepage/NavbarBottom'

export default {
  components: {
    NavbarTop,
    NavbarBottom,
  },
}
</script>

<style scoped>
.title {
  transform: translate(-47%, -50%);
  top: 50%;
  left: 51%;
}
</style>
