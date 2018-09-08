<template>
    <div>
        <div class="commentList">
            <div  class="commentTitle"><p class="fl">{{this.cookTitle}}的评论</p><p class="fr"><span>{{this.msg.length}}</span><span>条留言</span></p></div>
            <ul v-for="(item,index) in msg" :key="index">
                <li>
                    <p class="clearfix"><img src="../../assets/images/1.jpg" alt=""><span class="commentName fl">{{item.msgName}}</span><span class="fr"><i class="iconfont icon-qita"></i><span class="approve">{{item.msgAgree}}</span></span></p>
                    <p class="commentMsg">{{item.msgContent}}</p>
                    <p class="commentTime">{{item.msgTime}}</p>
                </li>
            </ul>
        </div>
        <div class="commentFooter">
            <!-- <yd-cell-group title="发表评论">
                <yd-cell-item>
                    <yd-textarea  slot="right" placeholder="请输入您的评论" maxlength="100"></yd-textarea>
                </yd-cell-item>
            </yd-cell-group> -->
            <p class="footerTitle">发表评论</p>
            <textarea ref="textAreaRef" class="textArea" maxlength="100" placeholder="请输入您的评论" name="" id="" cols="15" rows="10"></textarea>
            <div @click="saveMsg">
                <yd-button  size="large" type="warning">提交评论</yd-button>
            </div>
           
        </div>
    </div>
</template>
<style lang="scss" scoped>
   .commentList{
       margin-top: 0.5rem;
       border-bottom: 1px dashed #f4f4f4;
       padding-bottom: 0.5rem;
       ul{
           margin-top: 0.3rem;
       }
       .icon-qita{
           font-size: 0.4rem;
       }
       .commentTitle{
           height: 1rem;
           font-size: 0.4rem;
           line-height: 1rem;
           font-weight: 700;
           color: #333;
           p:nth-of-type(2){
               font-weight: 400;
               color: #ef4f4f;
               font-size: 0.3rem;
           }
          
       }
       li{
           margin-top: 0.5rem;
           p{
               img{
                   width: 0.8rem;
                   height: 0.8rem;
                   border-radius: 0.4rem;
                   float: left;
               }
               span{
                   display: 0;
                   line-height: 0.8rem;
                   font-size: 0.3rem;
                   color: #666;
               }
               .commentName{
                   margin-left: 0.2rem;
               }
                .approve{
                    margin-left: 0.1rem;
                }
               
           }
           .commentMsg{
               font-size: 0.32rem;
               line-height: 0.4rem;
               color: #333;
               margin-top: 0.2rem;
           }
           .commentTime{
               font-size: 0.24rem;
               line-height: 0.4rem;
               color: #666;
               margin-top: 0.1rem;
           }
       }
   }
   .commentFooter{
       margin-top: 0.5rem;
       padding-bottom: 0.5rem;
   }
   .footerTitle{
       font-size: 0.3rem;
       line-height: 0.5rem;
   }
   .textArea{
       border:1px solid #f4f4f4;
       width: 100%;
       padding: 0.1rem;
       font-size: 0.28rem;
       height: 2rem;
   }
</style>
<script>
export default {
  data() {
    return {
        msg:[
            {
                msgName:"小李—~飞菜刀·",
                msgContent:"这道菜以前做过，还可以吧。。。。。看来后面还要多练练手咯",
                msgTime:"2018-08-09 10:22:36",
                msgAgree:"56"
            },
            {
                msgName:"wenhuijia1333·",
                msgContent:"我人的于顶戴戟革到本世纪末我人的于顶戴戟革到本世纪末我人的于顶戴戟革到本世纪末 枯该发生 ",
                msgTime:"2018-08-22 10:22:36",
                msgAgree:"42"
            }
        ]
    }
  },
  created() {},
  methods:{
    saveMsg(){
        const content = this.$refs.textAreaRef.value;//这是vue提供的方法
        var newData = {
                msgName:"游客",
                msgContent:content,
                msgTime:"2018-08-22 10:22:36",
                msgAgree:"0"
        };
        this.msg.unshift(newData);
        this.$refs.textAreaRef.value ="";
    }
  },
  props:['cookTitle']//父传子 由cookDetails.vue传入
};
</script>