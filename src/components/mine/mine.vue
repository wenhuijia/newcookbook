<template>
  <div>
    <yd-navbar title="我的收藏">
        <router-link to="#" slot="right">
            <yd-navbar-next-icon></yd-navbar-next-icon>
        </router-link>
    </yd-navbar>    
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
