<template>
  <div
    class="flex w-fit items-center justify-center rounded-full py-1 px-5 text-base"
    :class="{
      'bg-red-jazzNpop text-white': NameCategory === 'Pop',
      'bg-yellow-500 text-black': NameCategory === 'Folk',
      'bg-yellow-300 text-black': NameCategory === 'Soul',
      'bg-yellow-400 text-black': NameCategory === 'Jazz',

      'bg-blue-400 text-black': NameCategory === 'Concert',
      'bg-gray-900 text-orange-500 dark:bg-white': NameCategory === 'Spécial',
      'bg-gray-900 text-orange-400 dark:bg-white': NameCategory === 'Internationale',
      'bg-blue-400 text-zinc-900 dark:bg-white': NameCategory === 'Intérieur',
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
      required: false,
    },
  },
};
</script>

<style></style>
