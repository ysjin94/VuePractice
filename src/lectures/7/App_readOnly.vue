<template>
  <div>

  </div>
</template>

<script setup>
import { reactive, readonly } from 'vue'

  const original = reactive({
    count:0,
  })
  original.count++;
  console.log(original.count);

//ERROR
//  copy.count++;
  const copy = readonly(original);
  console.log(copy.count);

</script>

<style lang="scss" scoped>

</style>
