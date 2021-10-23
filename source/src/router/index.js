import { createWebHistory, createRouter } from "vue-router";
import Home from "../view/Home.vue";
import About from "../view/About.vue";

// Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
