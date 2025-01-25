<script setup>
  import AppCard from '@/components/AppCard.vue'
  import { reactive } from 'vue'
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
</script>

<template>
  <main>
    <div class="container py-4">
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
    </div>
  </main>
</template>

<style scoped lang="scss">

</style>
