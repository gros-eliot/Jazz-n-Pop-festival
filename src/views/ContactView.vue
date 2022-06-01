<template>
  <div class="p-page">
    <h1 class="jazznpop-h1 text-center">Nous contacter</h1>
    <!-- Festival : map -->
    <div class="my-10 flex flex-col gap-5">
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
    <h2 class="jazznpop-h2">Contacter l’équipe du festival</h2>
    <div class="my-10 flex flex-col gap-5 lg:flex-row lg:justify-around">
      <div class="flex flex-col gap-0">
        <p class="jazznpop-text font-bold">Service après-vente (SAV)</p>
        <p class="jazznpop-text">Tel : <a href="tel:0300000000" class="underline dark:text-yellow-400">03 00 00 00 00</a></p>
        <p class="jazznpop-text">
          Mail : <a href="mailto:jazznpop.fest@adresse.mail" class="underline dark:text-yellow-400">jazznpop.fest@adresse.mail</a>
        </p>
      </div>
      <div class="flex flex-col gap-0">
        <p class="jazznpop-text font-bold">Équipe de communication</p>
        <p class="jazznpop-text">Pierre Timothé</p>
        <p class="jazznpop-text">Tel : <a href="tel:0300000000" class="underline dark:text-yellow-400">03 00 00 00 00</a></p>
        <p class="jazznpop-text">
          Mail : <a href="mailto:pierre.timothé@adresse.mail" class="underline dark:text-yellow-400">pierre.timothé@adresse.mail</a>
        </p>
      </div>
    </div>

    <!-- Festival : formulaire -->
    <div class="my-10 flex flex-col gap-5">
      <h2 class="jazznpop-h2">Écrivez-nous...</h2>
      <div class="flex flex-col gap-0">
        <p class="jazznpop-text lg:p-ordinateur">
          Utilisez ce formulaire pour demander un remboursement ou nous faire parvenir votre moindre question, remarque, ou commentaire à
          propos du Jazz’n’Pop Festival.
        </p>
        <form class="my-10 flex flex-col gap-5">
          <input type="text" class="jazznpop-input" placeholder="Nom*" required />
          <input type="text" class="jazznpop-input" placeholder="Prénom*" required />
          <input type="email" class="jazznpop-input" placeholder="Adresse e-mail*" required />
          <textarea class="jazznpop-input h-32 dark:bg-black dark:bg-opacity-50" placeholder="Message" />

          <div class="flex flex-row items-center gap-2">
            <input type="checkbox" id="checkboxRed1" required />
            <label for="checkboxRed1" aria-describedby="label" class="jazznpop-text"
              >J’accepte d’être possiblement recontacté par mail par l’équipe de communication du Jazz’n’Pop Festival.*</label
            >
          </div>

          <p class="jazznpop-text">(*obligatoire)</p>

          <text-bouton type="submit" :redVersion="true" contenuTextBouton="Envoyer" class="ml-auto mr-auto"></text-bouton>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMapCard from "../components/big/GoogleMapCard.vue";
import TextBouton from "../components/boutons/TextBouton.vue";
export default {
  components: { GoogleMapCard, TextBouton },
};
</script>

<style></style>
