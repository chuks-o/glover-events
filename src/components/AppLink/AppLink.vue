<template>
  <a
    :href="href"
    target="_blank"
    class="flex items-center justify-center font-semibold text-base border-1.3 text-glover-purple border-glover-purple rounded-lg px-5 py-2.5 w-max cursor-pointer mb-2 mt-5"
  >
    <slot />
  </a>
</template>

<script lang="ts" setup>
defineProps<{
  href?: string;
}>();
</script>
