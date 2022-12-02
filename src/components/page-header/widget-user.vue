<template>
  <Popover trigger="click" placement="bottomRight">
    <template #content>
      <p class="role-name" v-if="privilegeUserInfo.roleName">{{ privilegeUserInfo.roleName }}</p>
      <p class="user-operation" @click="handleSwitchRole" v-if="roleList?.length">切换角色</p>
      <p class="user-operation" @click="handleLogout">退出</p>
    </template>
    <div class="user-info">
      <Avatar class="avatar" :src="privilegeUserInfo.avatarUrl" />
      <span class="name">{{ privilegeUserInfo.userName }}</span>
      <CaretDownOutlined class="arrow" />
    </div>
  </Popover>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { Avatar, Popover } from 'ant-design-vue';
  import { CaretDownOutlined } from '@ant-design/icons-vue';
  // import { useUserInfoStore } from '@shared/store';
  // import { useLogout } from '@shared/hooks';

  const router = useRouter();

  // 用户信息
  // const userInfoStore = useUserInfoStore();
  const userInfoStore = {
    userInfo: {
      avatarUrl: '',
      userName: 'xxq',
      roleName: 'roleName',
    },
    userRoleList: [],
  };

  const privilegeUserInfo = userInfoStore.userInfo;
  const roleList = userInfoStore.userRoleList;

  // 切换角色
  function handleSwitchRole() {
    router.push('/passport/role-select');
  }

  // 退出
  // const { handleLogout } = useLogout();
  const handleLogout = () => {
    console.log('%c [ logout ]: ', 'color: #bf2c9f; background: pink; font-size: 13px;', 'logout');
  };
</script>
<style lang="less" scoped>
  .user-info {
    cursor: pointer;
    transition: all 0.3s;

    .name {
      margin-left: 5px;
    }

    .arrow {
      color: #666;
      margin-left: 5px;
    }

    &:hover {
      opacity: 0.8;
      color: #1890ff;

      .arrow {
        opacity: 0.8;
        color: #1890ff;
      }
    }
  }

  .role-name {
    color: #999;
    font-size: 12px;
  }

  .user-operation {
    margin: 0;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      color: #1890ff;
    }

    & + .user-operation {
      margin-top: 10px;
    }
  }
</style>
