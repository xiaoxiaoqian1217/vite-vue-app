<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo"></div>
      <Menu />
    </a-layout-sider>
    <a-layout class="content">
      <!-- <a-layout-header class="layout-header flex items-center">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        <BreadCrumb />
      </a-layout-header> -->
      <!-- <a-layout-content style="margin: 16px 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"> -->
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
      <!-- </div>
      </a-layout-content> -->
      <!-- <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  import Menu from './components/menu/index.vue';
  // import BreadCrumb from './components/bread-crumb/index.vue';

  const collapsed = ref(false);
</script>
<style lang="less">
  .content {
    min-height: calc(100vh);
  }
  .layout-header {
    background: #fff;

    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
      .trigger:hover {
        color: #1890ff;
      }
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
</style>
