import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import LoginView from "@/views/Users/Auth/LoginView";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
