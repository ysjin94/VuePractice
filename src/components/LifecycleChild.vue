<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue'

  console.log('[Child] setup');
  onBeforeMount(()=>{
    console.log('[Child] beforeMount');
  })
  onMounted(()=>{
    console.log('[Child] mounted');
  })

  onBeforeUnmount(()=>
    {
      console.log('[Child] beforeUnmount');
      console.log('[Child]', document.querySelector('#input'))
    }
  )

  onUnmounted(()=>{
    console.log('[Child] unmounted');
    console.log('[Child]', document.querySelector('#input'))
  })

</script>

<template>
  <div class="card">
    <div class="card-body">Lifecycle Child</div>
    <input id="input" type="text" />
  </div>
</template>

<style scoped lang="scss">

</style>
