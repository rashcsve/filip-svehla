<template>
  <div class="bg-gray-100 w-full h-screen">
    <div
      class="
        flex flex-col
        md:grid md:grid-cols-2 md:grid-rows-layout
        overflow-hidden
        w-full
        md:h-screen
        relative
      "
    >
      <div class="hidden md:block overflow-hidden w-full box-slide-left-top">
        <div class="w-full bg-white h-leftTopTile tile"></div>
      </div>
      <div
        class="
          col-start-2 col-end-2
          row-start-1 row-end-3
          w-full
          overflow-hidden
          box-slide-right-top
        "
      >
        <navbar-top class="navbar-top" />
      </div>
      <div class="flex md:hidden bg-sunglow-300 h-mobileHPBody"></div>
      <div
        class="
          row-start-2 row-end-4
          w-full
          overflow-hidden
          flex
          box-slide-left-bottom
        "
      >
        <navbar-bottom class="navbar-bottom" />
      </div>
      <div
        class="
          hidden
          md:flex
          h-full
          col-start-2 col-end-2
          row-start-3 row-end-4
          w-full
          overflow-hidden
          box-slide-right-bottom
        "
      ></div>
      <nuxt-link to="/paintings">
        <h1 class="absolute text-4xl md:text-5xl title">
          czech artist
          <div></div>
        </h1>
      </nuxt-link>
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
  transition: {
    name: 'slide',
    mode: 'out-in',
    css: false,
    beforeEnter(el) {
      this.$gsap.set(el, {
        scale: 1,
        opacity: 0,
        top: '-100%',
      })
    },
    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        top: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },
    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        top: '100%',
        duration: 1,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      const tl = this.$gsap.timeline()
      tl.from('.box-slide-left-top', 0.3, { opacity: 0, x: -window.innerWidth })
      tl.from('.box-slide-right-top', 0.3, {
        opacity: 0,
        y: -window.innerHeight,
      })
      tl.from('.box-slide-right-bottom', 0.3, {
        opacity: 0,
        x: window.innerWidth,
      })
      tl.from(
        '.box-slide-left-bottom',
        0.3,
        {
          opacity: 0,
          y: window.innerHeight,
        },
        'end'
      )
      tl.to('.title', { duration: 1, text: 'Filip Švehla&nbsp;&nbsp;' }, 'end')
    },
  },
}
</script>

<style>
.title {
  transform: translate(-47%, -50%);
  top: 50%;
  left: 51%;
}
@media screen and (max-width: 600px) {
  .title {
    top: 25%;
    width: 200px;
    text-align: center;
    transform: translate(-51%, -25%);
  }
  .image {
    height: 66.666667%;
  }
}
/* .box-slide-left-top {
  background-color: #e620a0;
}
.box-slide-left-top .tile {
  background-color: black;
}
.box-slide-right-top {
  background-color: #ffee24;
}
.navbar-top {
  background-color: #e620a0;
}
.box-slide-right-bottom {
  background-color: #ffee24;
}
.box-slide-left-bottom {
  background-color: #ffee24;
}
.navbar-bottom {
  background-color: #ffafdb;
} */
.box-slide-left-top {
  background-color: #2ec4b6;
}
.box-slide-left-top .tile {
  background-color: #011627;
}
.box-slide-right-top {
  background-color: #fbff12;
}
.navbar-top {
  background-color: #e71d36;
}
.box-slide-right-bottom {
  background-color: #fdfffc;
}
.box-slide-left-bottom {
  background-color: #fdfffc;
}
.navbar-bottom {
  background-color: #e71d36;
}
</style>
