import { RouteRecordRaw } from 'vue-router';
export const generateMenu = async (menus: RouteRecordRaw[]) => {
  return menus.map((menuItem) => {
    const curMenu: any = {
      key: menuItem.name,
      name: menuItem.name,
      title: menuItem?.meta?.title,
    };
    if (menuItem.children) curMenu.children = generateMenu(menuItem.children);
    return curMenu;
  });
};
