<template>
    <main class="w-full h-screen bg-gray-900">
      <h1 class="text-gray-100 font-black text-xl pt-5 text-center">Seus repositórios</h1>
      <div class="w-full h-full">
        <div class="w-full flex justify-end px-5">
          <button class="text-gray-100 bg-sky-700 py-3 px-5 rounded-md my-5 font-bold hover:bg-sky-600">Criar novo</button>
        </div>
        <Card titulo="Título do repositório" descricao="Descrição do repositório: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, consequuntur!" linguagem="Linguagem | framework" />
      </div>
    </main>
  </template>
  
  <script>
  import Card from './components/Card.vue';
  
  export default {
    components: {
      Card,
    },
  };
  </script>
  