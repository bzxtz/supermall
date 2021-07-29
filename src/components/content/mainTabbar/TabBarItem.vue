<template>
  <div id="tab-bar-item" @click="itemClick">
<div v-if='!isActive'><slot name='item-icon'></slot></div>
<div v-else><slot name='item-icon-active'></slot></div>
 <div :style="activeStyle"><slot name="item-text"></slot></div>
<!-- 具名组件在命名是用slot name=''表示，调用时用template包裹的v-slot表示 -->
  </div>
</template>

<script>
export default {
name:'TabBarItem',
// name:里面要加''
// TabBarItem错误写法
props:{
  path:String
  // 从外面动态的传进来path
},
data(){
  return {}
},
computed:{
  isActive(){
    return this.$route.path.indexOf(this.path)!==-1
    // indexOf不等于-1代表两者一样，返回值为true代表活跃，不活跃返回false
  },activeStyle(){
    //  return this.isActive ? {color: 'red'} : {}
      return this.isActive ? {color: 'red'} : {}
},},
methods: {
  // 找了半天错误，没有监听点击，自然不会跳转
      itemClick() {
        this.$router.replace(this.path)
        // 不想返回有效就用replace
      }
    }
}
</script>

<style scoped>
/* id用的是#，创建是如果用的是.,下面才是. */
#tab-bar-item {
    flex: 1;
    text-align: center; 
    height: 49px;
    font-size: 14px;
  }

  #tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}
</style>