import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'mint-ui/lib/style.css'
import './app.css'

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);


import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import router from './router.js'
import App from './app.vue'

let vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(App),
    router
});


