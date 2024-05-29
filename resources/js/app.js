import './bootstrap.js';

import Alpine from 'alpinejs';

import { createApp } from "vue";
import router from  './router/index.js';
import  ArticleIndex from "./components/ArticleIndex.vue";




createApp({
	components:{
		ArticleIndex
	}
})
.use(router)
.mount('#app');

