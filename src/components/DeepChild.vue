<script setup>
import { inject, ref } from 'vue'

  const staticMessage = inject('static-msg', 'default message');

  // msg와 updateMsg를 구조 분해하여 가져옴
  const { msg, updateMsg } = inject('msg', { msg: ref('default msg'), updateMsg: () => {} });

  updateMsg("!");

  const count = inject('count');

  const appMsg = inject('app-message');

</script>

<template>
  <div class="card">
    <div class="card-header">DeepComponent</div>
    <div class="card-body">
      <p>{{staticMessage}}</p>
      <p>{{msg}}</p>
      <p>{{count}}</p>
      <p>{{appMsg}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
