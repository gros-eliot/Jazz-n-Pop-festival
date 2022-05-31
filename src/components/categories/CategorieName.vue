<template>
  <div
    class="flex w-fit items-center justify-center rounded-full py-1 px-5 text-base"
    :class="{
      'bg-red-jazzNpop text-white': redCategory,
      'bg-yellow-400 text-black': orangeCategory,
      'bg-blue-400 text-black': blueCategory,
      'bg-gray-900 text-orange-400 dark:bg-white': blackCategory,
    }"
  >
    <p class="text-center">{{ NameCategory }}</p>
  </div>
</template>

<script>
export default {
  props: {
    NameCategory: {
      type: String,
      required: true,
    },
    redCategory: {
      type: Boolean,
      default: false,
    },
    orangeCategory: {
      type: Boolean,
      default: false,
    },
    blueCategory: {
      type: Boolean,
      default: false,
    },
    blackCategory: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
