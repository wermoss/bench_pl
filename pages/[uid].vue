<script setup lang="ts">
import { components } from "~/slices";

const layout = "custom";
const prismic = usePrismic();
const route = useRoute();

const results = await Promise.all([
  prismic.client.getByUID("page", route.params.uid),
  prismic.client.getSingle("settings"),
]);

const page = ref(results[0].data);
const settings = ref(results[1].data);

// const { data: page } = useAsyncData(route.params.uid as string, async () => {
//   const response = await prismic.client.getByUID(
//     "page",
//     route.params.uid as string
//   );

//   return response.data; // Zwróć dane bezpośrednio
// });

// // Pobierz dane settings z Prismic
// const { data: settings } = useAsyncData("settings", async () => {
//   const response = await prismic.client.getSingle("settings");
//   return response.data; // Zwróć dane bezpośrednio
// });

useSeoMeta({
  title: page.value?.meta_title ?? settings.value?.site_title,
  description: page.value?.meta_description ?? settings.value?.meta_description,
});

definePageMeta({
  layout: "custom",
});
// Podziel slices na "main_text" i pozostałe
const mainTextSlices =
  page.value?.slices?.filter((slice) => slice.slice_type === "main_text") ?? [];
const otherSlices =
  page.value?.slices?.filter((slice) => slice.slice_type !== "main_text") ?? [];
</script>

<template>
  <section class="container mx-auto max-w-6xl px-8">
    <SliceZone
      wrapper="main"
      :slices="mainTextSlices"
      :components="components"
    />
  </section>
  <section
    class="container mx-auto max-w-6xl grid lg:grid-cols-5 px-8 py-20 gap-20"
  >
    <div class="lg:col-span-3 space-y-4">
      <SliceZone
        wrapper="main"
        :slices="otherSlices"
        :components="components"
      />
    </div>
    <div class="lg:col-span-2 sticky top-0 self-start hidden lg:block">
      <div><Form /></div>
    </div>
  </section>
</template>
