<template>
  <div>
    <mt-search  cancel-text="取消" placeholder="搜索菜谱"></mt-search>
    <div class="my_swipe">
      <mt-swipe :auto="3000">
        <mt-swipe-item v-for="(item,index) in imgData" :key="index">
          <img :src="item.url" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgData: [
        { url: require("../../assets/images/1.jpg") },
        { url: require("../../assets/images/2.jpg") },
        { url: require("../../assets/images/3.jpg") }
      ]
    };
  },
  // created() {
  //   axios.post("http://route.showapi.com/1164-2", {
  //       showapi_appid: "63299",
  //       showapi_sign: "c7eefcb69b6043b4852d5f29b42b8ac5"
  //   }).then(function(response) {
  //       console.log(response);
  //   }).catch(function(error) {
  //       console.log(error);
  //   });
  // }
};
</script>

<style scoped>
.mint-searchbar {
  padding: 0.02rem 0.02rem;
}
.mint-search {
  height: 100%;
}
.my_swipe {
  width: 100%;
  height: 3rem;
}
</style>
