import { RouteRecordRaw } from 'vue-router';
export const useMenu = (modules: any) => {
  const generateMenu = (menus: RouteRecordRaw[]) => {
    return menus.map((menuItem) => {
      const curMenu: any = {
        key: menuItem.name,
        name: menuItem.name,
        title: menuItem?.meta?.title,
        meta: menuItem?.meta,
      };
      if (menuItem.children) curMenu.children = generateMenu(menuItem.children);
      return curMenu;
    });
  };
  return [generateMenu(modules)];
};
