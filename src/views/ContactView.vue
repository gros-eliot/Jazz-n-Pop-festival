<template>
  <div class="p-page">
    <h1 class="jazznpop-h1 text-center">Nous contacter</h1>
    <!-- Festival : map -->
    <div class="my-5 flex flex-col gap-5">
      <h2 class="jazznpop-h2">Où pouvons-nous trouver le festival ?</h2>
      <p class="jazznpop-text lg:p-ordinateur">
        Le festival se trouve à la Place d’Armes, dans la ville de Belfort (90000). Proche de différentes frontières (Suisse, Allemagne...),
        le festival peut accueillir un grand nombre de visiteurs.
      </p>
      <google-map-card
        mapcardTitle="Place d’Armes,
Belfort (90)"
      ></google-map-card>
    </div>

    <!-- Festival : Contacter (coordonnées) -->
    <div class="my-5 flex flex-col gap-5">
      <h2 class="jazznpop-h2">Contacter l’équipe du festival</h2>
      <div class="flex flex-col gap-0">
        <p class="jazznpop-text font-bold lg:p-ordinateur">Service après-vente (SAV)</p>
        <p class="jazznpop-text lg:p-ordinateur">Tel : <a href="tel:0300000000">03 00 00 00 00</a></p>
        <p class="jazznpop-text lg:p-ordinateur">
          Mail : <a href="mailto:jazznpop.fest@adresse.mail" class="underline">jazznpop.fest@adresse.mail</a>
        </p>
      </div>
      <div class="flex flex-col gap-0">
        <p class="jazznpop-text font-bold lg:p-ordinateur">Équipe de communication</p>
        <p class="jazznpop-text lg:p-ordinateur">Pierre Timothé</p>
        <p class="jazznpop-text lg:p-ordinateur">Tel : <a href="tel:0300000000">03 00 00 00 00</a></p>
        <p class="jazznpop-text lg:p-ordinateur">
          Mail : <a href="mailto:pierre.timothé@adresse.mail" class="underline">pierre.timothé@adresse.mail</a>
        </p>
      </div>
    </div>

    <!-- Festival : formulaire -->
    <div class="my-5 flex flex-col gap-5">
      <h2 class="jazznpop-h2">Écrivez-nous...</h2>
      <div class="flex flex-col gap-0">
        <p class="jazznpop-text lg:p-ordinateur">
          Utilisez ce formulaire pour demander un remboursement ou nous faire parvenir votre moindre question, remarque, ou commentaire à
          propos du Jazz’n’Pop Festival.
        </p>
        <form>
          <input type="text" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMapCard from "../components/big/GoogleMapCard.vue";
export default {
  components: { GoogleMapCard },
};
</script>

<style></style>
