import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path:'/foo/:id',
        component:()=>import('@/components/foo.vue'),
        props:(route)=>{
            return {query:route.query.q}
        }
    },
    {
        path:'/bar',
        component:()=>import('@/components/bar.vue')
    },
]
const router = new VueRouter({
    routes
     // (缩写) 相当于 routes: routes
})

export default router