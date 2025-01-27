<template>
  <div class="container py-4">
    <input ref="input" type="text" />
    <p>{{input}}</p>
    <p v-if="input">{{input.value}}
    ,{{$refs.input.value}}
    ,{{$refs.input === input}}</p>
    <hr>
    <ul>
<!--      <li v-for="fruit in fruits" key="fruit" ref="itemRefs">{{fruit}}</li>-->
      <li v-for="fruit in fruits" key="fruit" :ref="(el)=> itemRefs.push(el.textContent)">{{fruit}}</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

  const input =ref(null);
  const fruits = ref(['apple','banana','strawberry'])
  const itemRefs = ref([]);
  onMounted( ()=>{
    input.value.value = "Hello Vue !"
    console.log('OnMounted => ' + input.value.value);

    // itemRefs.value.forEach(item => console.log('item: ' + item.textContent));
    itemRefs.value.forEach(item => console.log('item: ' + item));
  })
</script>

<style lang="scss" scoped>

</style>
