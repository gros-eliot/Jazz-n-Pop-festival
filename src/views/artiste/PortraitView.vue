<template>
  <div class="p-page">
    <h1 class="jazznpop-h1 text-center">Melody Gardot</h1>
    <!--DIV contenant le hero de la personne + sa description-->
    <div class="flex max-w-full flex-col">
      <!--DIV contenant le hero de la personne-->
      <div class="mt-5 flex flex-col items-center justify-center gap-10 md:mt-10 md:flex-row lg:flex-row-reverse">
        <img src="../../assets/artistes/jazz/melody_gardot.jpg" alt="Melody Gardot" class="w-56" />
        <div class="flex flex-wrap gap-5 md:flex-col">
          <categorie-name :blackCategory="true" NameCategory="Internationale"></categorie-name>
          <categorie-name :redCategory="true" NameCategory="Jazz"></categorie-name>
          <categorie-name :orangeCategory="true" NameCategory="Soul"></categorie-name>
          <categorie-name :orangeCategory="true" NameCategory="Folk"></categorie-name>
        </div>
      </div>
      <!--DIV contenant  sa description-->
      <div class="mt-10">
        <h2 class="jazznpop-h2">Description de l'artiste...</h2>
        <div class="my-6 flex flex-col gap-0">
          <p class="jazznpop-text font-bold">Site officiel</p>
          <a href="https://melodygardot.co.uk/" class="jazznpop-text underline">https://melodygardot.co.uk/</a>
        </div>
        <div class="my-6 flex flex-col gap-0">
          <p class="jazznpop-text font-bold">Généralités</p>
          <p class="jazznpop-text lg:p-ordinateur">
            Après la sortie de son nouvel album “Entre eux deux” avec Philippe Powell, nous avons le plaisir d’accueillir Melody Gardot au
            Jazz’n’Pop Festival. Avec l’orchestre présent sur place, cette auteure-compositrice-interprète interprètera ses plus grands
            titres!
          </p>
        </div>
      </div>
    </div>

    <div class="mt-10">
      <h2 class="jazznpop-h2">Dates de l'artiste</h2>
      <div class="mt-10 flex flex-col gap-1">
        <date-card datecardTitre="Jazzy Stage" datecardDate1="07/07/22" datecardDate2="08/07/22"></date-card>
        <date-card datecardTitre="Jazzy Stage" datecardDate1="10/07/22" datecardDate2="11/07/22"></date-card>
        <date-card datecardTitre="Jazz’n’pop special concert" datecardDate1="14/07/22" datecardDate2="15/07/22"></date-card>
      </div>
    </div>
  </div>
</template>

<script>
import DateCard from "../../components/big/DateCard.vue";
import CategorieName from "../../components/categories/CategorieName.vue";
export default {
  components: { CategorieName, DateCard },
};
</script>

<style></style>
