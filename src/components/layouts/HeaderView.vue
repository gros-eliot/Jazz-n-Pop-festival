<template>
  <!--HEADER-->
  <div class="bg-red-jazzNpop p-3 lg:p-1">
    <div class="flex justify-between">
      <!--Logo du site (header)-->
      <div class="lg:mx-5">
        <RouterLink to="/">
          <div class="lg:hidden">
            <LogoSmall class="fill-white" />
          </div>
          <div class="hidden lg:block">
            <LogoMediumMonochrome class="h-24 w-24 fill-white" />
          </div>
        </RouterLink>
      </div>

      <!--Menu du site => quand écran=lg, pas un menu mais liens directements-->

      <!--MENU AVEC BOUTON ALT3-->
      <div class="flex justify-center lg:hidden">
        <button class="relative text-xl" aria-controls="menu" :aria-expanded="menuOuvert" id="btnMenu" @click="menuOuvert = !menuOuvert">
          <MenuAlt3Icon class="h-10 w-10 stroke-white" />
          <span class="sr-only">Menu</span>
        </button>

        <div
          id="menu"
          aria-labelledby="btnMenu"
          class="fixed inset-0 z-[11] h-full translate-x-full bg-black fill-yellow-400 text-yellow-400 motion-safe:transition-transform motion-safe:duration-1000"
          :class="{ 'translate-x-[5rem]': menuOuvert }"
        >
          <!--CONTAINER CROIX + LOGO DE L'APP-->

          <div class="mr-[5rem] flex flex-col">
            <div class="flex items-center justify-between p-3">
              <LogoSmall class="h-10 w-10 fill-yellow-400" />

              <button class="relative z-[12] text-xl" aria-controls="menu" :aria-expanded="menuOuvert" @click="menuOuvert = !menuOuvert">
                <XIcon class="h-10 w-10 stroke-yellow-400" />
                <span class="sr-only">Fermer le menu</span>
              </button>
            </div>

            <!--CONTAINER LISTE DES PAGES-->

            <nav class="flex justify-center">
              <ul class="relative z-40 flex flex-col gap-10 p-10 text-2xl lg:flex-row lg:gap-8">
                <li @click="menuOuvert = !menuOuvert">
                  <RouterLink to="/" class="flex flex-row items-center gap-3">
                    Programmes <ClockIcon class="h-8 w-8" /> <span class="sr-only">Icône horloge</span>
                  </RouterLink>
                </li>

                <li @click="menuOuvert = !menuOuvert">
                  <RouterLink to="/" class="flex flex-row items-center gap-3">
                    Artistes <UsersIcon class="h-8 w-8" /> <span class="sr-only">Icône utilisateurs</span>
                  </RouterLink>
                </li>

                <li @click="menuOuvert = !menuOuvert">
                  <RouterLink to="/" class="flex flex-row items-center gap-3">
                    Festival <PartyIcon class="h-8 w-8 fill-yellow-400" /> <span class="sr-only">Icône fêtes</span>
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <!--LISTE DES LIENS (sans bouton)-->
      <nav class="mx-5 hidden flex-row gap-5 fill-white text-white lg:flex">
        <RouterLink to="/" class="flex flex-row items-center justify-center gap-1"> <ClockIcon class="h-8 w-8" />Programmes </RouterLink>

        <RouterLink to="/" class="flex flex-row items-center justify-center gap-1"> <UsersIcon class="h-8 w-8" />Artistes </RouterLink>

        <RouterLink to="/" class="flex flex-row items-center justify-center gap-1">
          <PartyIcon class="h-8 w-8 fill-white" />Festival
        </RouterLink>
      </nav>
    </div>
  </div>

  <!--HEADER-->
</template>

<script>
import { MenuAlt3Icon, ClockIcon } from "@heroicons/vue/outline";
import { XIcon, UsersIcon } from "@heroicons/vue/outline";
import PartyIcon from "../icons/PartyIcon.vue";

import LogoBigMonochrome from "../icons/JazzNPop_logos/big/Monochrome.vue";
import LogoBigBichrome from "../icons/JazzNPop_logos/big/Bichrome.vue";

import LogoMediumMonochrome from "../icons/JazzNPop_logos/medium/Monochrome.vue";
import LogoMediumBichrome from "../icons/JazzNPop_logos/medium/Bichrome.vue";

import LogoSmall from "../icons/JazzNPop_logos/small/Monochrome.vue";

export default {
  data() {
    return {
      menuOuvert: false,
    };
  },
  components: {
    MenuAlt3Icon,
    XIcon,
    ClockIcon,
    UsersIcon,
    PartyIcon,
    LogoBigMonochrome,
    LogoBigBichrome,
    LogoMediumMonochrome,
    LogoMediumBichrome,
    LogoSmall,
  },
};
</script>

<style></style>
