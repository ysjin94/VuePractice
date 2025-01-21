<template>
  <input type="text" @keyup.ctrl.enter="addTodo"/>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
      {{todo}}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { reactive } from 'vue'

  const todos = reactive([]);
  const addTodo = (event) => {
    // if(event.key === 'Enter') {
    todos.push(event.target.value);
    event.target.value = '';
    event.target.focus();
    // }
  }
</script>

<style lang="scss" scoped>

</style>
