<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>

  <div>测试页面是否生效</div>
</template>

<style lang="less"></style>
