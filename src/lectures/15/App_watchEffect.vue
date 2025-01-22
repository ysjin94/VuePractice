<template>
  <div>
    <form action="" @submit.prevent="save(title,contents)">
      <input type="text" v-model.lazy="title" placeholder="Title">
      <textarea v-model.lazy="contents" placeholder="Contest"></textarea>
      <hr/>
<!--      <button @click="save(title,contents)">Submit</button>-->
      <button>Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

  const title = ref("");
  const contents = ref("");

  const save = (title, contents) =>{
    console.log(`Saved ! title : ${title}, contents : ${contents}`);
  }
  watchEffect( () =>{
    console.log("watch Effect");
    save(title.value, contents.value);
    console.log( title.value );
    console.log( contents.value );
  })
</script>

<style lang="scss" scoped>

</style>
