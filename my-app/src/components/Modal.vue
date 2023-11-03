<template>
  <el-button class="text-gray-100 px-3 py-2 my-3 rounded-md bg-sky-600 border-none hover:bg-sky-500 hover:text-gray-100" @click="dialogVisible = true">
    Criar novo
  </el-button>

  <el-dialog class="bg-gray-900 absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 md:w-3/6 w-11/12"
    v-model="dialogVisible" draggable>
    <form @submit.prevent="createRepo" class="flex flex-col">
      <label for="title" class="pb-1 fon t-bold text-gray-100">Título</label>
      <input v-model="newTitle" minlength="1" maxlength="50" placeholder="Insira o título do repo" required
        class="mb-3 p-2 bg-gray-800 rounded-md text-gray-100" type="text">
      <label for="description" class="pb-1 font-bold text-gray-100">Descrição</label>
      <textarea v-model="newDesc" minlength="1" maxlength="100" placeholder="Insira a descrição do repo" required
        name="description" id="description" rows="5" cols="50"
        class="p-2 bg-gray-800 rounded-md text-gray-100"></textarea>
      <select v-model="newLang" required class="my-5 p-2 bg-gray-800 rounded-md text-gray-100" name="languages"
        id="languages">
        <option v-for="language in languages" :key="language" :value="language">{{ language }}</option>
      </select>
      <label class="pb-1 font-bold text-gray-100" for="color">Cor</label>
      <div class="flex w-full items-center justify-around">
        <input v-model="newColor" required class="p-2 bg-gray-800 rounded-md text-gray-100" type="color">
        <div :style="{ backgroundColor: newColor }" class="w-5 h-5 rounded-full"></div>
      </div>
      <button type="submit" class="mt-3 bg-sky-600 p-2 rounded-md text-gray-100 w-full">Criar</button>
    </form>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
import db from '../model/database';

const dialogVisible = ref(false);
const newColor = ref('#000000');
const languages = ['TypeScript', 'JavaScript', 'Java', 'C#', 'C', 'C++', 'Python', 'Php', 'Go', 'Ruby'];

const newTitle = ref('');
const newDesc = ref('');
const newLang = ref('');

const createRepo = () => {
  const novoRepositorio = {
    title: newTitle.value,
    description: newDesc.value,
    language: newLang.value,
    color: newColor.value,
  };

  db.repositories.add(novoRepositorio).then(() => {
    newTitle.value = '';
    newDesc.value = '';
    newLang.value = '';
    newColor.value = '#000000';
    dialogVisible.value = false;
  }).catch((error) => {
    console.error('Erro ao adicionar repositório:', error);
  });
}
</script>
