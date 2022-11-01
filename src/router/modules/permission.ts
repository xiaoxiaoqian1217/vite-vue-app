export default [
  {
    path: 'permission',
    name: 'permission',
    meta: { title: '基于后台权限管理' },
    redirect: '/permission/page',
    // 注意：这里是二级路由
    children: [
      {
        path: 'page',
        name: 'permission-page',
        meta: { title: '页面权限' },
        component: () => import('@/views/permission-page/index.vue'),
      },
      {
        path: 'btn',
        name: 'permission-btn',
        meta: {
          title: '按钮权限',
        },
        component: () => import('@/views/permission-btn/index.vue'),
      },
    ],
  },
];
