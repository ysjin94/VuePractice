<template xmlns="http://www.w3.org/1999/html">
  <div>
    <h2>Input Value</h2>
<!--    <input type="text" :value="inputValue"/>-->
<!--    <input-->
<!--        type="text"-->
<!--        :value="inputValue"-->
<!--    @input="event => (inputValue = event.target.value)"-->
<!--    />-->
<!--    <input type="text" v-model="inputValue"/>-->
<!--    <input type="text" v-model.number="inputValue"/>-->
<!--    <input type="text" v-model.trim="inputValue"/>-->
    <input type="text" v-model="inputValue"/>
    <div>{{inputValue}}</div>
    <div>{{typeof inputValue}}</div>
    <hr/>

    <textarea v-model="textAreaValue">
    </textarea>
    <div>{{textAreaValue}}</div>
    <hr/>

    <h2>checkbox value</h2>
    <label for="checkbox">{{ checkBoxValue }}</label>
    <input type="checkbox" v-model="checkBoxValue" true-value="Yes" false-value="No" />
    <hr/>

    <h3>checkbox values</h3>
    <label>
    <input type="checkbox" value="html" v-model="checkboxValues"/>
      HTML
    </label>
    <label>
    <input type="checkbox" value="css" v-model="checkboxValues"/>
      Css
    </label>
    <label>
    <input type="checkbox" value="Java" v-model="checkboxValues"/>
      Java
    </label>
    <div>{{checkboxValues}}</div>
    <hr/>

    <h2>Radio value</h2>
    <label>
<!--      <input type="radio" name="type" value = "O" :checked="radioValue==='O'"-->
<!--      @change="event => (radioValue = event.target.value)"/>-->
      <input type="radio" name="type" value = "O" v-model="radioValue"/>
      Blood Type-O
    </label>
    <label>
<!--      <input type="radio" name="type" value = "A" :checked="radioValue==='A'" @change="event => (radioValue = event.target.value)"/>-->
      <input type="radio" name="type" value = "A" v-model="radioValue"/>
      Blood Type-A
    </label>
    <div>
      {{radioValue}}
    </div>
    <hr/>

    <h2>Select Value</h2>
    <select v-model="selectValue">
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="java">Java</option>
    </select>
  </div>

</template>

<script setup>
import { reactive, ref } from 'vue'

  const inputValue = ref(null);
  const textAreaValue = ref(null);
  const checkBoxValue = ref('Yes');
  const checkboxValues = ref([]);
  const radioValue = ref('O');
  const selectValue = ref('html');
</script>

<style lang="scss" scoped>

</style>
