<template>
  <div class="mainbox">
      <div class="title">
          <h3>个人中心</h3>
      </div>
      <div class="content">
          <aside v-if="!islogin">
              <router-link :to="{name:'login'}">
              <h4></h4>
              <h5>登陆</h5>
              </router-link>
          </aside>
          <aside v-if="islogin">
              <h4></h4>
              <h5>{{username}}</h5>
          </aside>
          <!-- <aside :style="isactive">
              <h4>head</h4>
              <h5>username</h5>
          </aside> -->
          <ul>
              <router-link :to="{name:'mystate'}"><li>我的动态</li></router-link>
              <router-link :to="{name:'message'}"><li>我的消息</li></router-link>
              <router-link :to="{name:'collection'}"><li>我的收藏</li></router-link>
              <router-link :to="{name:'setting'}"><li>设置</li></router-link>
          </ul>
      </div>
  </div>
</template>
<script>
import router from "vue-router";
export default {
    data(){
        return {
            username:localStorage.username,
            islogin:false
        }
    },
    created(){
        if(localStorage.username){
            this.islogin = true;
            this.username = localStorage.username;
        }else{
            this.islogin = false;
        }
    }
}
</script>


