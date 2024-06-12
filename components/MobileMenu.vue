<template>
  <div class="h-screen w-screen bg-black z-40 fixed top-0 left-0 px-8">
    <!-- {{ header?.data.slices1 }} -->
    <div
      v-if="header?.data.slices1"
      class="flex flex-col space-y-6 uppercase text-[11px] tracking-[0.2em] text-white pt-40"
    >
      <div
        v-for="(slice, index) in header.data.slices1"
        :key="index"
        class="relative"
      >
        <div v-if="slice.slice_type === 'multi_link'">
          <div id="test" class="cursor-default">
            {{ slice.primary.active_label }}
          </div>
          <div class="block pt-6 left-0 z-10" style="width: min-content">
            <div>
              <a
                v-for="(link, linkIndex) in slice.primary.links"
                :key="`link-${linkIndex}`"
                :href="link.link.url"
                class="block whitespace-nowrap py-2 pl-6"
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
