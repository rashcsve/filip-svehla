<template>
  <form
    name="contact"
    action="/thanks"
    method="post"
    netlify
    netlify-honeypot="bot-field"
  >
    <!-- // Hidden input to check for bot -->
    <input type="hidden" name="form-name" value="contact" />
    <div class="mt-2">
      <label for="name" class="uppercase text-sm">Your Name</label>
      <input
        class="w-full bg-gray-100 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        name="name"
        required
      />
    </div>
    <div class="mt-4">
      <label class="uppercase text-sm" for="email">Your Email</label>
      <input
        class="w-full bg-gray-100 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="email"
        name="email"
        required
      />
    </div>
    <div class="mt-4">
      <label class="uppercase text-sm" for="message">Message</label>
      <textarea
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
