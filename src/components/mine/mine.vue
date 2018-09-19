<template>
  <div>
    <router-link to="/collection">
        <div>
            <p>我的收藏</p>
            <p>共3道菜</p>
        </div>
    </router-link>   
  </div>
</template>

<script>
    export default {
        data(){
            return {
                CollectCookData:[]
            }
        },
        created(){
            this.CollectCookData = this.$store.getters.gitCollectCook;//第五步 接收仓库里面的值 
            console.log(this.CollectCookData)
        }
    };
</script>

<style>

</style>
