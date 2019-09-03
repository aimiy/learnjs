import Vue from 'vue';
import toastcompont from './toast.vue';

const ToastConstructor = Vue.extend(toastcompont);

// let toastPool = [];

// let getAnInstance = () => {
//   if (toastPool.length > 0) {
//     let instance = toastPool[0];
//     toastPool.splice(0, 1);
//     return instance;
//   }
//   return new ToastConstructor({
//     el: document.createElement('div')
//   });
// };

// let returnAnInstance = instance => {
//   if (instance) {
//     toastPool.push(instance);
//   }
// };

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

// ToastConstructor.prototype.close = function() {
//   this.visible = false;
//   this.$el.addEventListener('transitionend', removeDom);
//   this.closed = true;
//   returnAnInstance(this);
// };

// let Toast = (options = {}) => {
//   let duration = options.duration || 3000;

//   let instance = getAnInstance();
//   instance.closed = false;
//   clearTimeout(instance.timer);
//   instance.message = typeof options === 'string' ? options : options.message;
//   instance.position = options.position || 'middle';
//   instance.className = options.className || '';
//   instance.iconClass = options.iconClass || '';

//   document.body.appendChild(instance.$el);
//   Vue.nextTick(function() {
//     instance.visible = true;
//     instance.$el.removeEventListener('transitionend', removeDom);
//     ~duration && (instance.timer = setTimeout(function() {
//         console.log(closed);
        
//       if (instance.closed) return;
//       instance.close();
//     }, duration));
//   });
//   return instance;
// };

let getAnInstance = () => {
    return new ToastConstructor({
        el: document.createElement('div')
    })
}

ToastConstructor.prototype.close = function() {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
};

let Toast = (options = {}) => {
    let duration = options.duration || 1000;

    let instance = getAnInstance()
    document.body.appendChild(instance.$el);
    instance.message = typeof options === 'string' ? options : options.message;
    instance.position = options.position || 'middle';
    instance.visible = true;
    Vue.nextTick(() => {
        setTimeout(() => {
            // instance.close();
            instance.visible = false;
            instance.$el.addEventListener('transitionend', removeDom);
            // console.log(12);
        }, duration);
    })
}

export default Toast;
