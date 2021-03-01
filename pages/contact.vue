<template>
  <div>
    <Navbar class="bg-gray-700" />
    <section class="px-16 py-16 flex">
      <div class="w-full sm:w-1/2">
        <h3 class="text-2xl uppercase">Contact me</h3>
        <ContactForm />
      </div>
      <div class="sm:ml-24 self-end text-lg">
        <div>
          <span class="font-bold">email</span>
          <a href="mailto:svehlafilip@seznam.cz" class="hover:underline"
            >svehlafilip@seznam.cz</a
          >
        </div>
        <div class="mt-4 flex">
          <Instagram />
          <Facebook />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import Facebook from '../components/icons/facebook.vue'
import Instagram from '../components/icons/Instagram.vue'
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar,
    ContactForm,
    Instagram,
    Facebook,
  },
}
</script>
