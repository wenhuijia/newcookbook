<template>
  <div>
    <search></search>
    <div class="my_swipe">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,index) in imgData" :key="index">
          <img class="swipeImg" :src="item.url" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="cookList clearfix">
        <ul>
          <router-link to="/cookClass">
          <li class="clearfix"><i class="iconfont icon-913caidan_shengming"></i><p>菜谱分类</p></li>
          </router-link>
          <router-link to="/cookList">
          <li class="clearfix"><i class="iconfont icon-qita"></i><p>菜谱分类</p></li>
          </router-link>
          <li class="clearfix"><i class="iconfont icon-qita"></i><p>菜谱分类</p></li>
          <li class="clearfix"><i class="iconfont icon-qita"></i><p>菜谱分类</p></li>
        </ul>
    </div>
    <div class="gridBox clearfix">
      <ul>
        
        <li>
          <router-link to="/cookClass_3?title=早餐&page=breakfast">
          <div>
            <p>早餐</p>
            <p>一日之计在于晨</p>
          </div>
          <img src="http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/360_590914.jpg" alt="">
           </router-link>
        </li>
       
        <li>
          <router-link to="/cookClass_3?title=午餐&page=lunch">
          <div>
            <p>午餐</p>
            <p>吃饱才是硬道理</p>
          </div>
          <img src="http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/64_594484.jpg" alt="">
         </router-link>
        </li>
         <li>
            <router-link to="/cookClass_3?title=晚餐&page=supper">
          <div>
            <p>晚餐</p>
            <p>生活就是要吃的好</p>
          </div>
          <img src="http://juheimg.oss-cn-hangzhou.aliyuncs.com/cookbook/t/1/909_135871.jpg" alt="">
          </router-link>  
        </li>
        <li>
          <router-link to="/cookClass_2?id=10005&title=%E5%9C%BA%E6%99%AF">
          <div>
            <p></p>
            <p style="color:#999;">更多>></p>
          </div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538286466166&di=9a83a7cffe47f2c7ebfbed94291f88ce&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01435159b0e443a8012028a9a9b902.gif" alt="">
          </router-link>
        </li>
      </ul>
    </div>
    <div class="recommendBox">
      <li class="recommendTitle"><p>菜单推荐</p><p>查看全部</p></li>
      <li>
        <img src="http://img1.imgtn.bdimg.com/it/u=509088933,2375510500&fm=200&gp=0.jpg" alt="">
      </li>
    </div>
  </div>
</template>

<script>
import search from '../subComponents/search.vue';

export default {
  data() {
    return {
      imgData: [
        { url: require("../../assets/images/1.jpg") },
        { url: require("../../assets/images/2.jpg") },
        { url: require("../../assets/images/3.jpg") }
      ],
      
    };
  },
  methods: {

  },
  components:{
    search
  },
  created(){
    
  }
};
</script>

<style lang="scss" scoped>
.mint-searchbar {
  padding: 0.02rem 0.02rem;
}
.mint-search {
  height: 100%;
}
.my_swipe {
  width: 100%;
  height: 3rem;
}
.swipeImg{
  width: 100%;
  height: 3rem;
}
.cookList{
  height: 100%;
  width: 100%;
  ul{
    margin-top: 0.2rem;
    li{
      float: left;
      width: 25%;
      text-align: center;
      i{
        display: inline-block;
        font-size: 0.8rem;
      }
      p{
        font-size: 0.3rem;
        color: #333;
        line-height: 0.42rem;
      }
    }
  }
}
.gridBox{
  padding: 0 0.3rem;
  padding-top: 0.3rem;
  li{
    width: 3.3rem;
    height: 2.5rem;
    float: left;
    background: #fff;
    position: relative;
    margin-bottom: 0.3rem;
    img{
      width: 100%;
      height: 100%;
    }
    div{
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0 0 0.1rem 0.2rem;
      p{
        font-size: 0.5rem;
        font-weight: 700;
        color:#fff;
      }
      p:nth-of-type(2){
        font-size: 0.32rem;
        font-weight: 400;
      }
    }
  }
  li:nth-of-type(2n){
    float: right;
  }
  
}
.recommendBox{
  height: 100%;
  width: 100%;
  padding: 0 0.3rem;
  padding-bottom: 2rem;
  margin-top: 0.3rem;
  li{
    width: 100%;
  }
  .recommendTitle{
    p{
      float: left;
      font-size: 0.4rem;
      color: #333;
      line-height: 1rem;
    }
    p:nth-of-type(2){
      float: right;
      color: #666;
    }
  }
  img{
    width: 100%;
    height: 3rem;
  }
}
</style>
