<template>
  <el-button class="text-gray-100 px-3 py-2 my-3 rounded-md bg-sky-600 border-none hover:bg-sky-500 hover:text-gray-100"
    @click="dialogMode = 'create'; dialogVisible = true">
    Criar novo
  </el-button>

  <el-dialog class="bg-gray-900 p-5 md:w-3/6 w-11/12" v-model="dialogVisible" draggable>
    <form @submit.prevent="dialogMode === 'create' ? createRepo() : updateRepo()" class="flex flex-col">
      <label for="title" class="pb-1 font-bold text-gray-100">Título</label>
      <input v-if="dialogMode === 'create'" v-model="newTitle" minlength="1" maxlength="50"
        placeholder="Insira o título do repo" required class="mb-3 p-2 bg-gray-800 rounded-md text-gray-100" type="text">
      <input v-else v-model="editRepositoryDetails.title" minlength="1" maxlength="50"
        placeholder="Insira o título do repo" required class="mb-3 p-2 bg-gray-800 rounded-md text-gray-100" type="text">

      <label for="description" class="pb-1 font-bold text-gray-100">Descrição</label>
      <textarea v-if="dialogMode === 'create'" v-model="newDesc" minlength="1" maxlength="100"
        placeholder="Insira a descrição do repo" required name="description" id="description" rows="5" cols="50"
        class="p-2 bg-gray-800 rounded-md text-gray-100"></textarea>
      <textarea v-else v-model="editRepositoryDetails.description" minlength="1" maxlength="100"
        placeholder="Insira a descrição do repo" required name="description" id="description" rows="5" cols="50"
        class="p-2 bg-gray-800 rounded-md text-gray-100"></textarea>
      <label for="language" class="pb-1 pt-3 font-bold text-gray-100">Linguagem</label>
      <select v-if="dialogMode === 'create'" v-model="newLang" required class="p-2 bg-gray-800 rounded-md text-gray-100"
        name="languages" id="languages">
        <option v-for="language in languages" :key="language" :value="language">{{ language }}</option>
      </select>
      <select v-else v-model="editRepositoryDetails.language" required
        class="my-5 p-2 bg-gray-800 rounded-md text-gray-100" name="languages" id="languages">
        <option v-for="language in languages" :key="language" :value="language">{{ language }}</option>
      </select>

      <div class="flex w-full items-center justify-start gap-x-3 my-5">
        <label class="pb-1 font-bold text-gray-100" for="color">Cor</label>
        <input v-if="dialogMode === 'create'" v-model="newColor" required class="bg-gray-800 text-gray-100" type="color">
        <input v-else v-model="editRepositoryDetails.color" required class="p-2 bg-gray-800 rounded-md text-gray-100"
          type="color">
        <div :style="{ backgroundColor: dialogMode === 'create' ? newColor : editRepositoryDetails.color }"
          class="w-5 h-5 rounded-full"></div>
      </div>
      <button type="submit" class="bg-sky-600 p-2 rounded-md text-gray-100 w-full">{{ dialogMode === 'create' ?
        'Criar' : 'Atualizar' }}</button>
    </form>
  </el-dialog>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import db from '../model/database';

const emits = defineEmits(['addRepository', 'deleteRepository', 'editRepository']);
const dialogVisible = ref(false);
const dialogMode = ref('create');
const languages = ['TypeScript', 'JavaScript', 'Java', 'C#', 'C', 'C++', 'Python', 'Php', 'Go', 'Ruby'];
const newTitle = ref('');
const newDesc = ref('');
const newLang = ref('');
const newColor = ref('#000000');
const editRepositoryDetails = ref({});

const createRepo = () => {
  const newRepo = {
    title: newTitle.value,
    description: newDesc.value,
    language: newLang.value,
    color: newColor.value,
  };

  db.repositories.add(newRepo).then(() => {
    newTitle.value = '';
    newDesc.value = '';
    newLang.value = '';
    newColor.value = '#000000';
    dialogVisible.value = false;

    emits('addRepository', newRepo);
  }).catch((error) => {
    console.error('Erro ao adicionar repositório:', error);
  });
};

const updateRepo = () => {
  if (editRepositoryDetails.value && typeof editRepositoryDetails.value.id === 'number') {
    db.repositories.update(editRepositoryDetails.value.id, {
      title: editRepositoryDetails.value.title,
      description: editRepositoryDetails.value.description,
      language: editRepositoryDetails.value.language,
      color: editRepositoryDetails.value.color,
    }).then(() => {
      dialogVisible.value = false;
      emits('editRepository', editRepositoryDetails.value.id, { ...editRepositoryDetails.value });
    }).catch((error) => {
      console.error('Erro ao atualizar o repositório:', error);
    });
  }
};

function setDialogMode(mode) {
  dialogMode.value = mode
} 

function isModalOpen(value) {
  dialogVisible.value = value
}
</script> 
