<script setup lang="ts">
import { unref, toRaw, reactive, ref, computed } from "vue";

const { client } = usePrismic();
const articlesRef = await useAsyncData("articles", () =>
  client.getAllByType("article")
);

// Używamy reaktywnej referencji do przechowywania artykułów
const articles = ref([]);

// Przenosimy logikę sortowania do obliczanego pola
const sortedArticles = computed(() => {
  const rawArticles = toRaw(unref(articlesRef.data));
  return rawArticles.sort(
    (a, b) =>
      new Date(b.first_publication_date) - new Date(a.first_publication_date)
  );
});

// Aktualizujemy reaktywną referencję artykułów po pobraniu i sortowaniu
sortedArticles.value.forEach((article) => {
  articles.value.push(article);
});

const isHovered = reactive({});
const selectedCategory = ref(null);

// Pobieram nazwy kategorii
const getCategoryName = async (article) => {
  if (article.data.testrel.id) {
    const category = await client.getByID(article.data.testrel.id);
    return category ? category.data.name : "Brak kategorii";
  }
  return "Brak kategorii";
};

// Pobieranie nazw kategorii dla każdego artykułu
for (const article of articles.value) {
  isHovered[article.id] = false;
  article.categoryName = await getCategoryName(article);
}

// Obliczanie liczby artykułów w każdej kategorii
const categoryCounts = computed(() => {
  const counts = {};
  articles.value.forEach((article) => {
    const { categoryName } = article;
    if (counts[categoryName]) {
      counts[categoryName]++;
    } else {
      counts[categoryName] = 1;
    }
  });
  return counts;
});

// Filtrowanie artykułów na podstawie wybranej kategorii
const filteredArticles = computed(() => {
  if (!selectedCategory.value) {
    return articles.value;
  }
  return articles.value.filter(
    (article) => article.categoryName === selectedCategory.value
  );
});
</script>

<template>
  <div class="max-w-6xl mx-auto px-8">
    <div class="mb-8">
      <span class="font-bold">Kategorie:</span>
      <a
        v-for="(count, category) in categoryCounts"
        :key="category"
        class="ml-2 cursor-pointer"
        @click="selectedCategory.value = category"
      >
        {{ category }} ({{ count }})
      </a>
    </div>
    <div
      v-for="article in filteredArticles"
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
          <nuxt-link :to="`/blog/${article.uid}`">{{
            article.data.title.length > 50
              ? (article.data.title || "").substring(0, 70) + " ..."
              : article.data.title
          }}</nuxt-link>
        </h2>
        <p class="pb-4 flex flex-row text-sm">
          <img src="/img/icon-calendar.svg" alt="Icon" class="w-[15px] mr-3" />
          {{ new Date(article.first_publication_date).toLocaleDateString() }}
        </p>
        <p class="pb-4">
          {{
            (
              article.data.lead.map((item) => item.text).join(" ") || ""
            ).substring(0, 250) + " ..."
          }}
        </p>
        <PrismicLink :field="article.data.testrel">{{
          article.categoryName
        }}</PrismicLink
        ><br />
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
