import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			component: () => import("../pages/Index.vue"),
		},
		{
			path: "/price/:id",
			component: () => import("../pages/Price.vue"),
		},
		{
			path: "/about",
			component: () => import("../pages/About.vue"),
		},
		{
			path: "/login",
			component: () => import("../pages/Login.vue"),
		},
	],
});

export default router;