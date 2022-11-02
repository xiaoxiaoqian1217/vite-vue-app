import { RouteRecordRaw } from 'vue-router';
import basicRoutes from './modules';
import Layout from '@/layouts/basic-layout/index.vue';
export const routes: Array<RouteRecordRaw> = [
  //  基本布局路由
  {
    path: '/',
    name: 'root',
    meta: { title: '管理后台' },
    component: Layout,
    children: [...basicRoutes],
  },
  // 业务路由
];
