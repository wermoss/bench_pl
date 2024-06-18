<script setup>
import { ref, watchEffect } from "vue";
const { client } = usePrismic();
const { data: faq } = await useAsyncData("faq", () => client.getSingle("faq"));
const visibleAnswersIndices = ref([]);
const displayedQuestionsCount = ref(5); // Ustawienie domyślnej wartości
const showMoreIncrement = ref(3); // Ustawienie domyślnej wartości

// WatchEffect do aktualizacji displayedQuestionsCount i showMoreIncrement po załadowaniu danych
watchEffect(() => {
  if (faq.value && faq.value.data.start) {
    displayedQuestionsCount.value = faq.value.data.start;
  }
  if (faq.value && faq.value.data.show_more) {
    showMoreIncrement.value = faq.value.data.show_more; // Aktualizacja na podstawie danych Prismic
  }
});

function toggleAnswerVisibility(index) {
  const currentIndex = visibleAnswersIndices.value.indexOf(index);
  if (currentIndex === -1) {
    visibleAnswersIndices.value.push(index);
  } else {
    visibleAnswersIndices.value.splice(currentIndex, 1);
  }
}

function showMoreQuestions() {
  displayedQuestionsCount.value += showMoreIncrement.value; // Użyj dynamicznej wartości
}
</script>

<template>
  <section class="py-20">
    <div class="max-w-3xl mx-auto text-center pb-20">
      <h3 class="text-4xl">{{ faq.data.title }}</h3>
    </div>
    <div class="mx-auto max-w-6xl px-8">
      <div
        v-for="(item, index) in faq.data.questions.slice(
          0,
          displayedQuestionsCount
        )"
        :key="index"
        class="border-b border-gray-200 py-4"
      >
        <div
          @click="toggleAnswerVisibility(index)"
          class="flex justify-between items-center cursor-pointer select-none"
        >
          <div class="font-bold">
            {{ item.question }}
          </div>
          <div class="text-xl">
            <span v-if="visibleAnswersIndices.includes(index)">-</span>
            <span v-else>+</span>
          </div>
        </div>
        <transition name="fade">
          <div
            v-if="visibleAnswersIndices.includes(index)"
            class="answer mt-6 mb-5 pr-[100px] text-gray-700 italic"
          >
            {{ item.answer }}
          </div>
        </transition>
      </div>
      <!-- Show More button -->
      <button
        v-if="displayedQuestionsCount < faq.data.questions.length"
        @click="showMoreQuestions"
        class="mt-4 px-4 py-2 bg-gray-900 text-white rounded"
      >
        Pokaż więcej
      </button>
    </div>
  </section>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
