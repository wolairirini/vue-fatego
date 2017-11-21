

import Vue from "vue";
import router from "./router";

import MintUI from "mint-ui";
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

import store from "../vuex/store";
import "../../utils/flexible.js";

import axios from 'axios';
Vue.prototype.axios = axios;
const vm = new Vue({
    el:"#app",
    router,
    store
})