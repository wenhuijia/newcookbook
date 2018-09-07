<template>
  <div>
      <div class="bigBox">
        <!-- <img class="topImg" :src="renderData.albums" alt=""> -->
        <yd-lightbox>
          <yd-lightbox-img class="topImg" :src="renderData.albums[0]"></yd-lightbox-img>
        </yd-lightbox>
        <div class="bigContent">
          <div class="top">
            <p class="topTitle">{{renderData.title}}</p>
            <p class="topTitleSub">{{renderData.imtro}}</p>
          </div>
          <div class="content">
            <div class="mainCook">
              <p>食材:</p>
              <p>{{renderData.ingredients}}</p>
            </div>
            <div class="subCook">
              <p>配料:</p>
              <p>{{renderData.burden}}</p>
            </div>
          </div>
          <div class="stepBox">
            <ul v-for="(item,index) in renderData.steps" :key="index">
              <li>
                <p class="stepTop">步骤{{index+1}}</p>
                <!-- <img :src="item.img" alt=""> -->
                <yd-lightbox>
                  <yd-lightbox-img class="topImg" :src="item.img"></yd-lightbox-img>
                </yd-lightbox>
                <p class="stepMsg">{{item.step}}</p>
              </li>
            </ul>
          </div>
        </div>
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
      renderData:[],
      cid: "",
      selected: "1"
    };
  },
  created() {
    this.jsonData = this.$jsData.cookList;
    this.cidData = this.$jsData.cidList;
    this.cid = this.$route.query.id;
    bus.$emit("setTitleBus", this.$route.query.title);
    this.renderHmtl();
    // this.getData();
  },
  methods: {
    aa() {},
    getData() {
      console.log("aa", this.cid);
      var url =
        "/api/cook/queryid?key=b63137a192f9b1051023d19222402c3f&id=" + this.cid;
      this.$axios
        .get(url)
        .then(data => {
          console.log("ddd", data);
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
    renderHmtl(){
      this.cidData.forEach((v,i)=>{
        if(v.id==this.cid){
          this.renderData = v;
        };
      });
      console.log(this.renderData)
    }
  }
};
</script>

<style lang="scss" scoped>
.bigBox {
  // margin-top: 1.08rem;
}
.topImg {
  width: 100%;
}
.top {
  padding-bottom: 0.2rem; 
  border-bottom: 1px solid #f4f4f4;
  .topTitle {
    font-size: 0.5rem;
    font-weight: 700;
    color: #333;
    text-align: center;
    line-height: 1rem;
    margin-top: 0.5rem;
  }
  .topTitleSub {
    text-indent: 2em;
    font-size: 0.24rem;
    line-height: 0.45re;
  }
}
.bigContent{
  padding: 0 0.3rem;
}
.content{
  .mainCook{
    border-bottom: 1px solid #f4f4f4;
    padding-bottom: 0.2rem;
    p:nth-of-type(1){
      margin-top: 0.3rem;
      font-size: 0.42rem;
      line-height: 0.6rem;
      color: #333;
      font-weight: 700;
    }
    p:nth-of-type(2){
      font-size: 0.38rem;
      line-height: 0.6rem;
      color: #333;
    }
  }
  .subCook{
    border-bottom: 1px solid #f4f4f4;
    padding-bottom: 0.2rem;
    p:nth-of-type(1){
      margin-top: 0.3rem;
      font-size: 0.42rem;
      line-height: 0.6rem;
      color: #333;
      font-weight: 700;
    }
    p:nth-of-type(2){
      font-size: 0.34rem;
      line-height: 0.46rem;
      color: #333;
    }
  }
}
.stepBox{
  margin-top: 0.2rem;
  li{
    border-bottom: 1px solid #f4f4f4;
    padding-bottom: 0.2rem;
    margin-top: 0.2rem;
    .stepTop{
      font-size: 0.42rem;
      line-height: 0.6rem;
      color: #333;;
      font-weight: 700;
    }
    img{
      width: 100%;
    }
    .stepMsg{
      margin-top: 0.2rem;
      text-align: center;
      font-size: 0.3rem;
      line-height: 0.4rem;
      color: #333;
    }
  }
}
</style>
