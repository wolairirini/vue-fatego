<template>
    <mt-swipe @change="handleChange" :continuous=false :auto="0">
        <mt-swipe-item><img src="../../assets/img/swipe/timg.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/swipe/timg2.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/swipe/timg3.jpg"></mt-swipe-item>
    </mt-swipe>
</template>
<script>
import {mapState} from "vuex";
import router from "./router"
export default {
    methods:{
        handleChange(index){
            
            var _this = this;
            setTimeout(()=>{
                _this.$router.push("/index")
            },2000)
        }
    },
    beforeRouteEnter(to,from,next){
        if(localStorage.isvisited){
            router.push("/index/home/master");
        }else{
            localStorage.isvisited = true;
            next();
        }
    }
}
</script>

<style scoped>
    img{
        width: 100%;
        height: 100%;
    }
</style>
