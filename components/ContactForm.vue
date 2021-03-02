<template>
  <div>
    <h4 v-if="isSent">Thanks for your message. We will get in touch soon.</h4>
    <p v-if="isError" class="mb-2 text-red-500">
      An error occured. Please try again.
    </p>
    <form
      v-if="!isSent"
      name="contact"
      method="post"
      netlify
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <!-- // Hidden input to check for bot -->
      <input type="hidden" name="form-name" value="contact" />
      <div class="mt-2">
        <label class="uppercase text-sm" for="email">Email</label>
        <input
          id="email"
          v-model="form.email"
          class="w-full bg-gray-100 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email"
          name="email"
          aria-label="Email address"
          required
        />
      </div>
      <div class="mt-4">
        <label class="uppercase text-sm" for="message">Message</label>
        <textarea
          v-model="form.message"
          name="message"
          class="w-full h-32 bg-gray-100 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          required
        ></textarea>
      </div>
      <div class="mt-4">
        <button
          class="uppercase font-bold bg-steel-300 hover:bg-gray-600 text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
          type="submit"
          value="Send message"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        message: '',
      },
      isSent: false,
      isError: false,
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    async handleSubmit() {
      this.isError = false
      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({ 'form-name': 'contact', ...this.form }),
        })
        this.isSent = true
      } catch (error) {
        this.isError = true
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
