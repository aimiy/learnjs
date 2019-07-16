import miniDraggable from './mini-draggable.vue';

miniDraggable.install = function (Vue) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }
  
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind () {
        // 逻辑...
      }
      
    })
  
    // 3. 注入组件选项
    Vue.mixin({
      created: function () {
        // 逻辑..
        // console.log(123);
        
      }
      
    })
  
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
      // 逻辑...
    }
  }
export default miniDraggable;