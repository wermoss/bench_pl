<script setup lang="ts">
const settings = useSettings();

useSeoMeta({
  title: settings.value?.data.site_title,
  description: settings.value?.data.meta_description,
  ogImage: settings.value?.data.og_image.url,
});
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
