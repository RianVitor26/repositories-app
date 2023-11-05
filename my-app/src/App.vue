<template>
  <main class="w-full h-screen bg-gray-900 relative">
    <div class="w-full h-full bg-gray-900 md:max-w-5xl mx-auto">
      <h1 class="text-gray-100 font-black text-xl pt-5 text-center">Seus repositórios</h1>
      <div class="w-full h-full">
        <div class="w-11/12 flex justify-end">
          <Modal @addRepository="addRepository" ref="modal" />
        </div>
        <div class="w-full h-3/4 flex flex-col overflow-y-auto">
          <Card v-for="repository in repositories" :key="repository.id"
            :id="repository.id" :title="repository.title" :description="repository.description"
            :language="repository.language" :color="repository.color"
            @delete-repository="deleteRepository" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Card from './components/Card.vue';
import Modal from './components/Modal.vue';
import db from './model/database';

export default {
  components: {
    Card,
    Modal,
  },
  data() {
    return {
      repositories: [],
    };
  },
  created() {
    db.repositories.toArray().then((data) => {
      this.repositories = data;
    });
  },
  methods: {
    addRepository(novoRepositorio) {
      this.repositories.push(novoRepositorio);
    },
    deleteRepository(id) {
      const index = this.repositories.findIndex((repo) => repo.id === id);

      if (index !== -1) {
        this.repositories.splice(index, 1);
        db.repositories.delete(id);
      }
    },
  },
};
</script>
