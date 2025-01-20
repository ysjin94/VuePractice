<template>
  <div>
<!--    <div class = "text" :class="{active : isActive, 'text-danger': hasError}"> -->
<!--    <div class = "text" :class="classObject"> -->
<!--    <div class = "text" :class="[errorClass, activeClass]"> -->
<!--    <div class = "text" :class="[isActive ? 'class' : errorClass]"> -->
    <div class = "text" :class="[isActive ? 'class' : errorClass, classObject]">
      This is Text
    </div>
    <button v-on:click="toggle">Toggle</button>
    <br/>
    <button v-on:click="hasError = !hasError">Toggle Error</button>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

  const isActive = ref(true);
  const hasError = ref(false);

  // const classObject = reactive({
  //   active : true,
  //   'text-danger': false,
  // })

  const classObject = computed(() => {
    return {
        active : true,
        'text-danger': false,
        'text-blue' : true,
    }
  });

  const activeClass = ref("active");
  const errorClass = ref("error");
  const toggle = () => {
    isActive.value = !isActive.value;
  }

</script>

<style lang="scss" scoped>
.text-danger {
  color: red;
}
</style>
