<template>
      <div class="myContent">
        <ul v-for="(item,index) in cidData" :key="index">
        <router-link :to="{path:'/cookDetails',query:{id:item.id,title:item.title,page:page}}">
        <li>
            <img class="fl" v-lazy="item.albums[0]" alt="">
            <div class="contentSub fl">
                <p class="contentSubTitle">{{item.title}}</p>
                <p class="contentSubName">{{item.ingredients}}</p>
                <p class="contentSubMessage"><span>4.8分</span>&nbsp;<span>58人做过</span></p>
                <p class="saveTime" v-show="isShow">收藏时间: {{item.saveTime}}</p>
            </div>
            <i v-show="isShow" @click.prevent="deleteCook(item.id)"  class="iconfont icon-shanchu"></i>
        </li>
        </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow:false
        }
    },
    created(){
        // this.$route.name
        if(this.$route.name =="collection"){
            this.isShow = true;
        }else{
            this.isShow = false;
        }
        this.page = this.$route.query.page;//解决早餐、午餐等问题
    },
    methods:{
        deleteCook(val){
            this.$emit('deleteThisCook',val);//$emit这是vue提供的子传值给父的方法
        }
    },
    props:["cidData"]

}
</script>

<style lang='scss' scoped>
.icon-shanchu{
    color:red;
}
.myContent{
  width: 100%;
  padding: 0 0.3rem;
  li{
    height: 2rem;
    margin-top: 0.3rem;
    position: relative;
    img{
      height: 2rem;
      width: 2rem;
      border-radius: 0.1rem;
    }
    .contentSub{
      margin-left: 0.3rem;
      width: 4.5rem;
       p{
          color: #333;
       }
       p:nth-of-type(1){
         font-size: 0.4rem;
         font-weight: 700;
         line-height: 0.52rem;
       }
       p:nth-of-type(2){
         font-size: 0.24rem;
         line-height: 0.6rem;
         color: #666;
         
       }
       p:nth-of-type(3){
         font-size: 0.3rem;
         line-height: 0.4rem;
         color: #333;
       }
       .saveTime{
           margin-top: 0.15rem;
           color: #666;
       }
       .contentSubName{
           line-height: 0.3rem !important;
           margin: 0.1rem 0;
       }
    }
    i{
        position: absolute;
        top: 0;
        right: 0rem;
        width: 0.8rem;
        height: 0.8rem;
        // background: #000;
        border-radius: 50%;
        font-size: 0.5rem;
        text-align: center;
    }
   
  }
}
</style>
