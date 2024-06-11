<template>
  <!-- {{ header?.data.slices1 }} -->
  <div
    v-if="header?.data.slices1"
    class="flex flex-row space-x-6 uppercase text-[11px] tracking-[0.2em] text-white"
  >
    <div
      v-for="(slice, index) in header.data.slices1"
      :key="index"
      class="relative"
    >
      <div
        v-if="slice.slice_type === 'multi_link'"
        @mouseover="showLinks[index] = true"
        @mouseleave="showLinks[index] = false"
      >
        <div id="test" class="cursor-default">
          {{ slice.primary.active_label }}
        </div>
        <div
          v-if="showLinks[index]"
          class="block absolute top-[10px]0 pt-[36px] left-0 z-10"
          style="width: min-content"
        >
          <div class="pb-4">
            <a
              v-for="(link, linkIndex) in slice.primary.links"
              :key="`link-${linkIndex}`"
              :href="link.link.url"
              class="block whitespace-nowrap py-2"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
      <div v-else-if="slice.slice_type === 'simple_link'">
        <a :href="slice.primary.link.url">{{ slice.primary.label }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const prismic = usePrismic();
const { data: header } = useAsyncData("header", async () => {
  const response = await prismic.client.getSingle("settings");
  //   console.log(response);
  return response;
});

const showLinks = ref([]);
watch(header, (newVal) => {
  if (newVal?.data.slices1) {
    showLinks.value = newVal.data.slices1.map(() => false);
  }
});
</script>
