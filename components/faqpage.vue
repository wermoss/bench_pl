<script setup>
import { ref, watchEffect } from "vue";
const { client } = usePrismic();
const { data: faq_page } = await useAsyncData("faq_page", () =>
  client.getSingle("faq_page")
);
const visibleAnswersIndices = ref([]);
const displayedQuestionsCount = ref(5); // Ustawienie domyślnej wartości
const showMoreIncrement = ref(3); // Ustawienie domyślnej wartości

// WatchEffect do aktualizacji displayedQuestionsCount i showMoreIncrement po załadowaniu danych
watchEffect(() => {
  if (faq_page.value && faq_page.value.data.start) {
    displayedQuestionsCount.value = faq_page.value.data.start;
  }
  if (faq_page.value && faq_page.value.data.show_more) {
    showMoreIncrement.value = faq_page.value.data.show_more; // Aktualizacja na podstawie danych Prismic
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
  <section>
    <div class="mx-auto max-w-6xl">
      <div
        v-for="(item, index) in faq_page.data.questions.slice(
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
          <div>
            {{ item.question }}
          </div>
          <div class="text-xl pl-4">
            <span v-if="visibleAnswersIndices.includes(index)">-</span>
            <span v-else>+</span>
          </div>
        </div>
        <transition name="fade">
          <div
            v-if="visibleAnswersIndices.includes(index)"
            class="answer mt-6 mb-5 pr-[40px] lg:pr-[80px] text-gray-700 italic"
          >
            {{ item.answer }}
          </div>
        </transition>
      </div>
      <!-- Show More button -->
      <button
        v-if="displayedQuestionsCount < faq_page.data.questions.length"
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
