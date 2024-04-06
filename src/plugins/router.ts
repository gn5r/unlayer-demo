import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "~pages";

export const routes = setupLayouts(generatedRoutes);

const isProd = import.meta.env.PROD;

const router = createRouter({
  history: isProd
    ? createWebHashHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
