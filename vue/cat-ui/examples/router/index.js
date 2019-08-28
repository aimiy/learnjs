import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Index = () => import("../components/index.vue")
const Button = () => import("../components/button.vue")
const Toast = () => import("../components/toast.vue")

const routes = [
    { path: '/', component: Index },
    { path: '/Button', component: Button },
    { path:'/Toast',component:Toast}
];

const router = new VueRouter({
    routes
});
export default router;