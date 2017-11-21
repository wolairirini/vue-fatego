<template>
  <div class="mainbox">
    <div class="title usert">
      <h3>
        <span  @touchstart="back">&lt;</span>
        <span>注册</span>
        <router-link :to="{name:'login'}">登陆</router-link>
        </h3>
    </div>
    <div class="content user">
      <form action="post">
          <input @blur="isname" v-model="username" type="text" placeholder="用户名" name="username" id=""><br/>
          <input @blur="ispass" v-model="password" type="password" placeholder="密码" name="password"><br/>
          <input @blur="ismail" v-model="email" type="text" placeholder="注册邮箱" name="email"><br/>
          <input :disabled="register" @touchstart="registersucess" type="submit" value="注册"><br/>
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
            email:"",
            n:false,
            p:false,
            e:false
        }
    },
    computed:{
      register(){
        if(this.n&&this.p&&this.e){
          return false;
        }else{
          return "disabled"
        }
      }
    },
    methods:{
      isname(){
        var reg = /^\w{3,12}$/ig;
        var result = reg.test(this.username);
        if(!result){
           Toast({
                message: '请输入3-12位用户名',
                position: 'middle',
                duration: 2000,
                className:"logintxt"
          })
        }
        this.n = result
      },
      ispass(){
        var reg = /^\w{3,12}$/ig;
        var result = reg.test(this.password);
        if(!result){
           Toast({
                message: '请输入3-12位密码',
                position: 'middle',
                duration: 2000,
                className:"logintxt"
          })
        }
        this.p=result;
      },
      ismail(){
        var reg = /^\w+@{1}\w+\.com$/ig;
        var result = reg.test(this.email);
        if(!result){
           Toast({
                message: '请输入合法邮箱',
                position: 'middle',
                duration: 2000,
                className:"logintxt"
          })
        }
        this.e=result;
      },
        registersucess(){
          if(!this.register){
            var _this = this;
            axios({
                url:"http://localhost:7111/users/register",
                method:"post",
                data:{
                    username:_this.username,
                    password:_this.password,
                    email:_this.email
                }
            }).then(function(res){
                var data = res.data;
                Toast({
                message: '注册成功',
                position: 'middle',
                duration: 2000,
                className:"logintxt"
                });
                this.$router.push({name:"login"});
            })
                
            }else{
                Toast({
                message: '请填写正确信息',
                position: 'middle',
                duration: 2000,
                className:"logintxt"
                });
            }
        },
        back(){
          this.$router.go(-1);
        }
    }
}
</script>
