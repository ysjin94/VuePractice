<template>
  <div>
    <button @click="printEventInfo('Hello vue3 !' , $event)">
      Inline event handler
    </button>
    <hr/>
    <input type = "text" @keyup="onkeyup($event)">
  </div>
</template>

<script setup>
  const printEventInfo = (msg, event) =>{
    console.log("msg :" + msg);
    console.log("event.target :" + event.target);
  }

  const onkeyup = (event) =>{
    console.log("event.key :" + event.key);
  }
</script>

<style lang="scss" scoped>

</style>
