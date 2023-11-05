<template>
  <div class="w-11/12 mx-auto bg-gray-800 h-fit my-5 rounded-md p-5 relative shadow-md">
    <div class="w-full h-2 absolute top-0 left-0 blur-sm" :style="{ backgroundColor: color }"></div> 
    <h2 class="text-gray-200 font-bold break-words">{{ title }}</h2>
    <h3 class="text-gray-200 my-3 break-words">{{ description }}</h3>
    <div class="w-full flex justify-center gap-3 flex-wrap sm:justify-between">
      <div class="flex gap-3 items-center">
        <div class="w-5 h-5 rounded-full blur-sm" :style="{ backgroundColor: color }"></div>
        <h4 class="text-gray-300">{{ language }}</h4>
      </div>
      <div class="flex items-center gap-3">
        <button class="p-2 border-none rounded-md bg-sky-600 text-gray-100">Editar</button>
        <button class="p-2 border-none rounded-md bg-red-500 text-gray-100" @click="deleteClick">Excluir</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    description: String,
    language: String,
    color: String,
  },
  methods: {
    deleteClick() {
      this.$emit('delete-repository', this.id);
    },
  },
};
</script>
