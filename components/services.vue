<script setup lang="ts">
import { onMounted, computed } from "vue";

const prismic = usePrismic();
const { data: services } = useAsyncData("temporar", () =>
  prismic.client.getSingle("temporary")
);

const servicesData = computed(
  () => (services.value?.data.service as any[]) ?? []
);

onMounted(() => {
  console.log(servicesData.value);
});
</script>
<template>
  <section class="bg-gray-100 py-20">
    <div class="mx-auto max-w-6xl px-8 flex flex-wrap">
      <div
        v-for="(item, index) in servicesData"
        :key="index"
        class="w-[350px] h-[350px] p-14 flex flex-col justify-between"
        :style="{
          backgroundColor: index % 2 !== 0 ? '#000000' : 'transparent',
          color: index % 2 !== 0 ? '#FFFFFF' : 'initial',
        }"
      >
        <h3 class="text-[20px] font-normal">{{ item.name }}</h3>
        <p class="text-[14px] leading-[25px] line-clamp-4 overflow-hidden">
          {{ item.description && item.description[0].text }}
        </p>
        <div class="flex items-center">
          <a :href="item.link.url">Czytaj więcej</a>{{ item.color }}
          <div class="border-t h-px w-8 border-[#e9ad0c] mx-3"></div>
        </div>
      </div>
    </div>
  </section>
</template>
