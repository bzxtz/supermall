<template>
  <ul class="recommends"><li v-for='item in recommends'>
  <a :href="item.link">
    <img :src="item.image" alt="">
  </a>
  <a :href="item.link">
 <h5>{{item.title}}</h5>
  </a>
  </li></ul>
</template>

<script>
export default {
name:"RecommendView",
 props: {
      recommends: {
        type: Array,
        // default() {
        //   return []
        // }
      }
    }
// components:{
//   RecommendView  }子组件不需要这么写，已经由name传出去了，父组件引入的时候要import和注册
}
</script>

<style>
 .recommends{
display: flex;
margin-top:20px;
justify-content: space-around;
border-bottom:10px solid #eee}
    .recommends li{
      list-style: none;
      text-align: center;
    }
      .recommends li img{width: 75%;}
       .recommends li h5{
         color: #666666;
         font-size:12px;
         font-weight: 400;
         padding:10px 0 20px
       }
</style>