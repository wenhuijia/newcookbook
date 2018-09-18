<template>
<div>
    <div class="bigBox">
        <p class="topTitle">请先登录</p>
        <yd-cell-item>
            <span slot="left">用户名：</span>
            <yd-input slot="right" required v-model="loginData.name" max="20" placeholder="请输入用户名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">密码：</span>
            <yd-input slot="right" type="password" v-model="loginData.pass" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
        <div class="loginButton">
            <div @click="goLoing">
                <yd-button size="large"  type="danger">登录</yd-button>
            </div>
            <yd-button class="" size="large" type="warning">注册</yd-button>
        </div>
        <input v-model="input1" placeholder="请输入" type="text">
        <input v-model="input2" placeholder="请输入" type="text">
        <input v-model="input3" placeholder="请输入" type="text">
        <div>{{exitsVal}}</div>
    </div>
</div>
</template>
<style lang='scss' scoped>
.bigBox {
  margin-top: 1.28rem;
  .topTitle {
    text-align: center;
    font-size: 0.4rem;
    line-height: 1rem;
    color: #333;
    border-bottom: 1px solid #f4f4f4;
  }
  .loginButton {
    padding: 0 0.3rem;
  }
}
</style>
<script>
import { Toast } from 'mint-ui';//要引入
export default {
  data() {
    return {
        loginData:{
            name:"wenhuijia",
            pass:"123456"
        },
      input1:'',
      input2:'',
      input3:'',
      ifExist:'',
    }
  },
  created() {
      console.log(null=="")
      console.log(null==false)
      console.log(""==false)
  },
  methods: {
       goLoing(){
        let loginName = this.loginData.name;
        let logPass = this.loginData.pass;
        if(loginName==""){
           Toast('请输入用户名');
           return;
        }else{
        };
        if(logPass==""){
          Toast('请输入密码');
          return false;
        }else{
        };
        sessionStorage.setItem("userName",loginName)
        this.$router.push({path:"/home"})
      },

      isVal(){
          if(this.input1&&this.input2&&this.input3){//3个input都有值
              this.ishide =true //显示或是隐藏
          }else{
              this.ishide =false //显示或是隐藏
          }
          console.log(this.ishide)
      }

  },
 computed:{
    exitsVal:function(){
        this.ifExist=Number(Boolean(this.userName))+Number(Boolean(this.mailCode))+Number(Boolean(this.mailAd));
    }
  },
    watch:{
        // input1:function(a,b){
        //     console.log(a,b)
        //     console.log(this.input2)
        // }
    },
    updated(){
        this.isVal()
        JSON.stringify
    }
}
</script>