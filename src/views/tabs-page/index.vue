<template>
  <PageContainer :tabs="pageTabs" :activeKey="activeKey">
    <template v-for="item in pageTabs" :key="item.key" #[item.key]>
      <component :is="item.component"></component>
    </template>
  </PageContainer>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import PageContainer from '@/components/page-container/index.vue';
  import Tab1 from './tab1.vue';
  import Tab2 from './tab2.vue';
  import { getTabs } from './tabs';

  const pageTabs = getTabs({
    tab1Component: Tab1,
    tab2Component: Tab2,
  });
  const route = useRoute();
  const activeKey = ref<string>((route?.query?.activeTab || 'tab1') as string);
</script>

<style scoped lang="less"></style>
