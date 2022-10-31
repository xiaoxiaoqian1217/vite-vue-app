<template>
  <div>
    <a-breadcrumb>
      <template v-for="route in routes" :key="route.meta?.name">
        <a-breadcrumb-item>
          <span v-if="!hasRedirectPath(routes, route)">
            {{ route.meta?.title }}
          </span>
          <router-link
            v-else
            to=""
            @click="
              handleClick(
                route,
                routes.map((item) => item.path),
                $event
              )
            "
          >
            {{ route.meta.title }}
          </router-link>
          <template #overlay v-if="route.children?.length">
            <a-menu>
              <template v-for="item in route.children" :key="item.meta?.name">
                <a-menu-item>
                  <router-link to="" @click="handleMenuItem(item.path, route.path)">
                    {{ item?.meta?.title }}
                  </router-link>
                </a-menu-item>
              </template>
            </a-menu>
          </template>
        </a-breadcrumb-item>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script setup lang="ts">
  import { ref, watchEffect, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import type { RouteLocationMatched } from 'vue-router';
  import { useGoPath, useMenu } from '@/hooks';
  import { isString, filter as treeFilter, getAllParentPathName } from '@/utils';
  import { REDIRECT_NAME } from '@/router/constant';

  const routes = ref<RouteLocationMatched[]>([]);
  const { currentRoute } = useRouter();
  const [menus] = useMenu();

  const go = useGoPath();
  watchEffect(async () => {
    if (currentRoute.value.name === REDIRECT_NAME) return;

    const routeMatched = currentRoute.value.matched;
    const cur = routeMatched?.[routeMatched.length - 1];
    let pathName = currentRoute.value.name;

    if (cur && cur?.meta?.currentActiveMenu) {
      pathName = cur.meta.currentActiveMenu as string;
    }
    const parent = getAllParentPathName(menus, pathName);
    // 根父级菜单
    const filterMenus = menus.filter((item) => item.key === parent[0]);
    const matched = getMatched(filterMenus, parent) as any;
    if (!matched || matched.length === 0) return;

    const breadcrumbList = filterItem(matched);
    // 若是子级详情页有设置路由当前的高亮菜单
    if (currentRoute.value.meta?.currentActiveMenu) {
      breadcrumbList.push({
        ...currentRoute.value,
        name: currentRoute.value.meta?.title || currentRoute.value.name,
      } as unknown as RouteLocationMatched);
    }

    routes.value = breadcrumbList;
  });

  function getMatched(menus: any[], parent: string[]) {
    const metched: any[] = [];
    menus.forEach((item) => {
      if (parent.includes(item.name)) {
        metched.push({
          ...item,
          name: item.meta?.title || item.name,
        });
      }
      if (item.children?.length) {
        metched.push(...getMatched(item.children, parent));
      }
    });
    return metched;
  }

  function filterItem(list: RouteLocationMatched[]) {
    return treeFilter(list, (item) => {
      const { meta, name } = item;
      if (!meta) {
        return !!name;
      }
      const { title, hideBreadcrumb, hideMenu } = meta;
      if (!title || hideBreadcrumb || hideMenu) {
        return false;
      }
      return true;
    }).filter((item) => !item.meta?.hideBreadcrumb);
  }
  // 判断是否需要重定项到当前点击面包屑的路由
  function hasRedirectPath(routes: RouteLocationMatched[], route: RouteLocationMatched) {
    return routes.indexOf(route) !== routes.length - 1;
  }

  function handleClick(route: RouteLocationMatched, paths: string[], e: Event) {
    e?.preventDefault();
    const { children, redirect, meta } = route;

    if (children?.length && !redirect) {
      e?.stopPropagation();
      return;
    }
    if (meta?.carryParam) {
      return;
    }

    if (redirect && isString(redirect)) {
      let goPath = '';
      goPath = /^\//.test(redirect) ? redirect : `/${goPath}`;
      console.log('%c [ goPath ]-149', 'font-size:13px; background:pink; color:#bf2c9f;', goPath);
      go(goPath);
    } else {
      // 这个是什么情况下会使用的
      let goPath = '';
      if (paths.length === 1) {
        goPath = paths[0];
      } else {
        const ps = paths.slice(1);
        const lastPath = ps.pop() || '';
        goPath = `${lastPath}`;
      }
      goPath = /^\//.test(goPath) ? goPath : `/${goPath}`;
      go(goPath);
    }
  }

  const handleMenuItem = (childPath: string, parentPath: string) => {
    const goPath = /^\//.test(childPath) ? childPath : `/${childPath}`;
    if (goPath) go('/' + parentPath + goPath);
  };
</script>

<style scoped lang="less"></style>
