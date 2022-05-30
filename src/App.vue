<template>
  <header class="p-3">
    <HeaderView class="fixed inset-x-0 top-0 z-[8] w-full"></HeaderView>
  </header>

  <main class="mt-[3.3rem] lg:mt-[5rem]">
    <RouterView />
  </main>

  <footer><FooterView class="bottom-0"></FooterView></footer>
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import HeaderView from "./components/layouts/HeaderView.vue";
import FooterView from "./components/layouts/FooterView.vue";
import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: { IconLogo, FilmIcon, HeaderView, FooterView },
};
</script>
