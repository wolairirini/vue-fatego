<template>
  <div class="mainbox">
      <div class="title usert">
          <h3>
              <span @touchstart="back">&lt;</span>
              <span>登陆</span>
              <router-link :to="{name:'register'}">注册</router-link>
          </h3>
      </div>
      <div class="content user">
          <form action="post">
              <input @input="isok" v-model="username" type="text" placeholder="用户名" name="username" id=""><br/>
              <input @input="isok" v-model="password" type="password" placeholder="密码" name="password"><br/>
              <input :disabled="login" @touchstart="loginsucess" type="submit" value="登陆"><br/>
          </form>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import axios from 'axios';
export default {
    data(){
        return {
            username:"",
            password:"",
            login:"disabled"
        }
    },
    methods:{
        back(){
          this.$router.go(-1);
        },
        isok(){
            var _this = this;
            axios({
                url:"http://localhost:7111/users/login",
                method:"post",
                data:{
                    username:_this.username,
                    password:_this.password
                }
            }).then(function(res){
                var data = res.data;
                console.log(data);
                if(data){
                    _this.login = false;
                }else{
                    _this.login = "disabled";
                }
            })
        },
        loginsucess(){ 
            if(!this.login){
                localStorage.username = this.username;
                Toast({
                message: '登陆成功',
                position: 'middle',
                duration: 2000,
                className:"logintxt"
                });
            }else{
                Toast({
                message: '用户名或密码错误',
                position: 'middle',
                duration: 2000,
                className:"logintxt"
                });
            }
        }
    }
    
    
}
</script>

