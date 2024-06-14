<script setup lang="ts">
import { onMounted, computed } from "vue";
import serializer from "../app/prismic/secondSerializer";

const prismic = usePrismic();
const { data: temporary } = useAsyncData("temporary", () =>
  prismic.client.getSingle("temporary")
);

const advantagesData = computed(() => {
  return (temporary.value?.data.advantage as any[]) ?? [];
});

const sectionTitle = computed(() => temporary.value?.data.title ?? "");

onMounted(() => {
  console.log(advantagesData.value);
});

const secondSerializer = serializer;
</script>

<template>
  <section class="bg-gray-100 py-20">
    <div class="max-w-3xl mx-auto text-center pb-20">
      <h3 class="text-5xl">{{ sectionTitle }}</h3>
    </div>
    <div class="mx-auto max-w-6xl px-8 flex flex-wrap text-center text-xs">
      <div
        v-for="(item, index) in advantagesData"
        :key="index"
        class="flex flex-col items-center md:w-1/2 w-full pb-10"
      >
        <div class="w-20 pb-6"><PrismicImage :field="item.icon" /></div>
        <h2 class="text-[20px] font-normal pb-6">{{ item.title }}</h2>
        <span class="text-sm"
          ><PrismicRichText
            :field="item.description"
            :html-serializer="secondSerializer"
        /></span>
      </div>
    </div>
  </section>
</template>
