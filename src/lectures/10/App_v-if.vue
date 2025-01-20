<template>
  <div>
    <h2 v-if="visible"> Hello Vue3 !</h2>
    <h2 v-else> False, Hello Vue3 !</h2>
    <button v-on:click="visible = !visible"> Toggle</button>
    <hr/>

    <br/>
    <button v-on:click="type = 'A'"> A </button>
    <button v-on:click="type = 'B'"> B </button>
    <button v-on:click="type = 'C'"> C </button>
    <button v-on:click="type = 'D'"> D </button>

    <h2 v-if="type == 'A'">A</h2>
    <h2 v-else-if="type == 'B'">B</h2>
    <h2 v-else-if="type == 'C'">C</h2>
    <h2 v-else>none of A, B, C. </h2>
    <hr/>
    <template v-if="visible">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    <hr/>

    <h1 v-show="ok"> This is Title Again</h1>
    <button v-on:click="ok = !ok"> show toggle </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const visible = ref(true);
  const type = ref("A");
  const ok = ref("ok");
</script>

<style lang="scss" scoped>

</style>
