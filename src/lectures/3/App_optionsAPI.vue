<template>
  <div>
    <button v-on:click="increment">Counter : {{ count }}</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0,
    }
  },
  methods : {
    increment() {
      this.count++;
    }
  },
  mounted() {
    console.log('Component mounted');
  }
}
</script>

<style lang="scss" scoped>

</style>
