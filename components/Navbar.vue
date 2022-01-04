<template>
  <div>
    <nav
      class="
        md:h-navbar
        flex
        justify-between
        items-center
        p-4
        px-8
        md:pl-16 md:pr-10
      "
      :class="{
        'bg-gray-100': color == 'paintingOne',
        'bg-gray-200': color === 'paintingTwo',
        'bg-gray-300': color === 'paintingThree',
        'bg-white': color === 'paintingFour',
        'bg-sunglow-100': color === 'instalOne',
        'bg-sunset-100': color === 'instalTwo',
        'bg-royalblue-100': color === 'instalThree',
        'bg-flamingo-100': color === 'instalFour',
        'bg-sunglow-300': color === 'about',
        'bg-flamingo-400': color === 'contact',
      }"
    >
      <h1>
        <nuxt-link to="/" class="md:text-2xl text-lg">Filip Švehla</nuxt-link>
      </h1>
      <nav-links class="hidden md:flex" />
      <div
        class="
          menu-icon
          block
          cursor-pointer
          md:hidden
          px-2
          py-4
          relative
          select-none
        "
        for="menu-btn"
        @click="showMenu = !showMenu"
      >
        <span
          class="navicon flex items-center relative"
          :class="{ 'navicon-close': showMenu }"
        ></span>
      </div>
    </nav>
    <nav-links
      v-if="showMenu"
      class="flex-col md:hidden h-screen"
      :class="{
        'bg-gray-100': color == 'paintingOne',
        'bg-gray-200': color === 'paintingTwo',
        'bg-gray-300': color === 'paintingThree',
        'bg-white': color === 'paintingFour',
        'bg-sunglow-100': color === 'instalOne',
        'bg-sunset-100': color === 'instalTwo',
        'bg-royalblue-100': color === 'instalThree',
        'bg-flamingo-100': color === 'instalFour',
        'bg-sunglow-300': color === 'about',
        'bg-flamingo-400': color === 'contact',
      }"
    />
  </div>
</template>

<script>
import NavLinks from './NavLinks.vue'
export default {
  components: { NavLinks },
  props: {
    about: {
      type: Boolean,
      default: false,
    },
    paintings: {
      type: Boolean,
      default: false,
    },
    installations: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    color() {
      return this.$store.state.color
    },
    align() {
      return this.$store.state.align
    },
  },
}
</script>

<style scoped>
@media (max-width: 767px) {
  .navicon {
    width: 1.125em;
    height: 0.125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-out;
    content: '';
    background: black;
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    display: flex;
  }

  .menu-icon .navicon-close {
    background: transparent;
  }

  .menu-icon .navicon-close::before {
    transform: rotate(-45deg);
  }

  .menu-icon .navicon-close::after {
    transform: rotate(45deg);
  }

  .menu-icon .navicon-close::before,
  .menu-icon .navicon-close::after {
    top: 0;
  }
}
</style>
