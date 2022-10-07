<template>
  <!-- <BaseForm :formModel="formModel" :rules="rules" @submit="onSubmit">
    <template #formItems>
      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formModel.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>
      <a-form-item name="select" label="Select">
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
  </BaseForm> -->
  <a-form :model="formModel" :rules="rules">
    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }" v-bind="validateInfos.remember">
      <a-checkbox v-model:checked="formModel.remember">Remember me</a-checkbox>
    </a-form-item>
    <a-form-item name="select" label="Select" v-bind="validateInfos.select">
      <a-select v-model:value="formModel.select" placeholder="Please select a country">
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
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
    </a-form-item>
  </a-form>
  <div @click="toDetail">进入子级详情页</div>
</template>

<script setup lang="ts">
  // import BaseForm from '@components/base-form/index.vue';
  import { reactive } from 'vue';
  import { Form } from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  const rules = reactive({
    remember: [{ required: true, message: 'Please select your remoerber!' }],
    select: [{ required: true, message: 'Please select your country!' }],
    'select-multiple': [
      {
        required: true,
        message: 'Please select your favourite colors!',
        type: 'array',
        trigger: 'blur',
      },
    ],
  });
  const formModel = reactive({
    username: 0,
    remember: false,
    select: undefined,
    'select-multiple': undefined,
  });
  const useForm = Form.useForm;

  const { resetFields, validate, validateInfos, initialModel } = useForm(formModel, rules, {
    onValidate: (...args) => console.log(...args),
    validateField: (...args) => {
      console.log(111, ...args);
    },
  });
  const onSubmit = () => {
    validate()
      .then((values) => {
        // emit('submit', toRaw(formModel.value));
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
  const router = useRouter();
  const toDetail = () => {
    router.push({
      name: 'base-form-detail',
    });
  };
</script>

<style scoped lang="less"></style>
