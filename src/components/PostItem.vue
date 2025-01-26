<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
//    required: true,
  },
  type:{
    type: String,
    default: "news",
    validator: (value) => {
      return ['news', 'notice'].includes(value);
    }
  },
  isLike:{
    type: Boolean,
    default: false,
  },
  obj:{
    type : Object,
    default : () => {
      return {}

    }
  }
},);
const isLikeClass = computed(() =>
  props.isLike ? "btn-danger" : "btn-outline-danger"
) ;
const typeName = computed(() =>
  props.type === 'news' ? "News" : "Notice"
);

// 이벤트 정의
const emit = defineEmits(['toggleLike']);
const toggleLike = () =>{
  emit("toggleLike");
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <!-- Type : new, notice -->
<!--      {{}} print String -->
<!--      :class="" print JS code-->

<!--      <span class="badge bg-secondary">{{type === 'news' ? "News" : "Notice"}}</span>-->
      <span class="badge bg-secondary">{{typeName}}</span>
      <h5 class="card-title mt-2">{{props.title}}</h5>
      <p class="card-text">{{props.contents}}</p>
<!--      <a v-if="isLike" href="#" class="btn" :class="isLikeClass">Like</a>-->
<!--      <a v-else href="#" class="btn" :class="isLikeClass">Like</a>-->

      <a href="#" class="btn" :class="isLikeClass" @click.prevent="toggleLike">Like</a>
    </div>
  </div>
</template>

<style module="classes">
</style>
