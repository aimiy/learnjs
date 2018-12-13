/**
 * Created by fuyimin on 2017/4/25.
 */
//绑定到原型上,调用者是jquery对象,jquery对象扩展
$.fn.setColorRed = function () {
    this.css({"color":"red"});
}


//绑定到$上，调用者是$，全局jquery函数扩展
$.setColorRed = function (e) {
    e.css({"color":"red"});
}