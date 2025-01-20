<script setup xmlns="http://www.w3.org/1999/html">
  import { ref } from 'vue'

  const message = ref('Hello !')
  const rawHtml = ref('<strong> Hello ! </strong>')
  const dynamicTitle = ref('Hello World !')
  const isInputDisabled = ref(false)
  const attrs = ref({
    type : 'password'
    ,value : '1234567'
    ,disabled: false
  })
</script>

<template>
  <div>
    <h2> Lecture 5</h2>
    <p> {{message}}</p>
    <p v-once>{{message}}</p>
    <button v-on:click="message = message + '!'"> Click !</button>

    <hr>

    <h2>v-html</h2>
    <p>{{rawHtml}}</p>
    <p v-html="rawHtml"></p>

    <h2>Bind Properties</h2>
    <div :title="dynamicTitle">On Mouse Text</div>
    <input type="text" value = "IU" :disabled="isInputDisabled">
    <input v-bind="attrs"/>

    <h2>JavaScript</h2>
    {{message.split('').reverse().join('')}}
    <br/>
    {{isInputDisabled ? "yes" : 'no'}}
  </div>
</template>

<style scoped lang="scss">

</style>
