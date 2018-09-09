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
      this.$router.push({path:"/cookClass_3"})
    },
    showContent(){
    
      this.isShow = true;
      this.isCancel = true;
      console.log(this.$route.name)
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