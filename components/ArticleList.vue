<script setup lang="ts">
import { unref, toRaw } from "vue";
const { client } = usePrismic();
const articlesRef = await useAsyncData("articles", () =>
  client.getAllByType("article")
);

const articles = toRaw(unref(articlesRef.data)); // Rozpakowujemy wartość referencji i konwertujemy Proxy na zwykły obiekt
</script>

<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <h2>{{ article.data.title }}</h2>
      <PrismicRichText :field="article.data.lead" />
      <PrismicImage :field="article.data.photo || {}" />
      <nuxt-link :to="`/articles/${article.uid}`">Read More</nuxt-link>
    </div>
  </div>
</template>
