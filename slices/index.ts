// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  my_special_slice: defineAsyncComponent(
    () => import("./MySpecialSlice/index.vue"),
  ),
  photo: defineAsyncComponent(() => import("./Photo/index.vue")),
  rich_text: defineAsyncComponent(() => import("./RichText/index.vue")),
  sublinks: defineAsyncComponent(() => import("./Sublinks/index.vue")),
  title: defineAsyncComponent(() => import("./Title/index.vue")),
});
