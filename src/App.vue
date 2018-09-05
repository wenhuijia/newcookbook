<template>
  <div id="app">
   
    <router-view/>
    <mt-tabbar v-model="selected" fixed>
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
      <router-link  to="/other">
      <mt-tab-item v-bind:class="{clickColor:actionColor.other}" id="其他">
        <span slot="icon" class="iconfont icon-qita"></span>       
        其他
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
  export default {
    data(){
      return {
         actionColor:{
           home:true,
           city:false,
           find:false,
           other:false,
           mine:false,
         },
        selected: '发现'
      }
    },
    methods:{
        reid(){
            console.log(this.value)
        },
        dd(){
          this.aaa = !this.aaa;
        }
    },
    created(){
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
      },
      $route:function(newVal,oldVal){
          for(var key in this.actionColor){
            if(newVal.path.indexOf(key)!=-1){
              this.actionColor[key]=true;
            }else{
              this.actionColor[key]=false;
            }
          }
      }
    },
    name: "App"
  };
</script>

<style scoped>
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
 
</style>
