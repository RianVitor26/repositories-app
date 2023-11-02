<template>
  <main class="w-full h-screen bg-gray-900">
    <div class="w-full h-full bg-gray-900 md:max-w-5xl mx-auto">
      <h1 class="text-gray-100 font-black text-xl pt-5 text-center">Seus repositórios</h1>
      <div class="w-full h-full">
        <div class="w-full flex justify-end px-5">
          <Modal />
        </div>
        <div className="w-full h-3/4 flex flex-col overflow-y-auto">
          <Card title="Título do repositório"
            description="Descrição do repositório: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, consequuntur!"
            language="Linguagem | framework"
            color="valor da cor" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Card from './components/Card.vue';
import Modal from './components/Modal.vue';

export default {
  components: {
    Card,
    Modal,
  },
};
</script>

<style scoped>
.overflow-y-auto::-webkit-scrollbar {
  width: 5px;
} 
.overflow-y-auto::-webkit-scrollbar-track {
  background: rgb(31 41 55);
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgb(2 132 199);
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgb(64, 180, 238);
}
</style>
