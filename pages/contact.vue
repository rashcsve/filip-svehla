<template>
  <div>
    <Navbar :class="color" />
    <section class="px-16 py-16 flex">
      <div class="w-full sm:w-1/2">
        <h3 class="text-2xl uppercase">Contact me</h3>
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar,
    ContactForm,
  },
  data() {
    return {
      color: 'bg-chocolate-500',
    }
  },
  created() {
    this.$store.commit('setColor', this.color)
    this.$store.commit('setAlign', 'center')
  },
}
</script>
