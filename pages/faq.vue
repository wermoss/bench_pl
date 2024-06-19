<script setup lang="ts">
import { components } from "~/slices";

const layout = "custom";
const prismic = usePrismic();

// Usunięto route, ponieważ nie jest używane
// const route = useRoute();

// Zaktualizowano, aby użyć getSingle zamiast getByUID dla ogólnej strony
const results = await Promise.all([
  prismic.client.getSingle("page"), // Zakładając, że "page" to typ strony
  prismic.client.getSingle("settings"),
]);

const page = ref(results[0].data);
const settings = ref(results[1].data);

// Usunięto zakomentowany kod, który odnosił się do uid

useSeoMeta({
  title: " Benchmarket | Najczęściej zadawane pytania ",
  description:
    "Sprawdź odpowiedzi na najczęściej zadawane pytania dotyczące doradztwa podatkowego i cen transferowych. Profesjonalne doradztwo podatkowe.",
});

definePageMeta({
  layout: "custom",
});
// Podziel slices na "main_text" i pozostałe
const mainTextSlices =
  page.value?.slices?.filter((slice) => slice.slice_type === "main_text") ?? [];
const otherSlices =
  page.value?.slices?.filter((slice) => slice.slice_type !== "main_text") ?? [];
</script>

<template>
  <section class="container mx-auto max-w-6xl px-8">
    <div class="max-w-3xl mx-auto text-center pt-20 px-8">
      <h3 class="text-3xl lg:text-4xl">FAQ - Najczęściej zadawane pytania</h3>
      <br />
      <p>
        Znajdziesz tutaj odpowiedzi na najczęściej zadawane pytania dotyczące
        naszych usług oraz zasad działania. Mamy nadzieję, że poniższe
        informacje rozwieją wszelkie Twoje wątpliwości i pomogą Ci w pełnym
        korzystaniu z naszych usług. Jeśli nie znajdziesz tutaj odpowiedzi na
        swoje pytanie, skontaktuj się z nami – jesteśmy tu, aby Ci pomóc!
      </p>
    </div>
  </section>
  <section
    class="container mx-auto max-w-6xl grid lg:grid-cols-5 px-8 py-20 gap-20"
  >
    <div class="lg:col-span-3">
      <faqpage />
    </div>

    <div class="lg:col-span-2 sticky top-0 self-start hidden lg:block">
      <div><Form /></div>
    </div>
  </section>
</template>
