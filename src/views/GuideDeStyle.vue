<template>
  <!--Couleurs -->

  <h1 class="font-abril-fatface bg-yellow-400 p-2 text-center text-xl text-black">Couleurs</h1>

  <div>
    <!--Couleurs principales-->
    <div class="my-5 flex flex-wrap justify-evenly">
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[10px_20px_30px_20px] bg-red-jazzNpop"></div>
        <p class="text-xs">Rouge JNP</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[10px_30px_20px_20px] bg-yellow-400"></div>
        <p class="text-xs">Yellow 400</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[10px_20px_20px_30px] bg-blue-400"></div>
        <p class="text-xs">Blue 400</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[30px_20px_10px_20px] bg-gray-900"></div>
        <p class="text-xs">Gray 900</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[40px_10px_30px_20px] border border-gray-900 bg-white"></div>
        <p class="text-xs">White</p>
      </div>
    </div>
    <!--DEGRADES : à utiliser ?-->
    <div class="my-5 flex flex-wrap justify-evenly">
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[40px_10px_30px_20px] border bg-gradient-to-b from-transparent to-black"></div>
        <p class="text-xs">Gradient 1</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="h-10 w-10 rounded-[40px_10px_30px_20px] border bg-gradient-to-r from-black via-[#770000] to-transparent"></div>
        <p class="text-xs">Gradient 2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
