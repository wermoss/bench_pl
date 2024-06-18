<script setup>
const { client } = usePrismic();

const { data: blogData } = await useAsyncData("blogData", () =>
  client.getSingle("blog")
);

const title = ref(blogData.value.data.title);
const subtitle = ref(blogData.value.data.subtitle);

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
  <div class="max-w-3xl mx-auto text-center py-20 px-8">
    <h1 class="text-4xl font-medium pb-6">{{ title }}</h1>
    <p></p>
    {{ subtitle }}
  </div>
  <ArticleList />
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
