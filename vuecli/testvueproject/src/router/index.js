import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/', component: resolve => require(['@/components/homeView'], resolve), children: [
            { path: "/", component: resolve => require(['@/views/home/home'], resolve) }
        ]
    },
    {
        path:'/maequee',component:resolve => require(['@/views/marquee'],resolve)
    }
]
const router = new VueRouter({
    routes
});

export default router;