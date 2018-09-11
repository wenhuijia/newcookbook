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
                  <yd-lightbox-img class="topImg" v-lazy="item.img"></yd-lightbox-img>
                </yd-lightbox>
                <p class="stepMsg">{{item.step}}</p>
              </li>
            </ul>
          </div>
          <comment :cookTitle="this.$route.query.title"></comment>
        </div>
        
      </div>
      <!-- :class="{changeColor:isCollect}" -->
      <div class="bottonDiv">
        <p @click="isCollectFun" class="changeColor" ><i :class="{'icon-shoucang':isCollect,'icon-shoucang1':!isCollect}" class="iconfont"></i><span :class="{changeColor:isCollect}">{{isCollect?"已收藏":"收藏"}}</span></p>
        <p @click="clearCook"><i class="iconfont icon-zhaoxiangji"></i><span>传作品</span></p>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';//要引入
import bus from "../../assets/js/common.js";
import comment from "../../components/subComponents/comment.vue";
export default {
  data() {
    return {
      jsonData: [],
      cidData: [],
      renderData:[],
      cid: "",
      selected: "1",
      isCollect:false,
      //保存的收藏收据
      collectCookDataList:[]
    };
  },
  created() {
    this.jsonData = this.$jsData.cookList;
    this.cidData = this.$jsData.cidList;
    this.cid = this.$route.query.id;
    bus.$emit("setTitleBus", this.$route.query.title);
    this.renderHmtl();
    // this.getData();
    console.log("ccc",this.renderData)
    console.log("bbb",JSON.parse(sessionStorage.getItem("collectCookData")))
    this.collectCookDataList = JSON.parse(sessionStorage.getItem("collectCookData"))||[];
    this.collectCookJudge();
  },
  methods: {
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
    },
    isCollectFun(){
      var collectCook = {"id":this.$route.query.id,"title":this.$route.query.title};
      if(!this.isCollect){
        if(this.collectCookDataList.length!=0){
          var newArr = [];
          this.collectCookDataList.forEach((v,i)=>{
            if(v.id==collectCook.id){
              newArr.push(v);
            }
          });
          if(newArr.length==0){
            this.collectCookDataList.unshift(collectCook);
            Toast({message:'收藏成功！可在"我的——我的收藏"中查看哦~',position: 'bottom',});
          };
        }else{
          this.collectCookDataList.unshift(collectCook);
          Toast({message:'收藏成功！可在"我的——我的收藏"中查看哦~',position: 'bottom',});
        };
      }else{
         if(this.collectCookDataList){
          this.collectCookDataList.forEach((v,i)=>{
            if(v.id==collectCook.id){
              this.collectCookDataList.splice(i,1);
            }else{
            };
          });
         }
      };
      sessionStorage.setItem("collectCookData",JSON.stringify(this.collectCookDataList));
      console.log("最终数据",sessionStorage.getItem("collectCookData"));
      this.isCollect = !this.isCollect;
      //状态管理方法 不实用
      // this.$store.dispatch('collectCookFun',collectCook);//第一步 获取值 并传入mian.js 不能保存为本地数据;
    },
    collectCookJudge(){
      if(this.collectCookDataList.length!=0){
        this.collectCookDataList.forEach((v,i)=>{
          console.log(v.id==this.$route.query.id)
          if(v.id==this.$route.query.id){
            this.isCollect = true;
            return;
          }
        });
      }
      console.log("fasfsaf",this.isCollect)
    },
    clearCook(){
      sessionStorage.removeItem("collectCookData");
      Toast({message:'此功能正在开发中...',position: 'bottom',});
    }
  },
  //注册子组件
  components:{
    comment
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
img[lazy=loading] {
  height: 2rem;
  width: 2rem;
  margin: auto;
  background: #333;
}
.bottonDiv{
  width: 100%;
  height: 1rem;
  border-top: 1px solid #f4f4f4;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;

  p{
    float: left;
    line-height: 1rem;
    color: #333;
    font-size: 0.34rem;
    margin-left: 1rem;
    i{
      font-size: 0.4rem;
    }
    span{
      margin-left: 0.1rem;
    }
  }
  p:nth-of-type(1){
    color:#ef4f4f;
  }
  .changeColor{
    color: #333;
  }
}

</style>
