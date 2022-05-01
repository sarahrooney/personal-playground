import { createWebHistory, createRouter } from "vue-router";
import Home from "../view/Home.vue";
import About from "../view/About.vue";
import Work from "../view/Work.vue";
import Development from "../view/Development.vue";

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
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/development",
    name: "Development",
    component: Development,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
