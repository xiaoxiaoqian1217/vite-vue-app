<template>
  <a-menu
    v-model:openKeys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
    mode="inline"
    theme="dark"
    @select="handleSelect"
  >
    <template v-for="menu in menus" :key="menu.key">
      <a-sub-menu v-if="menu.children?.length" :key="menu.key">
        <template #title>{{ menu.title }}</template>
        <template v-for="subMenu in menu.children" :key="subMenu.key">
          <a-menu-item v-if="!subMenu?.meta?.hideMenu" :key="subMenu.key">
            {{ subMenu.title }}
          </a-menu-item>
        </template>
      </a-sub-menu>
      <a-menu-item v-else :key="menu.key">
        <span>{{ menu.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script setup lang="ts">
import { reactive, watch, unref } from 'vue';
import { useRouter } from 'vue-router';
import { routes } from '@router';
import { useMenu } from '@hooks';
import { findPath, getAllParentPathName } from '@utils';

const state = reactive({
  collapsed: false,
  selectedKeys: [],
  openKeys: [],
  preOpenKeys: [],
});

// 过滤根路由
const [menus] = useMenu(routes[0]?.children);
const { currentRoute } = useRouter();

// onMounted(async () => {});

// 监听当前路由，设置选中的keys
watch(
  () => currentRoute,
  (val, oldVal) => {
    const unRefCurrentRoute = unref(val);
    const selectedKeys =
      unRefCurrentRoute?.meta?.currentActiveMenu || unRefCurrentRoute?.name;
    state.selectedKeys = [selectedKeys];
    state.openKeys = getAllParentPathName(menus, selectedKeys);
    console.log(getAllParentPathName(menus, selectedKeys));
  },
  { deep: true, immediate: true }
);

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
