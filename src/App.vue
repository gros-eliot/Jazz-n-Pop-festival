<template>
  <header class="p-3">
    <HeaderView class="fixed inset-x-0 top-0 z-[8] w-full"></HeaderView>
  </header>

  <main class="mt-[3.3rem] lg:mt-[3.2rem]">
    <RouterView />
  </main>

  <footer><FooterView class="bottom-0"></FooterView></footer>
</template>

<script>
import HeaderView from "./components/layouts/HeaderView.vue";
import FooterView from "./components/layouts/FooterView.vue";
export default {
  components: { HeaderView, FooterView },
};
</script>
