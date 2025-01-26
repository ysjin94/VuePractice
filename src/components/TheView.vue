<template>
  <main>
    <div class="container py-4">
      <MyButton class="my-button" id="myButton" @click="sayHello"></MyButton>
      <LabelInput label="Name"> </LabelInput>
    </div>
  </main>
</template>

<script setup>
  import MyButton from '@/components/MyButton.vue'
  import LabelInput from '@/components/LabelInput.vue'

  const sayHello = () =>{
    console.log('Hello');
  }
</script>

<style lang="scss" scoped>

</style>
