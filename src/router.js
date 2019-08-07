
import VueRouter from 'vue-router'

import Login from './components/login.vue'
import Register from './components/register.vue'
import user1 from './components/child/user1.vue'
import user2 from './components/child/user2.vue'
let router = new VueRouter({
    routes: [
        {path:'/',redirect:'/register'},
        {path:'/',redirect:'/login'},
        {path: '/login', component: Login},
        {
            path: '/register', component: Register, children:[
                {path: 'user1', component: user1},
                {path: 'user2', component: user2},
            ]
        }]
});

export default router