<template>
  <div>
    <nav-bar class="home-nav">
   <div slot='left'></div>
        <div slot="center">购物车</div>
   <div slot='right'></div>
</nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
name:'Cart',
components:{NavBar}
}
</script>

<style>

</style>