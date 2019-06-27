import draggable from './mini-draggable';

const miniDraggable = {
    install(Vue,options){
        Vue.component(draggable.name,draggable)
    }
}

export default miniDraggable;