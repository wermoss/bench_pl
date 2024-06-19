<script setup lang="ts">
import { ref } from "vue";
import MobileMenu from "@/components/MobileMenu.vue";

const settings = useSettings();
const isActive = ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <section class="w-full z-50 bg-transparent absolute">
    <div
      class="container mx-auto max-w-6xl px-8 py-6 text-white flex items-center justify-between"
    >
      <div class="z-50">
        <nuxt-link to="/">
          <img
            src="/img/benchmarket.svg"
            alt="Benchmarket.pl"
            class="w-[120px]"
          />
        </nuxt-link>
      </div>
      <div class="lg:hidden z-50">
        <button
          :class="{
            'hamburger hamburger--elastic': true,
            'is-active': isActive,
          }"
          type="button"
          @click="toggleMenu"
          aria-label="Otwórz menu"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div class="hidden lg:block">
        <MenuA />
      </div>
    </div>
    <MobileMenu v-if="isActive" />
  </section>
</template>

<style scoped>
.hamburger {
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 1;
} /* Przezroczystosc przed zmiana */
.hamburger.is-active:hover {
  opacity: 1;
} /* Przezroczystosc po zmianie */
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #ffffff;
} /* Kolor po zmianie */
.hamburger-box {
  width: 25px; /* Szerokosc */
  height: 17px; /* Wysokosc */
  display: inline-block;
  position: relative;
  background-color: transparent; /* Kolor tla zewnetrznego */
}
.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 25px; /* Szerokosc menu */
  height: 1px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}

/*
* Elastic
*/
.hamburger--elastic .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburger--elastic .hamburger-inner::before {
  top: 8px; /* Odstep pierwszej lini */
  transition: opacity 0.125s 0.275s ease;
}
.hamburger--elastic .hamburger-inner::after {
  top: 16px; /* Odstep drugiej linii */
  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 8px, 0) rotate(135deg); /* Odstep pierwszej po zmianie */
  transition-delay: 0.075s;
}
.hamburger--elastic.is-active .hamburger-inner::before {
  transition-delay: 0s;
  opacity: 0;
}
.hamburger--elastic.is-active .hamburger-inner::after {
  transform: translate3d(0, -16px, 0) rotate(-270deg); /* Odstep drugiej po zmianie */
  transition-delay: 0.075s;
}
</style>
