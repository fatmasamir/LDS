import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

//Hompage
import JobOrdersLast from "../views/JobOrdersLast/Main.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/jop-order-list",
    name: "JobOrdersLast",
    component: JobOrdersLast,
    beforeEnter(to, from) {
      if (localStorage.getItem("lang") == "ar") {
        document.title = ``;
      } else {
        document.title = "JobOrdersLast page - LDS";
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
