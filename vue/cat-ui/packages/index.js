import Toast from './toast/index.js';

const components = [
    Toast
]

const install = function (Vue) {
    Vue.prototype.$toast = {
        show() {
            // console.log(123);
        }
    }
    if (install.installed) return
    install.installed = true
    components.map(component => {
        Vue.component(component.name, component);
    })

    
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install,
    ...components
}