import type { Component } from 'vue';

interface Params {
  tab1Component: Component;
  tab2Component: Component;
}

export const getTabs = ({ tab1Component, tab2Component }: Params) => {
  return [
    {
      key: 'tab1',
      tab: 'tab1',
      desc: 'tab1des',
      component: tab1Component,
    },
    {
      key: 'tab2',
      tab: 'tab2',
      desc: 'tab2des',
      component: tab2Component,
    },
  ];
};
