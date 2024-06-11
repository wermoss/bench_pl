<script setup lang="ts">
const settings = useSettings();
</script>

<template>
  <section class="w-full z-50 bg-transparent absolute">
    <div
      class="container mx-auto max-w-6xl px-8 py-6 text-white flex items-center justify-between"
    >
      <div>
        <nuxt-link to="/">
          <img
            src="/img/benchmarket.svg"
            alt="Benchmarket.pl"
            class="w-[120px]"
          />
        </nuxt-link>
      </div>
      <div>
        <MenuA />
      </div>
    </div>
  </section>
</template>
