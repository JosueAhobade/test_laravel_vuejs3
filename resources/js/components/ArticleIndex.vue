

<template>
  <div class="flex flex-col min-h-screen">
    <!-- En-tête -->
    <header class="bg-gray-800 text-white py-4 px-6 space-y-6">
      <h1 class="text-2xl font-bold">Mon Super Site d'Articles</h1>
    </header>




    <!-- Contenu principal (tableau) -->
    <main class="flex-grow p-6">
        <div class="flex mb-3 p-2">
            <router-link :to="{name: 'articles.create'}" class="bg-green-400 px-2 py-1 text-black rounded" style="background-color: green;">Ajouter un article</router-link>
        </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white divide-y divide-gray-200 shadow-md">
         <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titre</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contenu</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">État</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
          <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <template v-for="article in articles" :key="article.id">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ article.titre }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ article.contenu }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ article.categorie }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ article.etat ? 'Publié' : 'Non publié' }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><img :src="getImageUrl(article.image)" alt="Article Image" class="w-16 h-16 object-cover"></td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm flex">
                <div class="flex mb-3 p-2">
                    <router-link :to="{name: 'articles.edit', params: { id: article.id}}" class="bg-green-400 px-2 py-1 text-black rounded" style="background-color: blue;">Editer</router-link>
                </div>
                <div class="flex mb-3 p-2">
                    <button @click="deleteArticle(article.id)" class="rounded" style="background-color: red;">Supprimer</button>
                </div>


            </td>
          </tr>
        </template>
      </tbody>
        </table>
      </div>
    </main>



    <!-- Pied de page -->
    <footer class="bg-gray-800 text-white py-4 px-6">
      <p class="text-sm">&copy; 2024 Mon Super Site</p>
    </footer>
  </div>
</template>

<script>
import { onMounted } from "vue";
import useArticles from "../services/articleservices.js";

export default {
  setup() {
    const { articles, getArticles, destroyArticle } = useArticles();

    const deleteArticle = async(id) => {
        await destroyArticle(id);
    };

    onMounted(getArticles);

    const getImageUrl = (imagePath) => {
      return `/storage/${imagePath}`;
    };

    return {
      articles,
      getImageUrl,
      deleteArticle
    };
  }
};
</script>

<style scoped>

</style>




