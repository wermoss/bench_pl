<script setup lang="ts">
import { components } from "~/slices";
import { watchEffect } from "vue";

const prismic = usePrismic();
const route = useRoute();

const results = await Promise.all([
  prismic.client.getByUID("article", route.params.uid),
  prismic.client.getSingle("settings"),
]);

const page = ref(results[0].data);
const settings = ref(results[1].data);

// const { data: page } = await useAsyncData(
//   route.params.uid as string,
//   async () => {
//     const r = await prismic.client.getByUID(
//       "article",
//       route.params.uid as string
//     );
//     return r.data;
//   }
// );

// // Pobierz dane settings z Prismic
// const { data: settings } = await useAsyncData("settings", async () => {
//   const r = await prismic.client.getSingle("settings");
//   return r.data;
// });

useSeoMeta({
  title: page.value?.meta_title ?? settings.value?.site_title,
  description: page.value?.meta_description ?? settings.value?.meta_description,
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <section
    class="container mx-auto max-w-6xl grid lg:grid-cols-5 px-8 py-20 pb-20 gap-20"
  >
    <div class="lg:col-span-3 space-y-4">
      <SliceZone
        wrapper="main"
        :slices="page?.slices ?? []"
        :components="components"
      />
    </div>
    <div class="lg:col-span-2 sticky top-0 self-start hidden lg:block">
      <div><Form /></div>
    </div>
  </section>
</template>
