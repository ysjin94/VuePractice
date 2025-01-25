<script setup>
// 이벤트 정의
import { ref } from 'vue'

const a = ref(1);
const b = ref(2);
const c = ref(3);
const d = ref("IU");

const title = ref('');
// const emit = defineEmits(['createPost']);

const type = ref("news");

const emit = defineEmits({
  createPost: (newTitle) => {
    if (typeof newTitle !== 'string' || newTitle.trim() === '') {
      console.warn('Invalid title: Title must be a non-empty string.');
      return false;
    }
    console.log('Emitted title:', newTitle);
    return true;
  },
});
const createPost = () =>{
  // emit('createPost', a.value, b.value, c.value, d.value);
  if (title.value.trim() === '') {
    console.warn('Cannot emit: Title is empty.');
    return;
  }
  const newPost ={
    type : type.value,
    title : title.value,
  }
  emit('createPost', newPost);
  type.value = 'news';
  title.value = '';
}

</script>

<!--<template>-->
<!--  <button class="btn btn-primary" @click="$emit('createPost',1, 2, 3, 'IU')"> Button </button>-->
<!--</template>-->
<template>
  <div class="row g-3">
    <div class="col col-2">
      <select  v-model="type" class="form-select" aria-label="Default select example">
        <option value="news">News</option>
        <option value="notice">Notice</option>
      </select>
    </div>
    <div class="col col-8">
      <input type="text" class="form-control" v-model="title">
    </div>
    <div class="col col-2 d-grid ">
      <button class="btn btn-primary" @click="createPost" > Add </button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
