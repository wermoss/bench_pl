<template>
  <swiper
    v-if="slides.length"
    :slidesPerView="3"
    :spaceBetween="30"
    :modules="modules"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :loop="true"
    :speed="1000"
    class="mySwiper w-full h-[150px] bg-black"
  >
    <swiper-slide
      v-for="(slide, index) in slides"
      :key="index"
      class="p-1 md:p-10 gap-4"
    >
      <a :href="slide.url" target="_blank" rel="noopener">
        <img
          :src="slide.image"
          :alt="slide.alt"
          class="flex items-center justify-center w-full h-full"
        />
      </a>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import { useNuxtApp } from "#app";
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper/modules";

let slides = ref([]);
let modules = ref([Autoplay]);

onMounted(async () => {
  const nuxtApp = useNuxtApp();
  const prismic = nuxtApp.$prismic;
  const response = await prismic.client.getSingle("temporary");

  const cloudinaryBaseUrl =
    "https://res.cloudinary.com/dy6p39lsz/image/upload/";

  slides.value = response.data.clients
    .map((client) => {
      return {
        image: cloudinaryBaseUrl + client.public_id,
        alt: client.alt_text,
        url: client.link.url,
      };
    })
    .filter(Boolean);
});
</script>

<style scoped></style>
