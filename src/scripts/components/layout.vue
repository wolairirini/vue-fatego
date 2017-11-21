<template>
  <section>
    <v-header></v-header>
    <router-view class=".animated"></router-view>
    <v-footer></v-footer>
  </section>
</template>
<script>
import Footer from "../views/footer.vue";
import Header from "../views/header.vue";
export default {
  components:{
    "v-footer":Footer,
    "v-header":Header
  }
  
}
</script>
