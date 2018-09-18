<template>
    <div class="myBigBox">
        <cook-list @deleteThisCook='deleteCookFun' :cidData='this.renderData'></cook-list>
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
            renderData :[]
        }
    },
    created(){
        this.cidData = this.$jsData.cidList;
        this.queryData();
        bus.$emit("setTitleBus", "我的收藏");

    },
    methods:{
        // 模拟查询数据库、
        queryData(){
            if(this.collectionData){
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
        margin-top: 1.28rem;
    }
</style>
