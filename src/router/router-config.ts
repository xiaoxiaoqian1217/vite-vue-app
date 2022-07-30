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
        path: 'form',
        name: 'form',
        meta: { title: '表单' },
        redirect: '/form/baseFrom',
        // 注意：这里是二级路由
        children: [
          {
            path: 'baseFrom',
            name: 'base-form',
            meta: { title: '基础表单' },
            component: () => import('@views/base-form/index.vue'),
          },
          {
            path: 'baseFromDetail',
            name: 'base-form-detail',
            meta: {
              title: '基础表单111',
              currentActiveMenu: 'base-form', // 设置当前的高亮的菜单项
              hideMenu: true, // 配置此项是否需要在菜单中展
            },
            component: () => import('@views/base-form-detail/index.vue'),
          },
          {
            path: 'searchForm',
            name: 'search-form',
            meta: { title: '查询表单' }, // 设置当前的menu的selectkeys
            component: () => import('@views/search-form/index.vue'),
          },
        ],
      },
    ],
  },
  // 业务路由
];
