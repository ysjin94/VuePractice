<script setup>
import { ref } from 'vue'

const message = ref('Hello Child!');
const sayHello = () => {
  alert(message.value);
};
</script>

<template>


</template>

<style scoped lang="scss">

</style>
