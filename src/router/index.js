import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/Home.vue";
import ShowView from "../pages/Show.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/show/:id",
    name: "show",
    component: ShowView,
    props: true, // This enables the route params to be passed as props to the component
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
