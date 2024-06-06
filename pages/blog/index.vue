<script setup lang="ts">
import { components } from "~/slices";

const { client } = usePrismic();
const { data: articles } = await useAsyncData("articles", () =>
  client.getAllByType("article")
);

useHead({
  title: "List of Articles",
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
