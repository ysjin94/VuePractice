<script setup>
  // Props 정의 (부모로부터 데이터 수신)
  import { computed } from 'vue'

  const props = defineProps({
    username: {
      type: String,
//      required: true,
    },
    title: {
      type: String,
    },
    label: {
      type: String,
    },
  });

  // Emits 정의 (부모로 데이터 업데이트)
  const emit = defineEmits(['update:username', 'update:title']);

  // 로컬 상태와 props 연결
  const localUsername = computed({
    get: () => props.username, // props 값 읽기
    set: (value) => emit('update:username', value), // 부모로 값 전달
  });

  const localTitle = computed({
    get: () => props.title, // props.title 값 읽기
    set: (value) => emit('update:title', value), // 부모로 값 전달
  });
</script>

<template>
  <label>
    {{label}}
    <input v-model="localTitle" type ="text"/>
  </label>
</template>

<style scoped lang="scss">

</style>
