<script setup lang="ts">
import { onMounted, computed } from "vue";

const prismic = usePrismic();
const { data: map } = useAsyncData("temporary", () =>
  prismic.client.getSingle("temporary")
);

const sectionTitle = computed(() => map.value?.data.map_title ?? "");
const sectionSubtitle = computed(() => map.value?.data.map_subtitle);

onMounted(() => {
  if (map.value?.type === "temporary") {
    console.log(map.value);
  }
});
</script>
<template>
  <section class="bg-gray-100 py-20">
    <div class="max-w-6xl mx-auto px-8">
      <div class="max-w-3xl mx-auto text-center pb-20">
        <h3 class="text-4xl">{{ sectionTitle }}</h3>
        <br />
        <PrismicRichText :field="sectionSubtitle" />
      </div>
      <img src="/img/map.svg" alt="Mapa świata" class="w-full" />
    </div>
  </section>
</template>
