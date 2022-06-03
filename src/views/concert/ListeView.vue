<template>
  <div class="p-page">
    <h1 class="text-center font-abril-fatface text-5xl lg:text-6xl">Programmes</h1>
    <div class="my-10">
      <h2 class="jazznpop-h2">Les concerts disponibles</h2>
      <!--Une div par concert-->
      <div class="my-10">
        <concert-card
          concertNom="Jazzy Stage"
          concertDate="7 juillet 2022 et 8 juillet 2022 - 20h à 2h"
          concertLink="concert_view"
          class="bg-concert1 bg-center"
        ></concert-card>
      </div>
    </div>
  </div>
</template>

<script>
import ConcertCard from "../../components/big/concert/ConcertCard.vue";
export default {
  components: {
    ConcertCard,
  },
};
</script>

<style></style>
