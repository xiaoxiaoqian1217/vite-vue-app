<template>
  <Tooltip :title="getTitle" placement="bottom">
    <span @click="toggle" class="widget-fullscreen">
      <FullscreenOutlined v-if="!isFullscreen" />
      <FullscreenExitOutlined v-else />
    </span>
  </Tooltip>
</template>
<script setup lang="ts">
  import { computed, unref } from 'vue';
  import { useFullscreen } from '@vueuse/core';
  import { Tooltip } from 'ant-design-vue';
  import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons-vue';

  const { toggle, isFullscreen } = useFullscreen();

  const getTitle = computed(() => {
    return unref(isFullscreen) ? '退出全屏' : '全屏';
  });
</script>
<style lang="less" scoped>
  .widget-fullscreen {
    cursor: pointer;
    color: #666;
    transition: all 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
</style>
