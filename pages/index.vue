<template>
  <div class="bg-gray-100 w-full md:h-screen">
    <div
      class="md:grid md:grid-cols-2 md:grid-rows-layout overflow-hidden w-full md:h-screen relative"
    >
      <div class="bg-red-500 overflow-hidden w-full box-slide-left-top"></div>
      <div
        class="bg-green-500 col-start-2 col-end-2 row-start-1 row-end-3 w-full overflow-hidden box-slide-right-top"
      >
        <navbar-top />
      </div>
      <div
        class="bg-blue-500 row-start-2 row-end-4 w-full overflow-hidden flex box-slide-left-bottom"
      >
        <navbar-bottom />
      </div>
      <div
        class="bg-yellow-500 col-start-2 col-end-2 row-start-3 row-end-4 w-full overflow-hidden box-slide-right-bottom"
      ></div>
      <h1 class="absolute text-4xl title">
        czech artist
        <div></div>
      </h1>
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
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      const tl = this.$gsap.timeline({
        // onComplete() {
        //   this.restart(true)
        // },
      })
      tl.from('.box-slide-left-top', 0.5, { opacity: 0, x: -window.innerWidth })
      tl.from('.box-slide-right-top', 0.5, {
        opacity: 0,
        y: -window.innerHeight,
      })
      tl.from('.box-slide-right-bottom', 0.5, {
        opacity: 0,
        x: window.innerWidth,
      })
      tl.from(
        '.box-slide-left-bottom',
        0.5,
        {
          opacity: 0,
          y: window.innerHeight,
        },
        'end'
      )
      tl.to('.title', { duration: 1, text: 'Filip Švehla' }, 'end')
    },
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
