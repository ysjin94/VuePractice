<template>
  <div>
    <h2>{{teacher.name}}</h2>
    <h3>Do we have a class today?</h3>
<!--    <p>{{teacher.lectures.length > 0 ? "Yes" : "No"}}</p> -->
    <p>{{hasLectures}}</p>
    <p>{{hasLectures}}</p>
    <p>{{existLecture()}}</p>
    <p>{{existLecture()}}</p>
    <button v-on:click="counter++"> {{counter}}</button>
    <br/>
    <h2>Name</h2>
    <p>{{fullName}}</p>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

  const teacher = reactive({
    name : "jimCoder",
    lectures : [
        "HTML/CSS",
        "JavaScript",
        "Vue3"
    ]
  })

  const hasLectures = computed(() => {
    console.log("computed");
    return teacher.lectures.length > 0 ? "Yes" : "No";
  });

  const existLecture = () => {
    console.log("existLecture");
    return teacher.lectures.length > 0 ? "Yes" : "No";
  }

  const counter = ref(0);

  const firstName = ref("SunJin");
  const lastName = ref("Yoon");
//  const fullName = computed(() => firstName.value + ' ' + lastName.value);
  const fullName = computed({
      get() {
        return firstName.value + " " + lastName.value;
      },
      set(value){
        console.log("value: " + value);
        console.log(value.split(" "));
        [firstName.value, lastName.value] = value.split(" ");
        console.log(firstName.value);
        console.log(lastName.value);
      }

    }
  );
   console.log("console out : " + fullName.value);
   fullName.value = "Jim Coder";

</script>

<style lang="scss" scoped>

</style>
