<template>
  <div>
    <ul>
<!--      <template v-for="(item, index) in items" :key="item.id"> -->
      <template v-for="(item, index) in evenItems" :key="item.id">
<!--        <li v-if="item.id % 2 ===0"> -->
        <li>
          ID : {{ item.id }}, index : {{index}}, {{item.message}}
        </li>
      </template>

<!--      <li v-for="item in items" :key="item.id"> -->
<!--      <li v-for="(item, index) in items" :key="item.id"> -->
<!--        {{item.message}} -->
<!--          index : {{index}}, {{item.message}}

      </li>
      -->
    </ul>

    <hr>
    <ul>
      <li v-for="(value, key, index) in myObject" :key="key">
        {{index}} - {{key}} - {{value}}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'

  const items = reactive([
    {id : 1,message : "Java"},
    {id : 2,message : "Javascript"},
    {id : 3,message : "HTML"},
    {id : 4,message : "CSS"},
  ])

  const evenItems = computed(() => items.filter(item => item.id % 2 ===0));

  const myObject = reactive({
    Title : "Start with Vue3",
    Author : "JimCoder",
    PublishedAt : Date.now(),
  })
</script>

<style lang="scss" scoped>

</style>
