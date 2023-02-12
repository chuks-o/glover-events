<template>
  <div class="bg-white p-5 text-left rounded-10">
    <div class="grid grid-cols-1 gap-5">
      <div class="w-full bg-gray-100 animate-pulse h-40 rounded-lg">&nbsp;</div>
    </div>
    <div
      class="border-b border-gray-100 border-t flex justify-around my-5 py-5"
    >
      <div
        v-for="index in 5"
        class="w-52 bg-gray-100 animate-pulse"
        :key="index"
      >
        &nbsp;
      </div>
    </div>
  </div>
</template>
