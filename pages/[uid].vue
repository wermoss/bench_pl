<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(route.params.uid as string, () =>
  prismic.client.getByUID("page", route.params.uid as string)
);

// Pobierz dane settings z Prismic
const { data: settings } = useAsyncData("settings", () =>
  prismic.client.getSingle("settings")
);

useSeoMeta({
  title: page.value?.data.meta_title ?? settings.value?.data.site_title,
  description:
    page.value?.data.meta_description ?? settings.value?.data.meta_description,
  ogImage:
    page.value?.data.meta_image?.url ?? settings.value?.data.og_image.url,
});
</script>

<template>
  <section
    class="container mx-auto max-w-6xl grid lg:grid-cols-5 px-8 pb-20 gap-20"
  >
    <div class="lg:col-span-3 space-y-4">
      <SliceZone
        wrapper="main"
        :slices="page?.data.slices ?? []"
        :components="components"
      />
      <!-- <div class="bg-gray-100 p-8">
        Podatek dochodowy od osób prawnych<br />Dz.U.2023.2805 Art. 264 |
        UstLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div> -->
    </div>
    <div class="lg:col-span-2 sticky top-0 self-start">
      <div class="bg-gray-100 p-8"><Form /></div>
    </div>
  </section>
  <!-- <section>
    <ArticleList />
  </section> -->
</template>
