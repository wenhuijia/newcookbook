<template>
    <div class="myBigBox">
           <mt-navbar v-model="selected">
          <mt-tab-item class="myTitle" id="1">我的收藏</mt-tab-item>
          <mt-tab-item id="2">浏览历史</mt-tab-item>
          <mt-tab-item id="3">做过最多</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <!-- <div class="myContent">
              <ul v-for="(item,index) in cidData" :key="index">
                <router-link :to="{path:'/cookDetails',query:{id:item.id,title:item.title}}">
                <li>
                  <img class="fl" v-lazy="item.albums[0]" alt="">
                  <div class="contentSub fl">
                    <p class="contentSubTitle">{{item.title}}</p>
                    <p class="contentSubName">{{item.ingredients}}</p>
                    <p class="contentSubMessage"><span>4.8分</span>&nbsp;<span>58人做过</span></p>
                  </div>
                </li>
                </router-link>
              </ul>
            </div> -->
            <!-- 更改变引入列表子组件 -->
            <cook-list @deleteThisCook='deleteCookFun' :cidData='this.renderData'></cook-list>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <cook-list  :cidData='this.historyDatas'></cook-list>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
           3
          </mt-tab-container-item>
        </mt-tab-container>
        
    </div>
</template>

<script>
import cookList from '../subComponents/cookList.vue'
import bus from "../../assets/js/common.js";
import { Toast } from 'mint-ui';//要引入
export default {
    data(){
        return{
            collectionData:JSON.parse(sessionStorage.getItem("collectCookData")),
            renderData :[],
            historyCook:[],
            historyDatas:[],
            selected:"1"
        }
    },
    created(){
        this.cidData = this.$jsData.cidList;
        this.cidDataHistory = this.$jsData.cidList;
        this.queryData();
        bus.$emit("setTitleBus", "我的收藏");
        this.historyCook= this.$store.getters.gitHistoryCook.historyData;//第五步 接收仓库里面的值 
        this.historyRender();
    },
    methods:{
        // 模拟查询数据库、
        queryData(){
            if(this.collectionData&&this.collectionData.length!=0){
                this.collectionData.forEach((v,i)=> {
                    this.cidData.forEach((v2,i2)=>{
                        if(v.id == v2.id){
                            v2.saveTime = v.saveTime;
                            this.renderData.push(v2);
                        }
                    });
                });
            }else{
                Toast({message:'还没有任何收藏哦~',position: 'bottom',});
            }
            
        },
        deleteCookFun(value){//跟据cookList子组件 传过来的is删除收藏的数据
            console.log(value)
            this.collectionData.forEach((v,i)=>{
                if(v.id == value){
                    this.collectionData.splice(i,1);
                };
            });
            this.renderData = [];//清除数据
            this.queryData();
            sessionStorage.setItem("collectCookData",JSON.stringify(this.collectionData));
            
        },
        // 渲染历史记录
        historyRender(){
                console.log("ddd",this.historyCook) //会拿到整个getters里面的值
                console.log("eee",this.cidDataHistory) //会拿到整个getters里面的值
             if(this.historyCook&&this.historyCook.length!=0){
                this.historyCook.forEach((v,i)=> {
                    this.cidDataHistory.forEach((v2,i2)=>{
                        if(v.id == v2.id){
                            // v2.saveTime = v.time;
                            this.historyDatas.push(v2);
                        }
                    });
                });
            }else{
                Toast({message:'还没有任何收藏哦~',position: 'bottom',});
            }
            console.log("historyDatas",this.historyDatas)
        }
    },
    updated(){
    },
    components:{
        cookList
    }
}
</script>

<style lang='scss' scoped>
    .myBigBox{
        // margin-top: 1.28rem;
    }
</style>
