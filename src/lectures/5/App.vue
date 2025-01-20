<script setup>
  import { ref } from 'vue'

  const counter = ref('0');
  const message = ref('Hello Vue !');

  const increment = () => {
    counter.value++;
  }

</script>

<template>
  <div>
    <p>{{ counter }}</p>
    <p>{{ message }}</p>
    <button @click="increment">{{ "click! "}}</button>
  </div>

</template>

<style scoped lang="scss">

</style>
