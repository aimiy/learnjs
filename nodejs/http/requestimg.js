var http = require("https");
var request = require('request');
var fs = require("fs");//用来操作文件
var cheerio = require("cheerio");
var url = "https://movie.douban.com/cinema/nowplaying/wuhan/";

function deal( data ) {
    if(data){
        var $=cheerio.load(data);
        $('.mod-bd img').each(function(index,item){
            var imgName = $(this).attr('alt');
            var imgfile = imgName + '.jpeg';
            var imgSrc = $(this).attr('src');
            //采用request模块，向服务器发起请求 获取图片资源
            request.head(imgSrc, function(error, res,body){
                if(error){
                    console.log('失败了')
                }
            });
            //通过管道的方式用fs模块将图片写到本地的images文件下
            request(imgSrc).pipe(fs.createWriteStream('./imgs/' + imgfile));
        });
    }
}

http.get(url,function(res){
    var html = "";
    // res.setHeader('content-type', 'text/html;charset=gbk');
    res.setEncoding('utf-8')
    res.on("data",function(chunk){
        html += chunk;
    });
    res.on("end",function(){
        deal(html);
    });
}).on("error",function(err){
    console.log(err)
});