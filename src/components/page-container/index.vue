<template>
  <section class="page-container">
    <PageHeader
      :title="props.title"
      :desc="props.desc"
      :show-back="props.showBack"
      :back-fn="props.backFn"
    ></PageHeader>
    <section v-if="props.tabs?.length" class="page-tabs">
      <div class="page-content">
        <Tabs
          v-model:activeKey="currentActiveKey"
          :destroy-inactive-tab-pane="props.destroyInactiveTabPane"
          class="page-content-tabs"
          @change="handleChangeTab"
        >
          <TabPane v-for="tabItem in props.tabs" :key="tabItem.key" class="page-content-tab-pane">
            <template #tab>
              <span>{{ tabItem.tab }}</span>
              <span v-if="tabItem.desc">
                <Tooltip>
                  <template #title>{{ tabItem.desc }}</template>
                  <InfoCircleOutlined class="page-content-tab-icon" />
                </Tooltip>
              </span>
            </template>
            <slot :name="tabItem.key"></slot>
          </TabPane>
        </Tabs>
      </div>
    </section>
    <section v-else class="page-default">
      <div class="page-content">
        <slot></slot>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Tabs, TabPane, Tooltip } from 'ant-design-vue';
  import { InfoCircleOutlined } from '@ant-design/icons-vue';
  import PageHeader from '../page-header/index.vue';
  interface PropsType {
    title?: string; // 页面标题
    desc?: string; // 页面描述
    showBack?: boolean; // 是否显示返回
    backFn?: Function | null; // 自定义返回事件
    // 页面 tabs
    tabs?: Array<{
      key: string;
      tab: string;
      desc?: string;
    }>;
    activeKey?: string; // 当前激活的 tabKey
    destroyInactiveTabPane?: boolean; // 被隐藏时是否销毁 DOM 结构
  }

  const props = withDefaults(defineProps<PropsType>(), {
    title: '',
    desc: '',
    showBack: false,
    backFn: null,
    tabs: () => [],
    activeKey: '0',
    destroyInactiveTabPane: false,
  });

  const emit = defineEmits<{
    (e: 'change', data: string): void;
  }>();

  // 当前激活的 tabKey
  const currentActiveKey = ref(props.activeKey);

  // 切换 tab
  const handleChangeTab = (activeKey: any) => {
    emit('change', activeKey);
  };
</script>

<style scoped lang="less">
  .page-container {
    height: 100vh;
    padding-top: 52px;
    position: relative;
    overflow: hidden;

    .page-default {
      height: 100%;
      overflow: hidden;
      padding-top: 15px;

      .page-content {
        height: 100%;
        padding: 0 15px 15px 15px;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }

    .page-tabs {
      height: 100%;
      overflow: hidden;

      .page-content {
        height: 100%;
        padding-top: 40px;
        overflow: hidden;
        position: relative;

        :deep(.page-content-tabs) {
          height: 100%;
          overflow: hidden;

          & > .ant-tabs-nav {
            width: 100%;
            height: 40px;
            background-color: #fff;
            padding: 0 20px;
            margin-bottom: 0;
            position: absolute;
            left: 0;
            top: 0;
          }

          & > .ant-tabs-content-holder {
            height: 100%;
            overflow: hidden;

            & > .ant-tabs-content {
              height: 100%;
              overflow: hidden;
              padding-top: 15px;
            }
          }
        }

        .page-content-tab-pane {
          height: 100%;
          overflow-x: hidden;
          overflow-y: auto;
          padding: 0 15px 15px 15px;
        }

        .page-content-tab-icon {
          margin-left: 5px;
        }
      }
    }
  }
</style>
