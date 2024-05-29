import { createRouter, createWebHistory} from "vue-router";

import ArticleIndex from "../components/ArticleIndex.vue";
import ArticleCreate from "../components/ArticleCreate.vue";
import ArticleEdit from "../components/ArticleEdit.vue";

const routes = [
	{
		path: '/index',
		name: 'articles.index',
		component: ArticleIndex,
	},
    {
		path: '/article/create',
		name: 'articles.create',
		component: ArticleCreate,
	},
    {
		path: '/article/:id/edit',
		name: 'articles.edit',
		component: ArticleEdit,
        props: true,
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
