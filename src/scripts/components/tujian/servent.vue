<template>
  <div class="mainbox tjbox">
    <div class="title tjtitle">
      <h3>英灵图鉴<span @touchstart="back">&lt;</span>
      </h3>
      
    </div>
    <div class="content tjcontent">
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
      <div class="list">
        <img v-for="(item,i) in list" :key="i" :src="item.img">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import axios from 'axios';
import {mapActions} from "vuex";
export default {
  data(){
      return {
          value:"",
          list:[]
      }
  },
  created(){
      var _this = this;
      axios({
          url:"http://localhost:7111/servent",
          method:"get",
      }).then(function(res){
          var data = res.data;
          _this.list = data;
      })
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
  }


}
</script>

