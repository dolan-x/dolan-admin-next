import { createRouter, createWebHashHistory } from "vue-router";

import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

const routes = setupLayouts(generatedRoutes);

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const a = $(useStorage("dolan-admin-token", ""));

router.beforeEach((from, _to, next) => {
  if (from.path.startsWith("/dash") && !a) {
    next("/login");
  }
  next();
});
