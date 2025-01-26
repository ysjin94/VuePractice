<script setup>
import LabelInput from '@/components/LabelInput.vue'
import { computed } from 'vue'

const props = defineProps({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
});

// Emits 정의 (부모로 데이터 업데이트)
const emit = defineEmits(['update:firstname', 'update:lastname']);

// 로컬 상태와 props 연결
const localFirstName= computed({
  get: () => props.firstname, // props 값 읽기
  set: (value) => emit('update:firstname', value), // 부모로 값 전달
});

const localLastName = computed({
  get: () => props.lastname, // props.title 값 읽기
  set: (value) => emit('update:lastname', value), // 부모로 값 전달
});

</script>

<template>
  <div>
    <LabelInput v-model="localLastName" label="Last Name"></LabelInput>
    <LabelInput v-model="localFirstName" label="First Name"></LabelInput>
  </div>
</template>

<style scoped lang="scss">

</style>
