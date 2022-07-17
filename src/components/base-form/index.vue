<template>
  <a-form :model="formModel">
    <slot name="formItems"></slot>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, toRaw, defineProp, toRefs } from 'vue';
import { Form } from 'ant-design-vue';
const props = defineProps<{
  formModel: Record<string, any>;
  rules: any[];
}>();
const { forModel, rules } = toRefs(props);
const useForm = Form.useForm;

const { resetFields, validate, validateInfos, initialModel } = useForm(
  forModel,
  rules,
  {
    onValidate: (...args) => console.log(...args),
  }
);
const onSubmit = () => {
  validate()
    .then(() => {
      console.log(toRaw(modelRef));
    })
    .catch((err) => {
      console.log('error', err);
    });
};
</script>

<style scoped></style>
