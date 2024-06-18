<script setup lang="ts">
import { unref, toRaw, reactive, ref, computed } from "vue";

const { client } = usePrismic();
const articlesRef = await useAsyncData("articles", () =>
  client.getAllByType("article")
);

// Używamy reaktywnej referencji do przechowywania artykułów
const articles = ref([]);
const selectedCategory = ref(null);

// Przenosimy logikę sortowania do obliczanego pola
const sortedArticles = computed(() => {
  const rawArticles = toRaw(unref(articlesRef.data));
  return (
    rawArticles
      // .filter((e) => e.testrel === selectedCategory.value)
      .sort(
        (a, b) =>
          new Date(b.first_publication_date) -
          new Date(a.first_publication_date)
      )
  );
});

watch(
  () => selectedCategory.value,
  () => console.log(selectedCategory.value)
);

// Aktualizujemy reaktywną referencję artykułów po pobraniu i sortowaniu
sortedArticles.value.forEach((article) => {
  articles.value.push(article);
});

const isHovered = reactive({});

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
      <a
        id="cat"
        v-for="(count, category) in categoryCounts"
        :key="category"
        class="ml-2 cursor-pointer"
        @click="selectedCategory = category"
      >
        {{ category }}
        <!-- ({{ count }}) -->
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
          <!-- <span class="pl-4"
            ><PrismicLink :field="article.data.testrel">{{
              article.categoryName
            }}</PrismicLink></span
          > -->
        </p>
        <p class="pb-4">
          {{
            (
              article.data.lead.map((item) => item.text).join(" ") || ""
            ).substring(0, 250) + " ..."
          }}
        </p>
        <div class="flex justify-end">
          <nuxt-link :to="`/blog/${article.uid}`">Czytaj wiecej</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grayscale {
  filter: grayscale(100%);
}
a#cat {
  --s: 15px; /* the size on the corner */
  --t: 1px; /* the thickness of the border */
  --g: 15px; /* the gap between the border and image */

  padding: calc(var(--g) + var(--t));
  outline: var(--t) solid black; /* the color here */
  outline-offset: calc(-1 * var(--t));
  -webkit-mask:
    conic-gradient(at var(--s) var(--s), #0000 75%, #000 0) 0 0 /
      calc(100% - var(--s)) calc(100% - var(--s)),
    linear-gradient(#000 0 0) content-box;
  transition: 0.4s;
  cursor: pointer;
}

span#cal:hover img {
  outline-offset: calc(var(--g) / -1);
}
</style>
