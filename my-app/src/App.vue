<template>
  <main class="w-full h-screen bg-gray-900 relative">
    <div class="w-full h-full bg-gray-900 md:max-w-5xl mx-auto">
      <h1 class="text-gray-100 font-black text-xl pt-5 text-center">Seus repositórios</h1>
      <div class="w-full h-full">
        <div class="w-11/12 flex justify-end">
          <Modal @repoAdded="addRepo" />
        </div>
        <div class="w-full h-3/4 flex flex-col overflow-y-auto">
          <Card v-for="repository in repositories" :key="repository.id"
            :title="repository.title" :description="repository.description" :language="repository.language"
            :color="repository.color" />
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
    this.loadRepositories();
  },
  methods: {
    loadRepositories() {
      db.repositories.toArray().then((data) => {
        this.repositories = data;
      });
    },
    addRepo() {
      this.loadRepositories(); // Reload repositories after a new one is added
    },
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
