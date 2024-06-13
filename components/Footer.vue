<template>
  <section class="bg-gray-100 py-20" id="kontakt">
    <div class="mx-auto max-w-6xl px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-5xl">{{ sectionTitle }}</h2>
        <div class="py-10 text-lg">
          <PrismicRichText :field="sectionSubtitle" />
        </div>
      </div>
      <div class="grid lg:grid-cols-2 gap-2">
        <div class="col-span-2 lg:col-span-1">
          <div
            v-for="(item, index) in contacts"
            :key="index"
            class="py-3 grid grid-cols-[auto,1fr] gap-2 flex items-center"
          >
            <div class="relative">
              <img
                v-if="item.photo"
                :src="`https://res.cloudinary.com/dy6p39lsz/image/upload/e_grayscale,c_thumb,g_face,h_100,w_100,z_0.7/${item.photo}`"
                alt="Contact Photo"
                class="rounded-md"
              />
              <a
                :href="`https://www.linkedin.com/in/${item.linkedin_profile}`"
                target="_blank"
                class="bg-[#e9ac0e] absolute top-[-10px] left-[-10px] rounded w-[30px] h-[30px] z-50 flex items-center justify-center"
              >
                <img src="/img/linkedin.svg" class="w-6" alt="LinkedIn" />
              </a>
            </div>
            <div class="flex flex-col text-sm pl-4">
              <span class="text-lg font-bold">{{ item.full_name }}</span>
              <span class="block bg-[#FFCB04] h-[2px] w-12 my-2"></span>
              <a :href="`tel:${item.phone_number}`" class="sm:hidden">{{
                item.phone_number
              }}</a>
              <span class="hidden sm:inline">{{ item.phone_number }}</span>
              <a :href="`mailto:${item.email}`">{{ item.email }}</a
              ><br />
            </div>
            <PrismicRichText :field="item.description" class="col-span-2" />
          </div>
        </div>
        <div class="col-span-2 lg:col-span-1"><FormFooter /></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { components } from "~/slices";
import { watch } from "vue";

const prismic = usePrismic();
const { data: footer } = useAsyncData("footer", async () => {
  const response = await prismic.client.getSingle("settings");
  return response;
});

const footerData = computed(() => footer.value?.data ?? {});
const companyName = computed(() => footerData.value?.company_name ?? "");
const address = computed(() => footerData.value?.address ?? "");
const nip = computed(() => footerData.value?.nip ?? "");
const regon = computed(() => footerData.value?.regon ?? "");
const contacts = computed(() => footerData.value?.contacts ?? []);
const sectionTitle = computed(() => footerData.value?.section_title ?? "");
const sectionSubtitle = computed(
  () => footerData.value?.section_subtitle ?? ""
);
</script>
