import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  //  基本布局路由
  {
    path: '/',
    name: 'root',
    meta: { title: '布局' },
    component: () => import('@layouts/basic-layout/index.vue'),
    children: [
      {
        path: '/form',
        name: 'form',
        meta: { title: '表单' },
        redirect: '/form/baseFrom',
        // 注意：这里是二级路由
        children: [
          {
            path: 'baseFrom',
            name: 'baseFrom',
            meta: { title: '基础表单' },
            component: () => import('@views/base-form/index.vue'),
          },
          {
            path: 'searchForm',
            name: 'searchForm',
            meta: { title: '查询表单' },
            component: () => import('@views/search-form/index.vue'),
          },
        ],
      },
    ],
  },
  // 业务路由
];
