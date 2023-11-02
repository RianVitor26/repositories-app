<template>
    <div class="w-11/12 mx-auto bg-gray-800 h-52 my-5 rounded-md p-5">
      <h2 class="text-gray-200 font-bold">{{ titulo }}</h2>
      <h3 class="text-gray-200 mb-2">{{ descricao }}</h3>
      <div class="w-full flex justify-between">
        <div class="flex gap-3 items-center">
          <div class="rounded-full w-4 h-4 bg-sky-500"></div>
          <h4 class="text-gray-300">{{ linguagem }}</h4>
        </div>
        <a href={link}><button class="text-gray-100 bg-gray-700 py-2 px-4 rounded-md font-bold hover:bg-gray-600">Link</button></a>
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
  