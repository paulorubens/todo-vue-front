import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/TaskList.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeResolve((to, from, next)
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

// router.afterEach((to, from)
router.afterEach(() => {
  NProgress.done();
});

export default router;