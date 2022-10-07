import { RouteRecordRaw } from 'vue-router';
import basicRoutes from './modules';
export const routes: Array<RouteRecordRaw> = [
  //  基本布局路由
  {
    path: '/',
    name: 'root',
    meta: { title: '管理后台' },
    component: () => import('@layouts/basic-layout/index.vue'),
    children: [...basicRoutes],
  },
  // 业务路由
];
