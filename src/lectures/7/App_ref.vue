<template>
  <div>
   <p>{{message}}</p>
    <button v-on:click="addMessage"> add click</button>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

  // Object Type => reactive()
  // let message = reactive(
  //   {value :"Hello Vue !"}
  //   );

  // let message = reactive("Hello Vue !");

  // primitive Datatype => ref()
   let message = ref("Hello Vue !");

  const addMessage = () => {
//    message = message + "!";
    message.value = message.value + "!";
  }

  console.log("message:", message);
  console.log(typeof message);

</script>

<style lang="scss" scoped>

</style>
