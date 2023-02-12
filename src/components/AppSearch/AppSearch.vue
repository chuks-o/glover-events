<template>
  <div class="w-full relative">
    <input
      type="text"
      placeholder="Search"
      class="bg-white placeholder:text-xs placeholder:text-glover-gray-100 focus:outline-none outline-none h-10 rounded-10 border border-glover-gray-300 w-full pl-10 pr-4"
      v-model="searchTerm"
    />
    <div class="absolute top-[14px] left-[18px]">
      <IconSearch />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useArtistEvent } from "@/composables/useArtistEvent";
import IconSearch from "../icons/IconSearch.vue";

const { searchTerm } = useArtistEvent();
</script>
