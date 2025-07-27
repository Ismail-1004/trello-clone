import { createRouter, createWebHistory } from "vue-router";
import { BoardPage } from "@/pages/board";
import { LoginPage } from "@/pages/login";

import AuthLayout from "../layouts/AuthLayout.vue";
import MainLayout from "../layouts/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: AuthLayout,
      children: [
        {
          path: "",
          component: LoginPage,
        },
      ],
    },
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          component: BoardPage,
        },
      ],
    },
  ],
});

export default router;
