<template>
<div id='home'>
    <nav-bar class="home-nav">
   <div slot='left'></div>
        <div slot="center">购物街</div>
   <div slot='right'></div>
</nav-bar>
<!-- ------------- -->
 <home-swiper :banners="banners"/>
 <recommend-view :recommends="recommends"/>
 <!-- 父传子，把recommend数据传到子组件中，要动态绑定 -->
  <feature-view/>
  <!-- 那张大图 -->
  </div>
</template> 

<script>


// ---------
import NavBar from 'components/common/navbar/NavBar';
import FeatureView from 'views/home/childComps/FeatureView';
import RecommendView from 'views/home/childComps/RecommendView';
import HomeSwiper from 'views/home/childComps/HomeSwiper';
  import { getHomeMultidata 
//  , getHomeGoods
   } from "@/network/home";
export default {
name:'Home',
components:{ 
    NavBar,FeatureView,
RecommendView,
HomeSwiper,
    } ,  
                    data(){
      return {
        // result:null
        banners:[],
        recommends:[],
                     xxs:[]
        }
    },
    // data别写错，里面要return
    created(){
      getHomeMultidata().then(res=>
      {
        // console.log(res);
        // this.result=res
        this.banners=res.data.banner.list,
        this.recommends=res.data.recommend.list,
            this.xxs=res
      })
    },
     methods:{
        
    }
}
</script>
 
<style>
#home{
  padding: 44px 0 50px;
}

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
 
    
</style>