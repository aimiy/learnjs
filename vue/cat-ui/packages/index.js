import Toast from './toast';
import Button from './button';
import foldList from './foldList'
import Cell from './cell'
import Header from './header'
import "./assets/fonts/style.css"

const components = [
    Button,
    foldList,
    Cell,
    Header
];


const install = function (Vue) {
    if (install.installed) return;
    // install.installed = true;
    components.map(component => {
        Vue.component(component.name, component);
    });

    Vue.$toast = Vue.prototype.$toast = Toast;
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
// 按需引用{}的export
export {
    Toast,
    Button,
    foldList,
    Cell,
    Header
};
// 全局引用安装install
export default{
    install,
    ...components
}
