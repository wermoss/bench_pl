<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("index", async () => {
  const data = await prismic.client.getByUID("page", "home");
  // console.log(data.data.slices.map((slice) => slice.slice_type));
  return data;
});

useHead({
  title: prismic.asText(page.value?.data.title),
});
</script>

<template>
  <div class="h-[600px] flex justify-center items-center">
    <span
      >Miejsce na elementy strony głównej - przeniesienie 1:1 z wersji
      beta</span
    >
  </div>
  <section>
    <Services />
  </section>
  <!-- <div class="bg-gray-100">
    <SliceZone
      wrapper="main"
      :slices="
        page?.data.slices.filter((slice) => slice.slice_type === 'rich_text') ??
        []
      "
      :components="components"
    />
  </div> -->
  <!-- <ArticleList /> -->
</template>
