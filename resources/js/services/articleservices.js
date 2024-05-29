import {  ref } from "vue";

import axios from "axios";

import router from "../router/index.js";

export default function useArticles(){

    const errors = ref('');

    const articles = ref([]);

    const article = ref([]);

    const getArticles = async () => {
        let response = await axios.get('/api/articles');
        articles.value = response.data.data;

    };

    const getArticle = async (id) => {
        let response = await axios.get('/api/articles/'+ id);
        article.value = response.data.data;
    }

    const createArticles = async (data) => {
        try{
            await axios.post('/api/articles', data,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                  }
            });
            await router.push({name: 'articles.index'});
        }catch(error){
            const createArticlesErrors = error.response.data.errors;

            for(const key in  createArticlesErrors) {
                errors.value += createArticlesErrors[key][0] + ' ';
            }

        }

    };

    const updateArticle = async (id) => {
        try{
            await axios.put('/api/articles/'+ id, article.value);
            await router.push({name: 'articles.index'});
        }catch(error){


        }

    };

    const destroyArticle = async(id) =>{

        if(!window.confirm('Supprimer ce client ?')) return;
        await axios.delete('/api/articles/' + id);
        await getArticles();

    };

    return {
         articles,
         article,
         getArticles,
         getArticle,
         errors,
         createArticles,
         updateArticle,
         destroyArticle
    };
}
