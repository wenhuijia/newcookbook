<template>
  <div>
    <router-link to="/collection">
        <yd-navbar title="我的收藏">
            <div slot="right">
                <yd-navbar-next-icon></yd-navbar-next-icon>
            </div>
        </yd-navbar> 
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
