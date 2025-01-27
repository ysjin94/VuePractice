<script setup>
  import Child from '@/components/Child.vue'
  import { inject, provide, readonly, ref } from 'vue'
  const staticMsg = 'static Msg'
  const msg = ref("message");
  const count = ref(10);

  // updateMsg를 provide 이전에 정의
  const updateMsg = ((appendMsg) =>{
    msg.value = msg.value + appendMsg;
  })

  provide('static-msg', staticMsg);
  provide('msg', {msg:readonly(msg), updateMsg});
  provide('count', count);

  const appMsg = inject('app-message');

</script>

<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">
        ProvideInject Component
      </div>
      <div class="card-body">
        <Child></Child>
        <button @click="count++">Click</button>
        <p>App Message : {{appMsg}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
