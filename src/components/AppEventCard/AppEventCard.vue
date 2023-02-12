<template>
  <AppCard
    class="bg-white rounded-10 w-full"
    :class="{ 'p-4': isLarge, ' shadow-sm p-3': isSmall }"
  >
    <template #header>
      <img
        :src="props.data.event_image_url"
        alt="cover photo of artists"
        height="188px"
        width="100%"
        class="h-48 w-full rounded-md object-cover"
        :class="{ 'mb-4': isLarge, 'mb-3': isSmall }"
      />
    </template>

    <template #body>
      <div class="flex items-start justify-between">
        <AppText
          is="h2"
          class="font-bold mb-4 lg:mb-0"
          :class="{ 'text-sm': isLarge, 'text-xs': isSmall }"
        >
          {{ props.data.title }}
        </AppText>
        <AppDateView :class="{ hidden: isLarge }">
          {{ formatDate(props.data?.starts_at, "short") }}
        </AppDateView>
      </div>

      <div
        :class="{
          'flex items-end justify-between flex-shrink-0 flex-wrap': isLarge,
        }"
      >
        <div>
          <div class="md:flex mb-3">
            <div class="flex items-center">
              <IconLocation />
              <AppText
                is="p"
                :class="{ 'text-xs': isSmall }"
                class="text-glover-gray-100 text-sm font-normal ml-3"
              >
                {{ props.data?.venue?.city }}
              </AppText>
            </div>
            <div
              :class="{ hidden: isSmall }"
              class="flex items-center md:ml-8 mt-3 md:mt-0"
            >
              <IconCalendar />
              <p
                :class="{ 'text-xs': isSmall }"
                class="text-glover-gray-100 text-sm font-normal ml-3"
              >
                {{ formatDate(props.data?.starts_at, "long") }}
              </p>
            </div>
          </div>

          <div class="flex items-center">
            <IconFee />
            <AppText
              is="p"
              :class="{ 'text-xs': isSmall }"
              class="text-glover-gray-100 text-sm font-normal ml-3"
            >
              Starting from
              <span
                :class="{ 'text-sm': isSmall }"
                class="text-glover-purple text-base font-semibold"
                >$15,000
              </span>
            </AppText>
          </div>
        </div>

        <AppLink :href="props.data?.url" :class="{ 'mt-4 text-xs': isSmall }">
          Buy Ticket
        </AppLink>
      </div>
    </template>
  </AppCard>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import IconLocation from "../icons/IconLocation.vue";
import IconFee from "../icons/IconFee.vue";
import IconCalendar from "../icons/IconCalendar.vue";
import type { ArtistEvent } from "@/types/ArtistEvent";
import AppText from "../AppText/AppText.vue";
import AppCard from "../AppCard/AppCard.vue";
import AppDateView from "../AppDateView/AppDateView.vue";
import AppLink from "../AppLink/AppLink.vue";

type Size = "large" | "small";
const props = defineProps<{
  size: Size;
  data: ArtistEvent;
}>();

const isLarge = computed(() => props.size === "large");
const isSmall = computed(() => props.size === "small");

const formatDate = (dateString: string, type: "long" | "short") => {
  if (type === "long") {
    const dateFormatted = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
      .format(new Date(dateString))
      .split(" ");

    const date = new Date(dateString);
    const day = date.getDate();
    const ordinalSuffix =
      ["th", "st", "nd", "rd"][((day % 100) - 20) % 10] || "th";

    return `${day}${ordinalSuffix} ${dateFormatted[1]}, ${dateFormatted[2]}`;
  }

  if (type === "short") {
    return new Intl.DateTimeFormat("en-GB", {
      month: "short",
      day: "numeric",
    }).format(new Date(dateString));
  }
};
</script>
