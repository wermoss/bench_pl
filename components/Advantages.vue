<script setup lang="ts">
import { onMounted, computed } from "vue";

const prismic = usePrismic();
const { data: temporary } = useAsyncData("temporary", () =>
  prismic.client.getSingle("temporary")
);

const advantagesData = computed(() => {
  return (temporary.value?.data.advantages as any[]) ?? [];
});

const sectionTitle = computed(() => temporary.value?.data.title ?? "");

onMounted(() => {
  console.log(advantagesData.value);
});
</script>

<template>
  <section class="bg-gray-100 py-20">
    <div class="max-w-3xl mx-auto text-center pb-20">
      <h3 class="text-5xl">{{ sectionTitle }}</h3>
      <br />
    </div>
    <div class="mx-auto max-w-6xl px-8 flex flex-wrap">
      <div
        v-for="(item, index) in advantagesData"
        :key="index"
        class="w-[350px] h-[350px] p-14 flex flex-col justify-between"
        :style="{
          backgroundColor: index % 2 !== 0 ? '#000000' : 'transparent',
          color: index % 2 !== 0 ? '#FFFFFF' : 'initial',
        }"
      >
        <h3 class="text-[20px] font-normal">{{ item.name }}</h3>
        <p class="text-[14px] leading-[25px] line-clamp-4 overflow-hidden">
          {{
            item.description && item.description[0]
              ? item.description[0].text
              : ""
          }}
        </p>
        <div class="flex items-center">
          <a :href="item.link.url">Czytaj więcej</a>{{ item.color }}
          <div class="border-t h-px w-8 border-[#e9ad0c] mx-3"></div>
        </div>
      </div>
    </div>
  </section>
</template>
