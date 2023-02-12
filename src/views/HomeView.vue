<template>
  <main class="xl:mx-48 p-4">
    <!-- Nav component -->
    <AppNav />

    <!-- Search component -->
    <div class="xl:w-1/3 md:1/2">
      <AppSearch />
    </div>

    <!-- Featured Events -->
    <div class="mt-10">
      <AppText class="mb-5" is="h2"> Featured Events </AppText>
      <FeaturedEvents />
    </div>

    <!-- All Events -->
    <div class="mt-6">
      <AppText class="my-4 mb-6" is="h2"> All Events </AppText>
      <AllEvents />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppNav from "@/components/AppNav/AppNav.vue";
import AppSearch from "@/components/AppSearch/AppSearch.vue";
import AppText from "@/components/AppText/AppText.vue";
import AllEvents from "@/components/artists-events/AllEvents.vue";
import FeaturedEvents from "@/components/artists-events/FeaturedEvents.vue";
import { provideArtistEvent } from "@/composables/useArtistEvent";
import { onMounted } from "vue";

const { getEventsData } = provideArtistEvent();
onMounted(() => getEventsData());
</script>
