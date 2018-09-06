<template>
  <div>
      <div class="bigBox">
          <div class="hotClass">
              <p class="hotClassTitle">热门分类</p>
              <ul v-for="(item,index) in cidData" v-bind:key="index">
                  <!-- <router-link :to="'/cookClass_2/'+item.parentId"> -->
                    <li :id="item.id" ><p>{{item.name}}</p></li>
                  <!-- </router-link> -->
              </ul>
          </div>
      </div>
      <button @click="aa">点我2222</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jsonData: [],
      cidData:[],
      cid: ""
    };
  },
  created() {
    this.jsonData = this.$jsData.cookList;
    this.cid = this.$route.params.id;
    this.getData();
  },
  methods: {
    aa() {
    },
    getData() {
        console.log("aa",this.cid)
      var url = "/api/cook/index?key=b63137a192f9b1051023d19222402c3f&cid="+this.cid;
      this.$axios
        .get(url)
        .then((data)=> {
            console.log(data)
          if (data.status == 200) {
            this.cidData = data.data.result.data;
            console.log("vv",JSON.stringify(this.cidData))
            
          }
        })
        .catch((err)=> {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.bigBox {
  margin-top: 1.08rem;
}
.hotClass {
  .hotClassTitle {
    font-size: 0.4rem;
    color: #333;
    font-weight: 700;
    padding-left: 0.3rem;
    line-height: 0.8rem;
  }
  ul {
    li {
      float: left;
      width: 1.5rem;
      height: 1.5rem;
      background: url("../../assets/images/3.jpg") no-repeat center;
      margin-left: 0.3rem;
      margin-bottom: 0.3rem;
      border-radius: 0.1rem;

      p {
        height: 0.5rem;
        font-size: 0.28rem;
        line-height: 0.5rem;
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        margin-top: 1rem;
        border-bottom-right-radius: 0.1rem;
        border-bottom-left-radius: 0.1rem;
      }
    }
  }
}
</style>
