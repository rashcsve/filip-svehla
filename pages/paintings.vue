<template>
  <div>
    <Navbar paintings />
    <Gallery paintings />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
export default {
  components: {
    Navbar,
    Gallery,
  },
}
</script>
