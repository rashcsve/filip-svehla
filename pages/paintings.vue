<template>
  <div>
    <Navbar paintings />
    <PaintingsGallery />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import PaintingsGallery from '../components/PaintingsGallery'
export default {
  components: {
    Navbar,
    PaintingsGallery,
  },
}
</script>
