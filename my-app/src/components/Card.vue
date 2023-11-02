<template>
    <div class="w-11/12 mx-auto bg-gray-800 h-fit my-5 rounded-md p-5">
      <h2 class="text-gray-200 font-bold">{{ titulo }}</h2>
      <h3 class="text-gray-200 my-3">{{ descricao }}</h3>
      <div class="w-full flex justify-between flex-wrap">
        <div class="flex gap-3 items-center">
          <div class="rounded-full w-4 h-4 bg-sky-500"></div>
          <h4 class="text-gray-300">{{ linguagem }}</h4>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      titulo: String,
      descricao: String,
      linguagem: String,
      link: String
    },
  };
  </script>
  