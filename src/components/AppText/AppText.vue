<template>
  <component :class="textClass" :is="props.is">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";

type TextFormats = "h1" | "h2" | "h3" | "p";
const props = withDefaults(
  defineProps<{
    is: TextFormats;
  }>(),
  {
    is: "p",
  }
);

const textClass = computed(() => {
  switch (props.is) {
    case "h1":
      return "font-semibold text-base text-glover-black";

    case "h2":
      return "font-semibold text-base text-glover-black";

    default:
      return "text-glover-black";
  }
});
</script>
