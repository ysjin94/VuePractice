<template>
  <div>
    <div :style="styleObject">
      Test !
    </div>
  </div>
  <button v-on:click="fontSize++"> + </button>
  <button v-on:click="fontSize--"> - </button>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

  // const styleObject = reactive({
  //   color: 'red',
  //   fontSize: '13px',
  // })

  const fontSize = ref(13);
  const styleObject = computed( () =>{
      return {
        color: 'red',
        fontSize: fontSize.value + "px",
      };
  });
</script>

<style lang="scss" scoped>

</style>
