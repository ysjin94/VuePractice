<script setup>
  // Props 정의 (부모로부터 데이터 수신)
  import { computed } from 'vue'

  const props = defineProps({
    username: {
      type: String,
//      required: true,
    },
    label: {
      type: String,
//      required: true,
    },
  });

  // Emits 정의 (부모로 데이터 업데이트)
  const emit = defineEmits(['update:username']);

  // 로컬 상태와 props 연결
  const localUsername = computed({
    get: () => props.username, // props 값 읽기
    set: (value) => emit('update:username', value), // 부모로 값 전달
  });
</script>

<template>
  <label class="child-class"
         style="border: 1px solid black"
         id = 'childId'
    >
    {{label}}
    <input v-model="localUsername" type ="text"/>
  </label>
</template>

<style scoped lang="scss">

</style>
