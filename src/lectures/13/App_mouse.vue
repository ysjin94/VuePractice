<template>
  <div>
    <div id = "modifier">
<!--      <div @click.capture="clickDiv">-->
      <div @click.self="clickDiv">
        DIV Area
<!--        <p @click.capture="clickP">-->
        <p @click.self="clickP">
          P Area
<!--          <span @click.stop="clickSpan">-->
<!--            Span Area-->
<!--          </span>-->
          <span @click="clickSpan">
            Span Area
          </span>
          <a href="https://naver.com" @click.prevent.stop="clickA"> A Area</a>
        </p>
      </div>
      <a href="https://naver.com" @click.prevent="clickA"> A Area</a>
    </div>
    <button @click.once="clickDiv"> once</button>
  </div>
</template>

<script setup>
  const clickDiv = () =>{
    console.log("click Div");
//    location.href = "https://naver.com"
  }
  const clickP = () =>{
    console.log("click P");
  }
  const clickSpan = e =>{
    console.log("click Span");
    // Event 전파 막기
 //   e.stopPropagation();
 //   alert("Like ! ");
  }
  const clickA = e =>{
    console.log("click A");
  }
</script>

<style lang="scss" scoped>
  #modifier div,
  #modifier p,
  #modifier span{
    padding: 40px;
  }
  #modifier div{
    background-color: #ccc;
  }

  #modifier p{
    background-color: #999;
  }
  #modifier span{
    background-color: #666;
    display: block;
  }
</style>
