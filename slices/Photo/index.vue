<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PhotoSlice>([
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
    Public ID: {{ slice.primary.public_id }}
    <prismic-rich-text :field="slice.primary.photo_description" /><br /><br />
    <PrismicImage :field="slice.primary.photo" />
  </section>
</template>
