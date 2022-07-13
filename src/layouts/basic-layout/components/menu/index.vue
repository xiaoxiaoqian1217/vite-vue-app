<template>
  <a-menu
    v-model:openKeys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
    mode="inline"
    theme="dark"
    @select="handleSelect"
  >
    <template v-for="menu in menus" :key="menu.key">
      <a-sub-menu v-if="menu.children?.length" :key="menu.title">
        <template #title>{{ menu.title }}</template>
        <a-menu-item v-for="subMenu in menu.children" :key="subMenu.key">
          {{ subMenu.title }}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item v-else :key="menu.key">
        <span>{{ menu.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
import { routes } from '@router';
import { useMenu } from '@/hooks';
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});
const [menus] = useMenu(routes[0]?.children);
console.log(menus);
// 过滤根路由
// onMounted(async () => {});

watch(
  () => state.openKeys,
  (val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);
const router = useRouter();
const handleSelect = (e) => {
  router.push({
    name: e.key,
  });
};
</script>

<style scoped></style>
