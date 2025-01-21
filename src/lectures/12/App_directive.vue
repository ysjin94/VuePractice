<template>
  <div>
    <p>{{msg}}</p>
    <p v-text="msg"></p>
    <p v-text="htmlStr"></p>
    <p v-html="htmlStr"></p>
    <p>{{msg}} !!!!!</p>
    <p v-once>{{msg}} !!!!!</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const msg = ref("Hello !");
  const htmlStr= ref("<strong> Hi </strong>");
</script>

<style lang="scss" scoped>

</style>
