export default [
  {
    path: 'form',
    name: 'form',
    meta: { title: '页面' },
    redirect: '/form/baseFrom',
    // 注意：这里是二级路由
    children: [
      {
        path: 'baseFrom',
        name: 'base-form',
        meta: { title: '表单页' },
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
    ],
  },
];
