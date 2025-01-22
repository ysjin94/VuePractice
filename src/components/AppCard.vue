<script setup>
import { ref, useCssModule } from 'vue'
//  const cssModule = useCssModule();
  const color = ref("red");
</script>

<template>
  <div class="card">
    <div class="card-body">
<!--      {{classes}}-->
      <h5 class="card-title">Card title</h5>
      <p class="card-text" :class="classes">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<!--<style scoped>-->
<!--  .red{-->
<!--    color: red;-->
<!--  }-->
<!--</style>-->

<style module="classes">
.red{
  color: v-bind(color) !important;
}
</style>
