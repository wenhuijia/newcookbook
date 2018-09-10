<template>
  <div>
      <div class="bigBox">
          <div class="hotClass">
              <p class="hotClassTitle">热门分类</p>
              <ul v-for="(item,index) in jsonData" v-bind:key="index">
                  <!-- <router-link :to="{ path: '/news', query: { userId: 1111}}">click to news page</router-link> -->
                  <!-- <router-link :to="'/cookClass_2/'+item.parentId"> -->
                  <router-link :to="{path:'/cookClass_2',query:{id:item.parentId,title:item.name}}">
                    <li :id="item.parentId" ><p>{{item.name}}</p></li>
                  </router-link>
              </ul>
          </div>
      </div>
  </div>
</template>
<script>
import bus from "../../assets/js/common.js"

export default {
    data(){
        return {
            jsonData:[],
            cookTitle:"这是标师"
        }
    },
    created(){
        this.jsonData = this.$jsData.cookList;
        console.log(this.jsonData);
        console.log(this.navTitle);
    },
    methods:{
        aa(){
        },
        setTitle(){
            bus.$emit('setTitleBus', "菜谱分类");
        }
    }
}
</script>

<style lang="scss" scoped>
    .bigBox{
        margin-top: 1.08rem;
    }
    .hotClass{
        .hotClassTitle{
            font-size: 0.4rem;
            color: #333;
            font-weight: 700;
            padding-left: 0.3rem;
            line-height: 0.8rem;
        }
        ul{
            li{
                float: left;
                width: 1.5rem;
                height: 1.5rem;
                background: url("../../assets/images/3.jpg") no-repeat center;
                margin-left: 0.3rem; 
                margin-bottom: 0.3rem;
                border-radius: 0.1rem;
                
                p{
                    height: 0.5rem;
                    font-size: 0.28rem;
                    line-height: 0.5rem;
                    text-align: center;
                    background: rgba(0,0,0,0.6);
                    color: #fff;
                    margin-top: 1rem;
                    border-bottom-right-radius: 0.1rem;
                    border-bottom-left-radius: 0.1rem;

                }
            }
        }
    }
</style>
