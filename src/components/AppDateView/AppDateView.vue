<template>
  <div
    class="relative flex-shrink-0 text-glover-orange-100 font-semibold rounded-md text-[10px] flex items-center justify-center bg-glover-orange-100 bg-opacity-[8%] p-2 w-max"
  >
    <span
      class="absolute inset-x-auto bottom-[26px] bg-white rounded-full w-3 h-3"
    ></span>
    <slot />

    <span
      class="absolute inset-x-auto top-[26px] bg-white rounded-full w-3 h-3"
    ></span>
  </div>
</template>
