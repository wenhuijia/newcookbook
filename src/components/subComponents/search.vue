<template>
<div>
    <div class="searchBox">
      <!-- <form action=""> -->
        <div @click="cancel" v-show="isCancel" class="myCancel"></div>
        <mt-search  type="search" @blur.native.capture="hideContent" @focus.native.capture="showContent"  @keyup.native.enter="search(value)"  v-model="value"   cancel-text="取消" placeholder="搜索菜谱"></mt-search>
      <!-- </form> -->
    </div>
    
</div>
</template>
<style lang="scss" scoped>
  .searchBox{
    position: relative;
    .myCancel{
      position: absolute;
      top: 0.25rem;
      right: 0.1rem;
      z-index: 2;
      width: 0.7rem;
      height: 0.4rem;
      background: #000;
      opacity: 0;
    }
  }
  
</style>
<script>
import { Toast } from 'mint-ui';//要引入
export default {
  data() {
    return {
      value:"",
      isShow:false,
      latelySearch:["堙压标","堙压标"],
      RecommendSearch:["排骨煲汤","排骨肉","排骨"],
      isCancel:false,
      focus:true
    };
  },
  created() {
    
  },
  methods: {
     search(value){
       if(value){
        
        this.searchVal = value ;
        this.$emit('searchCook',this.searchVal);//$emit这是vue提供的子传值给父的方法
        this.$router.push({path:"/cookClass_3",query:{"menu":value,"title":value}}); 
       }else{
         Toast('搜索内容不能为空');
       }
    },
    showContent(){
    
      this.isShow = true;
      this.isCancel = true;
      if(this.$route.name!="searchPage" && this.$route.name!="cookClass_3"){
        // alert("2")
        this.$router.push({path:"/searchPage"})
      }
    },
    hideContent(){
      // this.isShow = false;
    },
    cancel(){
      this.isShow = false;
      this.value = "";

      this.isCancel = false;
      this.$router.go(-1)
    }
  },
  watch:{
    cancel:function(newVal,oldVal){
      console.log("newVal",newVal)
    }
  },
};
</script>