<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.MainTextSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div
      class="flex flex-col justify-center items-center container mx-auto max-w-2xl pt-20 text-center"
    >
      <PrismicRichText :field="slice.primary.titleh1" />
      <br />
      <span class="text-center"
        ><PrismicRichText :field="slice.primary.subtitle"
      /></span>
    </div>
  </section>
</template>
