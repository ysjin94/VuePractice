<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'
import LifecycleChild from '@/components/LifecycleChild.vue'

const inputRef = ref(null);
const msg = ref('');
const visible = ref(false);
onBeforeMount(() => {
  console.log('BeforeMount', inputRef.value);
})

onMounted(()=>{
  console.log('Mounted' ,inputRef.value.value);
})

onBeforeUpdate(()=>{
  console.log('BeforeUpdate', msg.value);
  console.log(
    'DOM Content :',
    document.querySelector('#msg').textContent
  )
})

onUpdated(()=>{
  console.log('Updated', msg.value);
  console.log(
    'DOM Content :',
    document.querySelector('#msg').textContent
  )
})


</script>

<template>
  <div class="container py-4">
    <input type="text" ref="inputRef" value="Hello Vue!"/>
    <LifecycleChild></LifecycleChild>
    <p id="msg">{{msg}}</p>
    <button @click="visible = !visible"> Toggle visible </button>
    <LifecycleChild v-if="visible"></LifecycleChild>

  </div>
</template>

<style scoped lang="scss">

</style>
