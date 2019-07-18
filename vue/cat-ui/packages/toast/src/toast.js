import Toast from './toast.vue'

Toast.install = function(Vue){
    Vue.prototype.$toast = {
        show(){
            // console.log(123);
        }}
        Vue.component(Toast.name,Toast);
}
export default Toast;