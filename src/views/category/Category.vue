<template>
  <div>
    <nav-bar class="home-nav">
   <div slot='left'></div>
        <div slot="center">商品分类</div>
   <div slot='right'></div>
</nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
name:'Category',
components:{NavBar}
}
</script>

<style>

</style>