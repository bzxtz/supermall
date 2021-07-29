<template>
   <div class="block">
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
    <el-carousel trigger="click" height="215px" >
      <!-- 这里调整个轮播图的高度 -->
      <!-- <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3> -->
          <el-carousel-item v-for="item in banners" >
            <a :href="item.link">
               <img :src="item.image" alt=""> 
            </a>
        <!-- <h3 class="small">{{ item }}</h3> -->
      </el-carousel-item></el-carousel>
  </div>
</template>
  <!-- <div class="block">
    <span class="demonstration">Click 指示器触发</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>  轮播图的demo-->
<script>
export default {
name:"HomeSwiper",
props:{
  banners
  :{type:Array,
   default() {
          return []
        }}
  // 一定得写type,不然得不到
}
}
</script>

<style>
/* .block{
  margin-top:44px
 } */
 /* 因为navbar用来固定定位，所以脱离了文档流 */
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  } */
 .el-carousel__item{height: 215px;}
  .el-carousel__item:nth-child(2n) {
     /* background-color: #99a9bf; */
  }
  
  .el-carousel__item:nth-child(2n+1) {
     /* background-color: #d3dce6; */
  }
   .el-carousel__item img{
     width: 100%;
     height: 100%;
   }
   
.el-carousel__button {
    width: 10px;
    height: 10px;
  border-radius: 5px;
}
</style>