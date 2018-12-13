// /**
//  * Created by fuyimin on 2017/5/1.
//  */
// // 为了避免自定义的Ajax方法被用户自定义的方法覆盖
// // 添加到命名空间下,进行最后一步优化
// // var fox = {
//


    function ajax_tool(option) {
        var xml;
        if (XMLHttpRequest){
            xml = new XMLHttpRequest();
        }else {
            xml = new ActiveXObject("Microsoft.XMLHTTP");
        }

        // // 格式化传入的数据为name=fox&age=18这样的格式
        // var formatStr = "";
        // for(var item in option.data){
        //     // 获取属性名,属性值,进行拼接
        //     formatStr+=item;// 属性名
        //     formatStr+="=";//等号
        //     formatStr+=option.data[item];//属性值
        //     formatStr+="&";//分隔符
        // }
        // // 去除最后一个&
        // formatStr = formatStr.slice(0,-1);

        if (option.method=="get"){
            option.url+="?";
            option.url+=option.data;
            console.log(option.url);
            option.data =null;
        }
        xml.open(option.method,option.url);

        if (option.method=="post"){
            xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        };

        xml.send(option.data);
        xml.onreadystatechange = function () {
            if (xml.status==200&&xml.readyState==4){
                option.success(xml.responseText);
            };
        }
    }

// }