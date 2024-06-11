<template>
  <div>
    <!-- {{ header?.data.slices1 }} -->
    <div v-if="header?.data.slices1" class="flex flex-row space-x-6">
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
          <div id="test" style="cursor: pointer">
            {{ slice.primary.active_label }}
          </div>
          <div
            v-if="showLinks[index]"
            class="block absolute top-[10px]0 pt-4 left-0 z-10"
            style="width: min-content"
          >
            <a
              v-for="(link, linkIndex) in slice.primary.links"
              :key="`link-${linkIndex}`"
              :href="link.link.url"
              class="inline-block whitespace-nowrap"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
        <div v-else-if="slice.slice_type === 'simple_link'">
          <a :href="slice.primary.link.url">{{ slice.primary.label }}</a>
        </div>
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
