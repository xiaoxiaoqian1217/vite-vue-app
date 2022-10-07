import { RouteRecordRaw } from 'vue-router';
import { routes } from '@router';

export const useMenu = () => {
  // 模拟菜单生成，实际会根据后端接口生成菜单，自己可以根据需要看下是否根据后端接口过滤前端自己配置的卢有
  const asyncGetMenu = () => {
    // const menus = await new Promise((resolve) => {
    //   resolve(routes[0]?.children);
    // });
    return routes[0]?.children;
  };
  const modules = asyncGetMenu();
  const generateMenu = (menus: any[]) => {
    return menus?.map((menuItem) => {
      const curMenu: any = {
        path: menuItem.path,
        key: menuItem.name,
        name: menuItem.name,
        title: menuItem?.meta?.title,
        meta: menuItem?.meta,
        redirect: menuItem?.redirect,
      };

      if (menuItem.children) curMenu.children = generateMenu(menuItem.children);
      return curMenu;
    });
  };
  return [generateMenu(modules)];
};
