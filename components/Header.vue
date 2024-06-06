<script setup lang="ts">
const settings = useSettings();
</script>

<template>
  <section class="bg-black">
    <div class="container mx-auto max-w-6xl px-8 py-4 text-white">
      <div>
        <nav>
          <ul>
            <li v-for="(link, index) in settings.data.links" :key="index">
              <a :href="link.link.url">{{ link.label }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>

  <!-- {{ settings }} -->
</template>
