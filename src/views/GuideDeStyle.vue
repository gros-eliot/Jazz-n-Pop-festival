<template>
  <!--Couleurs -->

  <h1 class="bg-yellow-400 p-2 text-center font-abril-fatface text-xl text-black">Couleurs</h1>

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

  <!--Typographies-->

  <h1 class="bg-yellow-400 p-2 text-center font-abril-fatface text-xl text-black">Typographies (responsives)</h1>

  <div class="my-5 flex flex-col">
    <div>
      <!--GENERALES-->
      <h1 class="font-abril-fatface text-6xl lg:text-7xl">H1 | Jazz</h1>
      <p class="text-xs">Abril Fatface, regular</p>
      <h2 class="text-3xl font-bold md:text-4xl lg:text-5xl">H2 | Jazz'n'pop</h2>
      <p class="text-xs">Raleway, bold</p>
      <p class="text-base md:text-lg lg:text-xl">Text | Jazz'n'pop festival</p>
      <p class="text-xs">Raleway, regular</p>
      <!--BOUTONS-->
      <hr class="mx-20 my-3 border-black" />
      <p class="text-2xl font-bold">Texte des boutons</p>
      <p class="text-xs">Raleway, bold</p>
      <!--CARDS-->
      <hr class="mx-20 my-3 border-black" />
      <h3 class="text-3xl font-bold">Titre des cards</h3>
      <p class="text-xs">Raleway, bold</p>
      <p class="text-2xl font-light">Texte des cards</p>
      <p class="text-xs">Raleway, light</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
