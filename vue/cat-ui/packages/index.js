import Toast from './toast';

const components = [
    
];


const install = function (Vue) {
    if (install.installed) return;
    install.installed = true;
    components.map(component => {
        Vue.component(component.name, component);
    });

    Vue.$toast = Vue.prototype.$toast = Toast;
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export {
    Toast
};
export default{
    install,
    ...components
}
