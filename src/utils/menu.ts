import { RouteRecordRaw } from 'vue-router';
import { findPath } from './treeHelper';

export function getAllParentPathName(treeData: T[], name: string) {
  const menuList = findPath(treeData, (n) => n.name === name) as Menu[];
  return (menuList || []).map((item) => item.name);
}
