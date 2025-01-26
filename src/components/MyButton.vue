<script setup>
import { onMounted, useAttrs } from 'vue'

  defineOptions({
    inheritAttrs:false,
  })
  const attrs = useAttrs();
  // console.log(attrs);
  // attrs.onClick();
  onMounted(() => {
    // 안전하게 onClick 호출
    if (typeof attrs.onClick === 'function') {
      attrs.onClick();
    } else {
      console.warn('onClick handler is not defined or not a function.');
    }
  });

</script>

<template>
  <div class="p-3 bg-danger">
<!--    <button class="btn btn-primary" type="button"> My Button</button>-->
    <button v-bind="attrs"> My Button</button>
  </div>

</template>

<style scoped lang="scss">

</style>
