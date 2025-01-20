<script setup>
import { isRef, onBeforeMount, onMounted, ref } from 'vue'

  console.log("setup");
  const reactiveMessage = ref("Hello Reactive Message");
  const addReactiveMessage = () => {
    reactiveMessage.value = reactiveMessage.value + "!";
  }
  console.log(isRef(reactiveMessage));

  let normalMessage = "Hello Normal Message.";
  const addNormalMessage = () => {
    normalMessage = normalMessage + "!";
  }
  console.log(isRef(normalMessage));

  onMounted(()=> {
    console.log("onMounted");
  });

  onBeforeMount(() => {
    console.log("onBeforeMount");
  });

</script>

<template>
  <div>
    <h2>Reactive Message</h2>
    <p>{{reactiveMessage}}</p>
    <button v-on:click="addReactiveMessage"> Add Message</button>
    <h2>Normal Message</h2>
    <p>{{normalMessage}}</p>
    <button v-on:click="addNormalMessage"> Add Message</button>
  </div>
</template>

<style scoped lang="scss">

</style>
