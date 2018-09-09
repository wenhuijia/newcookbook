<template>
<div>
    <search></search>
    <div>
      <div class="conent latelySearch">
        <p class="clearfix"><span class="fl">最近搜索</span><span @click="clearText" class="clearText fr">清空</span></p>
        <ul  class="clearfix">
          <li v-for="(item,index) in latelySearch" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="conent RecommendSearch">
        <p>推荐搜索</p>
        <ul class="clearfix">
          <li v-for="(item,index) in RecommendSearch" :key="index" class="fl">{{item}}</li>
        </ul>
      </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
    .conent{
    padding: 0 0.3rem;
    margin-top: 0.5rem;
    p{
      font-size: 0.26rem;
      color: #333;
      line-height: 0.8rem;
    }
    .clearText{
      color: #666;
    }
    ul{
      li{
        float: left;
        height: 0.8rem;
        line-height: 0.8rem;
        background: #f4f4f4;
        color: #333;
        text-align: center;
        margin-right: 0.2rem;
        margin-bottom: 0.2rem;   
        font-size: 0.3rem;
        padding: 0 0.3rem;
        border-radius: 0.1rem;
      }
    }
  }
</style>
<script>
import search from "../subComponents/search.vue"
export default {
  data() {
     return {
      value:"",
      isShow:false,
      latelySearch:["堙压标","堙压标"],
      RecommendSearch:["排骨煲汤","排骨肉","排骨"],
      isCancel:false
    };
  },
  created() {},
  methods: {
    clearText(){
        this.latelySearch=["无"];
    },
    cancel(){
      this.isShow = false;
      this.value = "";

      this.isCancel = false;
      this.$router.go(-1)
    }
  },
  components:{
      search
  }
};
</script>