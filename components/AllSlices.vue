<template>
  <div class="px-30">
    <div v-if="header?.data.slices1">
      <div v-for="(slice, index) in header.data.slices1" :key="index">
        <!-- Wyświetl dane z slice -->
        <div>{{ slice.slice_type }}</div>
        <!-- Możesz dostosować powyższy kod, aby wyświetlić konkretne pola z slice -->
      </div>
    </div>
  </div>
</template>

<script setup>
const prismic = usePrismic();
const { data: header } = useAsyncData("header", async () => {
  const response = await prismic.client.getSingle("settings");
  console.log(response.data.slices1); // Wyloguj dane slices1 do konsoli
  return response;
});
</script>
