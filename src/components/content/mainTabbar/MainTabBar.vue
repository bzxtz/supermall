<template>

 <!--  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar> --> 
<div>
    <tab-bar>
        <!-- 这里不是TabBar，而是tab-bar有点懵 -->
        <tab-bar-item path='/home'>  
       <template v-slot:item-icon>
           <!-- 具名插槽写在template里 -->
        
           <!-- 波浪符号代表了配置后可以直接用,配置在@vue里的cli-service里的lib里的config里的base.js -->
           <img src="~assets/img/tabbar/home.svg"  >
 </template>
   <template v-slot:item-icon-active>
              <img src="~assets/img/tabbar/home_active.svg"  >
            </template>
            <template v-slot:item-text>
                <div>首页</div>
            </template>
             </tab-bar-item>
                    <tab-bar-item path='/category'>
       <template v-slot:item-icon>
           <img src="~assets/img/tabbar/category.svg"  >
            </template>
            <template v-slot:item-icon-active>
           <img src="~assets/img/tabbar/category_active.svg"  >
            </template> 
            <template v-slot:item-text>
                <div>分类</div>
            </template>
             </tab-bar-item>    
          
                <tab-bar-item path='/cart'>
       <template v-slot:item-icon>
           <img src="~assets/img/tabbar/shopcart.svg"  >
            </template>
             <template v-slot:item-icon-active>
           <img src="~assets/img/tabbar/shopcart_active.svg"  >
            </template>
            <template v-slot:item-text>
                <div>购物车</div>
            </template>
             </tab-bar-item>       
             <tab-bar-item path='/profile'>
       <template v-slot:item-icon>
           <img src="~assets/img/tabbar/profile.svg"  >
            </template>
             <template v-slot:item-icon-active>
           <img src="~assets/img/tabbar/profile_active.svg"  >
            </template>
            <template v-slot:item-text>
                <div>详情</div>
            </template>
             </tab-bar-item>
    </tab-bar>
</div>
</template>

 

<script>
import TabBar from './TabBar'
// 这里不要加.vue不知道为啥
import TabBarItem from './TabBarItem'

export default{
    name:'MainTabBar',
    // name里要加''
    components:{
    TabBar,
    TabBarItem
    },
    // 这里用到了组件，要加components
     
}
</script>

<style>
</style>
