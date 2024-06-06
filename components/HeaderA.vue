<script setup lang="ts">
const settings = useSettings();

console.log("zzzzzz");
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
        <nav>
          <ul class="flex gap-4 uppercase text-xs tracking-[.2em]">
            <li v-for="(link, index) in settings.data.links" :key="index">
              <a :href="link.link.url">{{ link.label }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>
