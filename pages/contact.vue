<template>
  <div>
    <Navbar />
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
  created() {
    this.$store.commit('setColor', 'contact')
    this.$store.commit('setAlign', 'center')
  },
}
</script>
