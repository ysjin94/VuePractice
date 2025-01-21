<template>
  <div>
    <div v-memo="[subscribers]">
      <p>subscribers : {{subscribers}}</p>
      <p>view : {{views}}</p>
      <p>likes : {{likes}}</p>
    </div>
    <button @click="subscribers++"> Sub++</button>
    <button @click="views++"> Views++</button>
    <button @click="likes++"> Like++</button>
    <div>
      <p>subscribers : {{subscribers}}</p>
      <p>view : {{views}}</p>
      <p>likes : {{likes}}</p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const subscribers = ref(4000);
  const views = ref(400);
  const likes = ref(20);
</script>

<style lang="scss" scoped>

</style>
