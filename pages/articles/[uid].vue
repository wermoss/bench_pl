<script setup lang="ts">
import { components } from "~/slices";
import { watchEffect } from "vue";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData(route.params.uid as string, () =>
  prismic.client.getByUID("article", route.params.uid as string)
);

// Pobierz dane settings z Prismic
const { data: settings } = useAsyncData("settings", () =>
  prismic.client.getSingle("settings")
);

watchEffect(() => {
  useSeoMeta({
    title: page.value?.data.meta_title ?? settings.value?.data.site_title,
    description:
      page.value?.data.meta_description ??
      settings.value?.data.meta_description,
    ogImage:
      page.value?.data.meta_image?.url ?? settings.value?.data.og_image.url,
  });
});
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
