export default [
  {
    path: 'singlePage',
    name: 'singlePage',
    meta: { title: '单页面菜单' },
    component: () => import('@/views/single-page/index.vue'),
  },
];
