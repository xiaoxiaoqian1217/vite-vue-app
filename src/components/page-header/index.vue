<template>
  <LayoutHeader class="page-header">
    <div class="page-header-left">
      <ArrowLeftOutlined v-if="props.showBack" class="page-header-back" @click="handleBack" />
      <h1 class="page-title">{{ pageInfo.title }}</h1>
      <Tooltip v-if="pageInfo.desc">
        <template #title>{{ pageInfo.desc }}</template>
        <InfoCircleOutlined class="page-desc-icon" />
      </Tooltip>
    </div>
    <div class="page-header-right">
      <!-- <WidgetFullscreen></WidgetFullscreen> -->
      <!-- <WidgetUser></WidgetUser> -->
    </div>
  </LayoutHeader>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { LayoutHeader, Tooltip } from 'ant-design-vue';
  import { ArrowLeftOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
  // import WidgetUser from './widget-user.vue';
  import WidgetFullscreen from './widget-fullscreen.vue';

  interface PropsType {
    title?: string; // 页面标题
    desc?: string; // 页面描述
    showBack?: boolean; // 是否显示返回
    backFn?: Function | null; // 自定义返回事件
  }

  const props = withDefaults(defineProps<PropsType>(), {
    title: '',
    desc: '',
    showBack: false,
    backFn: null,
  });

  const router = useRouter();

  const route = useRoute();

  // 页面信息
  const pageInfo = computed(() => {
    const { title = '', desc = '' } = route.meta || {};
    return {
      title: props.title || title,
      desc: props.desc || desc,
    };
  });

  // 返回
  function handleBack() {
    if (typeof props.backFn === 'function') {
      // 自定义返回
      props.backFn();
    } else {
      // 默认返回方法
      router.back();
    }
  }
</script>
<style lang="less" scoped>
  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 52px;
    line-height: 52px;
    padding: 0 20px;
    background-color: #fff;
    // box-shadow: 0 3px 4px 0 rgba(64, 112, 203, 0.06);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;

    .page-header-left {
      display: flex;
      align-items: center;

      .page-header-back {
        margin-right: 15px;
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
          opacity: 0.8;
          color: #1890ff;
        }
      }

      .page-title {
        font-size: 16px;
        margin: 0;
      }

      .page-desc-icon {
        margin-left: 5px;
      }
    }

    .page-header-right {
      height: 100%;
      display: flex;
      align-items: center;
      line-height: 100%;
    }

    :deep(.user-info) {
      margin-left: 20px;
    }
  }
</style>
