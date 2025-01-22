<template>
  <div>
    <p>{{msg}}</p>
    <p>{{reverseMsg}}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

  const msg = ref("Hello Vue !");
  const reverseMsg = ref("");

  // watch(msg, (newValue) => {
  //  reverseMsg.value = newValue.split('').reverse().join('')
  // },
  //   {
  //     immediate: true,
  //   }
  // );

  const reverseFunc = () =>{
    console.log("immediate!");
    reverseMsg.value = msg.value.split('').reverse().join('');
  }

  // watch(msg, reverseFunc);
  // reverseFunc();

  watch(msg, reverseFunc, { immediate: true });
</script>

<style lang="scss" scoped>

</style>
