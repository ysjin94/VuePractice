<script setup>
import { computed, ref, useSlots } from 'vue'

  const childMsg = ref('Child Msg');

  const slots = useSlots();
  const hasFooter = computed(() => !!slots.footer);

</script>

<template>
  <div>
    <div class="card">
      <div v-if="$slots.header" class="card-header">
        <slot name="header" header-Msg="Child Header Msg."> #Header</slot>
      </div>
      <div v-if="$slots.default" class="card-body">
        <slot :child-msg="childMsg" hello-msg="Hi">#Body</slot>
      </div>
    </div>
  </div>

<!--  <div v-if="$slots.footer" class="card-footer text-body-secondary">-->
<!--    <slot name="footer" footerMsg="Child Footer Msg.">#Footer</slot>-->
<!--  </div>-->
  <div v-if="hasFooter" class="card-footer text-body-secondary">
    <slot name="footer" footerMsg="Child Footer Msg.">#Footer</slot>
  </div>

</template>

<style scoped lang="scss">

</style>
