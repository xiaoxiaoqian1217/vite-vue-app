<template>
  <BaseForm :formModel="formModel" @submit="onSubmit" :rules="rules">
    <template #formItems>
      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formModel.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>
      <a-form-item name="select" label="Select" has-feedback>
        <a-select
          v-model:value="formModel.select"
          placeholder="Please select a country"
        >
          <a-select-option value="china">China</a-select-option>
          <a-select-option value="usa">U.S.A</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item name="select-multiple" label="Select[multiple]">
        <a-select
          v-model:value="formModel['select-multiple']"
          mode="multiple"
          placeholder="Please select favourite colors"
        >
          <a-select-option value="red">Red</a-select-option>
          <a-select-option value="green">Green</a-select-option>
          <a-select-option value="blue">Blue</a-select-option>
        </a-select>
      </a-form-item>
    </template>
  </BaseForm>
</template>

<script setup lang="ts">
import BaseForm from '@components/base-form/index.vue';
import { reactive } from 'vue';
const rules = [
  { required: true, message: 'Please select your remoerber!' },
  { required: true, message: 'Please select your country!' },
  {
    required: true,
    message: 'Please select your favourite colors!',
    type: 'array',
  },
];
const formModel = reactive({
  username: 0,
  remember: true,
  select: [],
  'select-multiple': [],
});

const onSubmit = (valus) => {};
</script>

<style scoped lang="less"></style>
