import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/students",
      name: "students",
      component: () => import("../views/StudentView.vue"),
    },
  ],
});

export default router;
