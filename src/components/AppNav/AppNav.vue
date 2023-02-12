<script setup lang="ts">
import IconChevronDown from "../icons/IconChevronDown.vue";
</script>

<template>
  <nav class="flex md:my-20 my-7">
    <h1 class="text-[28px] font-bold text-glover-black">Events</h1>
    <div class="flex items-center ml-auto">
      <img
        src="@/assets/user.png"
        alt="User image"
        width="38px"
        height="38px"
        class="w-full"
      />
      <p class="text-[15px] text-black mx-4 font-bold">Bernice</p>
      <IconChevronDown />
    </div>
  </nav>
</template>
