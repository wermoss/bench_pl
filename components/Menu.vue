<template>
  <div class="mt-40">
    <div v-if="standard?.data.slices" class="flex flex-row space-x-4">
      <div v-for="(slice, index) in standard.data.slices" :key="index">
        <!-- If the slice type is 'test_slice_menu', display 'test_slice_menu_text' and 'standard_link' -->
        <div
          v-if="slice.slice_type === 'test_slice_menu'"
          @mouseover="showLinks[index] = true"
          @mouseleave="showLinks[index] = false"
        >
          <div id="test" style="cursor: pointer">
            {{ slice.primary.test_slice_menu_text }}
          </div>
          <div
            v-for="(link, linkIndex) in slice.primary.standard_link"
            :key="`link-${linkIndex}`"
            :class="showLinks[index] ? 'block' : 'hidden'"
            style="min-width: 100%"
          >
            <a :href="link.link.url" target="_blank">{{ link.label }}</a>
          </div>
        </div>
        <!-- If the slice type is 'normal_menu', display 'link_text' as a link -->
        <div v-else-if="slice.slice_type === 'normal_menu'">
          <a :href="slice.primary.website_link.url" target="_blank">{{
            slice.primary.link_text
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const prismic = usePrismic();
const { data: standard } = useAsyncData("standard", async () => {
  const response = await prismic.client.getSingle("menu");
  return response;
});

const showLinks = ref([]);
watch(standard, (newVal) => {
  if (newVal?.data.slices) {
    showLinks.value = newVal.data.slices.map(() => false);
  }
});
</script>
