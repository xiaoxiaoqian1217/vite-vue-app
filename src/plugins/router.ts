import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';
import { routes } from '../router';

export const router = createRouter({
  history: createWebHistory('/admin'),
  routes: routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export async function setUpRouter(app: App) {
  app.use(router);
  await router.isReady();
}
