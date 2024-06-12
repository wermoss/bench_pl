<script setup lang="ts">
import { components } from "~/slices";

const { client } = usePrismic();
const { data: articles } = await useAsyncData("articles", () =>
  client.getAllByType("article")
);

useHead({
  title: "Blog - aktualności z zakresu doradztwa podatkowego",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Najnowsze artykuły i porady od naszych ekspertów na temat cen transferowych, doradztwa podatkowego i benchmarkingu.",
    },
  ],
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="py-20">
    <ArticleList />
  </div>
</template>
<!-- <template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <SliceZone
        wrapper="main"
        :slices="article.data.slices ?? []"
        :components="components"
      />
    </div>
  </div>
</template> -->
