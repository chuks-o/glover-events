<template>
  <div>
    <div
      class="md:grid grid-cols-2 md:gap-x-6 space-y-4 md:space-y-0"
      v-if="isloading"
    >
      <div v-for="index in 2" :key="index">
        <CardLoader />
      </div>
    </div>

    <Carousel
      ref="myCarousel"
      class="relative"
      :items-to-show="2"
      :items-to-scroll="1"
      :wrap-around="true"
      :breakpoints="breakpoints"
    >
      <template #slides>
        <Slide v-for="(data, index) in featuredEvents" :key="index">
          <AppEventCard
            class="carousel__item w-full"
            size="large"
            :data="data"
            :is-loading="isloading"
          />
        </Slide>
      </template>

      <template #addons="{ slidesCount }">
        <Navigation v-if="slidesCount > 1" />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import AppEventCard from "@/components/AppEventCard/AppEventCard.vue";
import CardLoader from "@/components/AppEventCard/CardLoader.vue";
import { useArtistEvent } from "@/composables/useArtistEvent";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";

const { featuredEvents, isloading } = useArtistEvent();

const myCarousel = ref<InstanceType<typeof Carousel> | null>(null);

const breakpoints = {
  // 200px and up
  200: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: "start",
  },
};
</script>

<style>
.carousel__icon {
  fill: "#372AA4";
  width: 17px;
  height: 20px;
}

.carousel__prev,
.carousel__next {
  position: absolute;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background-color: white !important;
  box-shadow: 0px 4px 10px 0px #244fbe1a;
}

.carousel__next {
  right: -25px;
}

.carousel__prev {
  display: none;
}

@media (min-width: 767px) {
  .carousel__slide--active {
    padding-right: 12px;
  }
  .carousel__slide--next {
    padding-left: 12px;
  }
}
</style>
