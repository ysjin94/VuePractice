<template>
  <main>
    <div class="container py-4">
      <MyButton class="my-button" id="myButton" @click="sayHello"></MyButton>
      <LabelInput label="Name"> </LabelInput>
      <hr/>
      <FancyButton>Click <span style="color:red"> @@@@ </span></FancyButton>
<!--      <FancyButton v-slot="{fancyMsg}">{{fancyMsg}} </FancyButton>-->
      <FancyButton>
        <template v-slot="{fancyMsg}"> {{fancyMsg}}</template>
      </FancyButton>
      <hr/>
      <AppCard>
<!--        <template v-slot:header> Title </template>-->
<!--        <template v-slot:default> Contents </template>-->
<!--        <template v-slot:footer> Footer </template>-->

<!--        <template #header> Title </template>-->
<!--        <template #default> Contents </template>-->
<!--        <template #footer> Footer </template>-->

<!--        <template #header> Title </template>-->
<!--        Contents !-->
<!--        <template #footer> Footer </template>-->

<!--        <template #[slotArgsHeader]> Title </template>-->
<!--        <template #[slotArgsFooter]> Footer </template>-->

<!--        Error-->
<!--        <template #default> This is Default. {{msg}} {{childMsg}}</template>-->

<!--        <template #default="slotProps">This is Default.-->
<!--          {{msg}}-->
<!--          {{slotProps.childMsg}}-->
<!--        </template>-->
        <template #header="{headerMsg}">This is Header Default.
          {{headerMsg}}
        </template>
        <template #default="{childMsg,helloMsg}">This is Contents Default.
          {{msg}}
          {{childMsg}}
          {{helloMsg}}
        </template>
        <template #footer="{footerMsg}">This is Footer Default.
          {{footerMsg}}
        </template>
      </AppCard>

      <hr/>
      <AppCard> This is Contents without Header & Footer</AppCard>
    </div>
  </main>
</template>

<script setup>
  import MyButton from '@/components/MyButton.vue'
  import LabelInput from '@/components/LabelInput.vue'
  import FancyButton from '@/components/FancyButton.vue'
  import AppCard from '@/components/AppCard.vue'
  import { computed, ref } from 'vue'

  const sayHello = () =>{
    console.log('Hello');
  }

  const slotArgsHeader = ref('header');
  const slotArgsFooter = ref('footer');
  const msg =ref('Hello!');
</script>

<style lang="scss" scoped>

</style>
