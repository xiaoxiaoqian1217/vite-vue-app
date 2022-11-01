import { RouteRecordRaw } from 'vue-router';
import { findPath } from './treeHelper';

export function getAllParentPathName(treeData: any[], name: any) {
  const menuList = findPath(treeData, (n) => n.name === name) as any[];
  return (menuList || []).map((item) => item.name);
}
