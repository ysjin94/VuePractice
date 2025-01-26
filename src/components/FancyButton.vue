<script setup>
  import { ref } from 'vue'

  const fancyMsg = ref('Fancy Msg');
</script>

<template>
  <button class="fancy-btn">
    <slot :fancy-msg="fancyMsg">Default Click</slot>
  </button>
</template>

<style scoped lang="scss">
  .fancy-btn{
    color: #fff;
    background :linear-gradient(315deg, #42d392 25%, #647eff);
    border: none;
    padding : 5px 12px;
    margin : 5px;
    border-radius: 8px;
    cursor: pointer;
  }
</style>
