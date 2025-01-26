<script setup>
  import AppCard from '@/components/AppCard.vue'
  import PostCreate from '@/components/PostCreate.vue'
  import LabelInput from '@/components/LabelInput.vue'
  import LabelITitle from '@/components/LabelITitle.vue'
  import UserName from '@/components/UserName.vue'
  import { reactive, ref } from 'vue'

  const username = ref('');
  const firstName = ref('');
  const lastName = ref('');
  const posts = reactive([
      {
        id : 1,
        title : "Title !",
        contents : "Contents !",
        isLike : true,
        type : 'news',
      },
      {
        id : 2,
        title : "Title2 !",
        contents : "Contents2 !",
        isLike : true,
        type : 'news',
      },
      {
        id : 3,
        title : "Title3 !",
        contents : "Contents3 !",
        isLike : true,
        type : 'news',
      },
      {
        id : 4,
        title : "Title4 !",
        contents : "Contents4 !",
        isLike : false,
        type : 'notice',
      },
      {
        id : 5,
        title : "Title5 !",
        contents : "Contents5 !",
        isLike : false,
        type : 'notice',
      },
    ]
  )
  // const createPost = (a, b, c, d) =>{
  //   console.log('createPost', a, b, c, d);
  // }
  const createPost = (newPost) =>{
    console.log('createPost',newPost);
    posts.push(newPost);
  }
</script>

<template>
  <main>
    <div class="container py-4">
      <PostCreate @create-post="createPost">  </PostCreate>
      <hr class="my-4">
      <div class="row g-3">
        <div v-for="post in posts" :key="post.id" class="col col-4">
          <AppCard
            :title="post.title"
            :contents="post.contents"
            :type="post.type"
            :is-like="post.isLike"
            @toggleLike="post.isLike = !post.isLike"
          ></AppCard>
<!--          <button @click="post.isLike = !post.isLike"> Toggle </button>-->
        </div>
      </div>

      <hr class="my-4">
<!--      <label>-->
<!--        Name-->
<!--        <input v-model="username" type ="text"/>-->
<!--      </label>-->

      <LabelInput v-model="username" label="Name"> </LabelInput>

      <LabelITitle v-model:title="username" label="Title"> </LabelITitle>
      <UserName v-model:firstname="firstName" v-model:lastname="lastName"></UserName>
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
