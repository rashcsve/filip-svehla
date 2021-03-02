<template>
  <div
    :class="{
      'min-h-screen': pageHasGallery || contactPage,
      'flex flex-col': contactPage,
    }"
  >
    <Nuxt :class="{ 'min-h-screen': pageHasGallery, 'flex-1': contactPage }" />
    <Footer v-if="!isHomepage" />
  </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
  components: {
    Footer,
  },
  computed: {
    isHomepage() {
      return this.$route.name === 'index'
    },
    pageHasGallery() {
      return (
        this.$route.name === 'paintings' || this.$route.name === 'installations'
      )
    },
    contactPage() {
      return this.$route.name === 'contact'
    },
  },
}
</script>

<style>
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
  /* font-family: 'Roboto Mono', monospace; */
  /* font-family: 'Fira Sans', sans-serif; */
  font-family: 'Changa', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
