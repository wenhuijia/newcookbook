<template>
  <div>
      <div class="bigBox">
         <mt-navbar v-model="selected">
          <mt-tab-item class="myTitle" id="1">智能推荐</mt-tab-item>
          <mt-tab-item id="2">评分最多</mt-tab-item>
          <mt-tab-item id="3">做过最多</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div class="myContent">
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
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
           2
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
           3
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
  </div>
</template>
<script>
import bus from "../../assets/js/common.js";
export default {
  data() {
    return {
      jsonData: [],
      cidData: [],
      cid: "",
      selected:"1"
    };
  },
  created() {
    this.jsonData = this.$jsData.cookList;
    this.cidData = this.$jsData.cidList;
    this.cid = this.$route.query.id;
    bus.$emit("setTitleBus", this.$route.query.title);
    console.log(this.cidData)
    // this.getData();
  },
  methods: {
    aa() {},
    getData() {
      console.log("aa", this.cid);
      var url =
        "/api/cook/index?key=b63137a192f9b1051023d19222402c3f&cid=" + this.cid;
      this.$axios
        .get(url)
        .then(data => {
          console.log(data);
          if (data.status == 200) {
            this.cidData = data.data.result.data;
            // console.log("vv", this.cidData);
            console.log("vv", JSON.stringify(this.cidData));
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
};
</script>

<style lang="scss" scoped>
.bigBox {
  margin-top: 0.88rem;
}
.myContent{
  width: 100%;
  padding: 0 0.3rem;
  li{
    height: 2rem;
    margin-top: 0.3rem;
    img{
      height: 2rem;
      width: 2rem;
      border-radius: 0.1rem;
    }
    .contentSub{
      margin-left: 0.3rem;
      width: 4.5rem;
       p{
          color: #333;
       }
       p:nth-of-type(1){
         font-size: 0.4rem;
         font-weight: 700;
         line-height: 0.52rem;
       }
       p:nth-of-type(2){
         font-size: 0.24rem;
         line-height: 0.6rem;
         color: #666;
       }
       p:nth-of-type(3){
         font-size: 0.3rem;
         line-height: 0.4rem;
         color: #333;
       }
    }
   
  }
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
img[lazy=loading] {
  height: 2rem;
  width: 2rem;
  margin: auto;
  background: #333;
}

</style>
