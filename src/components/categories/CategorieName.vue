<template>
  <div
    class="flex w-fit items-center justify-center rounded-full py-1 px-5 text-base"
    :class="{
      'bg-red-jazzNpop text-white': NameCategory === 'Pop',
      'bg-yellow-400 text-black': NameCategory === 'Jazz',
      'bg-blue-400 text-black': NameCategory === 'Concert',
      'bg-gray-900 text-orange-400 dark:bg-white': NameCategory === 'Spécial',
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
  },
};
</script>

<style></style>
