<template>
  <div>
    <mt-search  cancel-text="取消" placeholder="搜索菜谱"></mt-search>
    <div class="my_swipe">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,index) in imgData" :key="index">
          <img class="swipeImg" :src="item.url" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="cookList">
        <ul>
          <router-link to="/cookClass">
          <li class="clearfix"><i class="iconfont icon-913caidan_shengming"></i><p>菜谱分类</p></li>
          </router-link>
          <li class="clearfix"><i class="iconfont icon-qita"></i><p>菜谱分类</p></li>
          <li class="clearfix"><i class="iconfont icon-qita"></i><p>菜谱分类</p></li>
          <li class="clearfix"><i class="iconfont icon-qita"></i><p>菜谱分类</p></li>
        </ul>
    </div>
    <div>
      <button @click="button">点我</button>
      <button @click="button2">点我22</button>
    </div>
    
  </div>
</template>

<script>
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
    button: function() {
      var url = "/api/cook/category?key=b63137a192f9b1051023d19222402c3f";
      this.$axios
        .get(url)
        .then(function(data) {
          if(data.status==200){
            // console.log(data.data.result)
            console.log(JSON.stringify(data.data.result))
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
      button2: function() {
      var url = "/api/cook/query?key=b63137a192f9b1051023d19222402c3f&menu=茄子";
      this.$axios
        .get(url)
        .then(function(data) {
          if(data.status==200){
            console.log(data.data.result)
            // console.log(JSON.stringify(data.data.result))
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
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
</style>
