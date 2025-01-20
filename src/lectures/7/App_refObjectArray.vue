<template>
  <div>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
// Ref -> Object
const count = ref(0);
const state  = reactive({
  count,
})
count.value++;
count.value++;
console.log("state.count : " + state.count);

// Ref -> Array
const message = ref("Hello");
const arr   = reactive([message]);
console.log("arr[0] : " + arr[0].value);

</script>

<style lang="scss" scoped>

</style>
