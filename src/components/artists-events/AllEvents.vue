<template>
  <div>
    <div
      class="md:grid grid-cols-4 md:gap-x-6 space-y-4 md:space-y-0"
      v-if="isloading"
    >
      <div v-for="index in 4" :key="index">
        <CardLoader />
      </div>
    </div>
    <div
      v-else
      class="md:grid md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6 space-y-4 md:space-y-0"
    >
      <AppEventCard
        v-for="(data, index) in allEventsData"
        :key="index"
        size="small"
        :data="data"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppEventCard from "@/components/AppEventCard/AppEventCard.vue";
import { useArtistEvent } from "@/composables/useArtistEvent";
import CardLoader from "../AppEventCard/CardLoader.vue";

const { allEventsData, isloading } = useArtistEvent();
</script>
