<script setup>
  console.log(a);
  const a = 0;
</script>

<template>
  <Foo :count="count" @click="inc" />
</template>
