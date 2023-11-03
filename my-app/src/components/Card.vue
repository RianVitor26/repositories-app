<template>
  <div class="w-11/12 mx-auto bg-gray-800 h-fit my-5 rounded-md p-5">
    <h2 class="text-gray-200 font-bold">{{ title }}</h2>
    <h3 class="text-gray-200 my-3">{{ description }}</h3>
    <div class="w-full flex justify-between">
      <div class="flex gap-3 items-center">
        <div class="w-5 h-5 rounded-full" v-bind:style="{ backgroundColor: color }"></div>
        <h4 class="text-gray-300">{{ language }}</h4>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 border-none rounded-md bg-sky-600 text-gray-100">Editar</button>
        <button className="p-2 border-none rounded-md bg-red-500 text-gray-100">Excluir</button>
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  props: {
    title: String,
    description: String,
    language: String,
    color: String
  },
};
</script>
  