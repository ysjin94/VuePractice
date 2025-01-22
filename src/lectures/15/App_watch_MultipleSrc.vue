<template>
  <div>

  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

  const x = ref(0);
  const y = ref(0);

  // watch(
  //   () => x.value + y.value,
  //   (sum, oldValue) => {
  //     console.log(sum);
  //     console.log(oldValue);
  //   }
  // )

  // watch([x,y], ([newX, newY]) => {
  //   console.log(newX, newY);
  // });

  const obj = reactive({
    count : 0,
  })
  console.log(typeof obj);

  // watch(obj, (newValue, oldValue) => {
  //   console.log(newValue);
  //   console.log(oldValue);
  // })

  // watch(
  //   () => obj.count, // getter fucntion
  //   (newValue, oldValue) => {
  //     console.log(newValue);
  //     console.log(oldValue);
  //   }
  // )

  const person = reactive({
    name : "IU",
    age : 30,
    hobby : "Singing",
    obj : {
      count:0
    }
  })

  // watch(
  //   person, newValue =>{
  //     console.log(newValue);
  //   }
  // )

  watch(
    () => person.obj,
    newValue => {
      console.log(newValue);
    }
  )
</script>

<style lang="scss" scoped>

</style>
