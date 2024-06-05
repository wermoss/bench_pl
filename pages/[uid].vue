<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(route.params.uid as string, async () => {
  const response = await prismic.client.getByUID(
    "page",
    route.params.uid as string
  );
  console.log(response);
  return response;
});

// Pobierz dane settings z Prismic
const { data: settings } = useAsyncData("settings", async () => {
  const response = await prismic.client.getSingle("settings");
  console.log(response);
  return response;
});

useSeoMeta({
  title: page.value?.data.title[0]?.text ?? settings.value?.data.site_title,
  description:
    page.value?.data.subtitle[0]?.text ?? settings.value?.data.meta_description,
  ogImage:
    page.value?.data.meta_image?.url ?? settings.value?.data.og_image.url,
});

// Dodaj console.log tutaj
if (page.value) {
  const title = JSON.parse(JSON.stringify(page.value.data.title));
  const subtitle = JSON.parse(JSON.stringify(page.value.data.subtitle));
  console.log("Title:", title);
  console.log("Subtitle:", subtitle);
}
</script>
<template>
  <section
    class="container mx-auto max-w-6xl grid lg:grid-cols-5 px-8 pb-20 gap-20"
  >
    <div class="lg:col-span-3 space-y-4">
      <!-- Ponizej jest tekst ktory sie nie wyswietla -->
      <div
        v-if="page.value && page.value.data.title && page.value.data.subtitle"
      >
        <PrismicRichText :field="page.value.data.title" />
        <PrismicRichText :field="page.value.data.subtitle" />
      </div>
      <SliceZone
        wrapper="main"
        :slices="page?.data.slices ?? []"
        :components="components"
      />
    </div>
    <div class="lg:col-span-2 sticky top-0 self-start hidden lg:block">
      <div><Form /></div>
    </div>
  </section>
</template>
