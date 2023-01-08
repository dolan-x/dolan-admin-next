import type { Router } from "vue-router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";

export const initNprogress = (router: Router) => {
  router.beforeEach((to, from) => {
    if (to.path !== from.path) { NProgress.start(); }
  });
  router.afterEach(() => {
    NProgress.done();
  });
};
