<script setup>
  import { reactive } from 'vue'

  const state = reactive({
    count:0,
    deep : {
      count:0,
    }
  })
  const increaseCount = () =>{
    state.count++;
    state.deep.count++;
  }
</script>

<template>
  <div>
    <button v-on:click="state.count++"> Click {{state.count}}</button>
    <br/>
    <button v-on:click="increaseCount"> reactive Click {{state.count}}</button>
    <br/>
    <button v-on:click="increaseCount"> Deep Click {{state.deep.count}}</button>
  </div>
</template>

<style scoped lang="scss">

</style>
