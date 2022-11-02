<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <div>测试页面是否生效</div>
</template>
<script setup lang="ts"></script>
<style lang="less"></style>
