<template>
  <div id="app">
    <mt-header class="myHeader hide" v-show="isHide" fixed :title="navTitle">
    <router-link to="/" slot="left">
      <mt-button @click="goBack" class="iconfont icon-jiantou-zuo"></mt-button>
    </router-link>

</mt-header>
    <router-view/>
    <mt-tabbar v-show="!isHide" v-model="selected" fixed>
      <router-link to="/home">
      <mt-tab-item v-bind:class="{clickColor:actionColor.home}" id="home">
        <span slot="icon"  class="iconfont icon-Home "></span>
        home
      </mt-tab-item>
      </router-link>
      <router-link  to="/city">
      <mt-tab-item v-bind:class="{clickColor:actionColor.city}" id="城市">
        <span slot="icon" class="iconfont icon-chengshi"></span>
        城市
      </mt-tab-item>
      </router-link>
      <router-link  to="/find">
        <mt-tab-item v-bind:class="{clickColor:actionColor.find}" id="发现">
          <span slot="icon" class="iconfont icon-jia"></span>
          发现
        </mt-tab-item>
      </router-link>
      <router-link  to="/collection">
      <mt-tab-item v-bind:class="{clickColor:actionColor.collection}" id="收藏">
        <span slot="icon" class="iconfont icon-shoucang"></span>       
        收藏
      </mt-tab-item>
      </router-link>
      <router-link  to="/mine">
      <mt-tab-item v-bind:class="{clickColor:actionColor.mine}" id="我的">
        <span slot="icon" class="iconfont icon-wode"></span>       
        我的
      </mt-tab-item>
      </router-link>
    </mt-tabbar>
  </div>
</template>

<script>
  import './assets/icon/iconfont.css';
  import './assets/css/public.css';
  import bus from '../src/assets/js/common.js'
  export default {
    data(){
      return {
          actionColor:{
            home:true,
            city:false,
            find:false,
            collection:false,
            mine:false,
          },
          selected: '发现',
          isHide:false,
          navTitle:"999"
      }
    },
    methods:{
        reid(){
        },
        dd(){
          this.aaa = !this.aaa;
        },
        goBack(){
           this.$router.go(-1);
        }
    },
    created(){
      const _this = this;
      //解决刷新后路由监控失效问题
      if(this.$route.name=="home"||this.$route.name=="city"||this.$route.name=="find"||this.$route.name=="collection"||this.$route.name=="mine"){
            this.isHide = false;
          }else{
            this.isHide = true;
      };
      for(var key in this.actionColor){
        if(this.$route.path.indexOf(key)!=-1){
          this.actionColor[key]=true;
        }else{
          this.actionColor[key]=false;
        }
      };
      if(this.$route.name=="login"){
        this.isHide = false;
      }
      bus.$on('setTitleBus', function(badgeValueid){
        _this.navTitle = badgeValueid;
      });
    },
    watch: {
      selected: function (val, oldVal) {
      },
      $route:function(newVal,oldVal){
          for(var key in this.actionColor){
            if(newVal.path.indexOf(key)!=-1){
              this.actionColor[key]=true;
            }else{
              this.actionColor[key]=false;
            }
          };
          if(newVal.path=="/"){
            this.actionColor.home = true;
          };
          if(newVal.path=="/"||newVal.path=="/home"||newVal.path=="/city"||newVal.path=="/find"||newVal.path=="/collection"||newVal.path=="/mine"){
            this.isHide = false;
          }else{
            this.isHide = true;
          };
      }
    },
    name: "App"
  };
</script>

<style lang="scss" scoped>
  body{
    background: #fff;
  }
  .aaa{
    width: 3.75rem;
    background: #000;
    height: 0.5rem;
  }
  .iconfont{
    font-size: 0.5rem;
    /* color: #e29f00; */
  }
  .icon-jia{
    /* color: red; */
  }
  .mint-tab-item-label{
    font-size: 0.24rem;
  }
  .mint-tabbar a{
    width: 1.5rem ;
  }
  .clickColor{
    color: red;
  }
  .myHeader{
    background: #fff;
    color: #333;
    font-size: 0.34rem;
  }
  
</style>
