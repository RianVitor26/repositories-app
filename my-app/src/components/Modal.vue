<template>
  <el-button className="text-gray-100 px-3 py-2 my-3 rounded-md bg-sky-600" text @click="dialogVisible = true">
    Criar novo
  </el-button>

  <el-dialog className="bg-gray-900 absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 w-11/12"
    v-model="dialogVisible" draggable>
    <form className="flex flex-col">
      <label for="title" className="pb-1 font-bold text-gray-100">Título</label>
      <input className="mb-3 p-2 bg-gray-800 rounded-md text-gray-100" type="text">
      <label for="description" className="pb-1 font-bold text-gray-100">Descrição</label>
      <textarea name="description" id="description" rows="5" cols="50"
        className="p-2 bg-gray-800 rounded-md text-gray-100"></textarea>
      <select className="my-5 p-2 bg-gray-800 rounded-md text-gray-100" name="languages" id="languages">
        <option v-for="language in languages" :key="language" :value="language">{{ language }}</option>
      </select>
      <label className="pb-1 font-bold text-gray-100" for="color">Cor</label>
      <div className="flex w-full items-center justify-around">
        <input className="p-2 bg-gray-800 rounded-md text-gray-100" type="color" v-model="selectedColor">
        <div :style="{ backgroundColor: selectedColor }" className="w-5 h-5 rounded-full"></div>
      </div>
    </form>
  </el-dialog>
</template>
  
<script lang="js" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
const selectedColor = ref('#000000')

const languages = ['TypeScript', 'JavaScript', 'Java', 'C#', 'C', 'C++', 'Python', 'Php', 'Go', 'Ruby']
</script>
