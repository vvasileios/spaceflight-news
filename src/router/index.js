import { createRouter, createWebHistory } from "vue-router";
import ArticlesHome from "../pages/ArticlesHome.vue";
import ArticleShow from "../pages/ArticleShow.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ArticlesHome,
  },
  {
    path: "/show/:id",
    name: "show",
    component: ArticleShow,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
