<template>

  <div class="flex flex-col min-h-screen">
    <!-- En-tête -->
    <header class="bg-gray-800 text-white py-4 px-6 space-y-6">
      <h1 class="text-2xl font-bold">Mon Super Site d'Articles</h1>
    </header>

    <!-- Formulaire -->
    <main class="flex-grow p-6 bg-gray-100">
    <div v-if="errors !== ''">
            {{ errors }}
    </div>
      <form   class="space-y-6 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"  @submit.prevent="storeArticle" enctype="multipart/form-data" >
        <div>
          <label for="titre" class="block text-sm font-medium text-gray-700">Titre de l'article</label>
          <input type="text" id="titre" v-model="form.titre"  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required>
        </div>
        <div>
          <label for="contenu" class="block text-sm font-medium text-gray-700">Contenu de l'article</label>
          <textarea id="contenu" v-model="form.contenu" rows="4" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required></textarea>
        </div>
        <div>
          <label for="categorie" class="block text-sm font-medium text-gray-700">Catégorie de l'article</label>
          <input type="text" id="categorie" v-model="form.categorie"  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" required>
        </div>
        <div>
          <label for="image" class="block text-sm font-medium text-gray-700">Image d'illustration</label>
          <input type="file" id="image"  @change="handleFileUpload" class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none">
        </div>
        <div class="flex justify-end">
          <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" style="background-color: blue;">Ajouter l'article</button>
        </div>
      </form>
    </main>

    <!-- Pied de page -->
    <footer class="bg-gray-800 text-white py-4 px-6">
      <p class="text-sm">&copy; 2024 Mon Super Site</p>
    </footer>
  </div>
</template>

<script>
import { reactive } from "vue";
import useArticles from "../services/articleservices.js";

export default {
    setup(){
        const form  = reactive({
            titre: '',
            contenu: '',
            categorie: '',
            image: null
        });

        const handleFileUpload = (event) => {
            form.image = event.target.files[0];
        };

        const { createArticles, errors } = useArticles();

        const storeArticle = async() => {
           await createArticles({ ...form});

        };

        return{
            form,
            handleFileUpload,
            errors,
            storeArticle
        }
    }
}


</script>






