
<template>
  <div>
    <p>author : {{author}}</p>
    <p>title : {{title}}</p>
  </div>
</template>

<script setup>
import { reactive, toRef, toRefs } from 'vue'

const book =reactive({
  author: "Vue Team",
  year : "2020",
  title : "Vue 3 Guide",
  description : "Vue Developer",
  price : 'Free',
});

//const {author, year, title, description} = toRefs(book);
const author = toRef(book, 'author');
const title = toRef(book, 'title');
</script>

<style lang="scss" scoped>

</style>
