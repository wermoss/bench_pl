<template>
  <swiper
    :slidesPerView="1"
    :modules="modules"
    :autoplay="{ delay: 10000, disableOnInteraction: false }"
    :loop="true"
    :speed="1000"
    :pagination="{ clickable: true }"
    :effect="'fade'"
    class="mySwiper"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <nuxt-img
        :src="`https://res.cloudinary.com/dqoftbaal/image/upload/f_webp,fl_awebp,q_auto/${slide.image}`"
        :alt="slide.alt"
        class="w-full h-[100svh] object-cover md:object-top"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw"
      />

      <div
        class="absolute inset-0 flex items-center text-white font-bold"
        :ref="`animatedDiv${index}`"
      >
        <div
          class="container mx-auto max-w-6xl py-28 px-8 flex flex-col relative"
        >
          <div class="flex items-center">
            <div class="w-[170px] md:w-[250px]">
              <img src="/img/big_rectangle.svg" alt="Opis obrazka" />
            </div>
            <div class="flex flex-col items-start ml-[-100px] md:ml-[-150px]">
              <div class="text-3xl md:text-5xl"><h1>Ceny transferowe</h1></div>
              <div class="text-xl md:text-3xl font-thin pt-2">
                <h2>Dokumentacja i analizy</h2>
              </div>
            </div>
          </div>
          <div class="flex justify-end items-end absolute bottom-0 right-8">
            <div
              class="py-3 px-4 bg-[#e9ac0e] w-[250px] text-black text-center font-semibold text-sm uppercase rounded tracking-wide cursor-pointer"
            >
              Kontakt z nami
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import Swiper modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        { image: "grzegorz", alt: "Grzegorz Plisz", text: "Transfer Pricing" },
        { image: "michal", alt: "Michał Olejniczak", text: "Transfer Pricing" },
      ],
      modules: [Autoplay, Pagination, EffectFade],
    };
  },
};
</script>

<style scoped>
::v-deep .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background: #000; /* Zmień kolor tła */
  opacity: 1; /* Zmień przezroczystość */
}

::v-deep .swiper-pagination-bullet-active {
  background: #fff; /* Zmień kolor tła dla aktywnej kropki */
}
</style>
