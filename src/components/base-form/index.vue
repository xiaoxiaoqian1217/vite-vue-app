<template>
  <a-form :model="formModel" :rules="rules">
    <slot name="formItems"></slot>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
  import { toRaw, toRefs } from 'vue';
  import { Form } from 'ant-design-vue';
  const props = defineProps<{
    formModel: Record<string, any>;
    rules: Record<string, any>; // TODO 这个可以详细一点
  }>();

  const emit = defineEmits<{
    (e: 'submit', params: any): void;
  }>();

  const { formModel, rules } = toRefs(props);

  const useForm = Form.useForm;

  const { resetFields, validate, validateInfos, initialModel } = useForm(formModel, rules, {
    onValidate: (...args) => console.log(...args),
    validateField: (...args) => {
      console.log(...args);
    },
  });
  const onSubmit = () => {
    validate()
      .then((values) => {
        emit('submit', toRaw(formModel.value));
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
</script>

<style scoped></style>
