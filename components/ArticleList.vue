<script setup lang="ts">
import { unref, toRaw, reactive } from "vue";

const { client } = usePrismic();
const articlesRef = await useAsyncData("articles", () =>
  client.getAllByType("article")
);

let articles = toRaw(unref(articlesRef.data));
articles = articles.sort(
  (a, b) =>
    new Date(b.first_publication_date) - new Date(a.first_publication_date)
);

const isHovered = reactive({});

articles.forEach((article) => {
  isHovered[article.id] = false;
});
</script>
<template>
  <div class="max-w-6xl mx-auto px-8">
    <div
      v-for="article in articles"
      :key="article.id"
      class="flex flex-col lg:flex-row gap-16 mb-10 items-center"
    >
      <div class="w-full lg:w-1/2">
        <nuxt-link :to="`/blog/${article.uid}`">
          <PrismicImage
            :field="article.data.photo || {}"
            class="rounded-md transition duration-500 ease-in-out"
            :class="{ grayscale: !isHovered[article.id] }"
            @mouseover="isHovered[article.id] = true"
            @mouseleave="isHovered[article.id] = false"
          />
        </nuxt-link>
      </div>
      <div class="w-full lg:w-1/2">
        <h2 class="text-3xl pb-4">
          {{
            article.data.title.length > 50
              ? (article.data.title || "").substring(0, 70) + " ..."
              : article.data.title
          }}
        </h2>
        <p class="pb-4 flex flex-row text-sm">
          <img src="/img/icon-calendar.svg" alt="Icon" class="w-3 mr-3" />
          {{ new Date(article.first_publication_date).toLocaleDateString() }}
        </p>
        <p class="pb-4">
          {{
            (
              article.data.lead.map((item) => item.text).join(" ") || ""
            ).substring(0, 250) + " ..."
          }}
        </p>
        <nuxt-link :to="`/blog/${article.uid}`">Czytaj wiecej</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grayscale {
  filter: grayscale(100%);
}
</style>
