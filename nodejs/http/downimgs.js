var http = require('https');
var fs = require("fs");//用来操作文件
var cheerio = require("cheerio");
var url = "https://book.douban.com/";

function down(data){
    var $ = cheerio.load(data);
    $('.popular-books .bd img').each(function(i,elem){
        var imgSrc=$(this).attr("src");
        var imgName = $(this).attr("alt");
        http.get(imgSrc,function(res){
            var imgData="";
            res.setEncoding("binary");
            res.on("data",function(chunk){
                imgData += chunk;
            });
            res.on("end",function(){
                var imgPath="/"+imgName+"."+imgSrc.split(".").pop();
                console.log(imgPath);
                fs.writeFile(__dirname + "/bookimages"+imgPath,imgData,"binary",function(err){
                    console.log(err);
                })
            })

        })
    })
}

http.get(url,function(res){
    var html = '';
    res.on('data',function(chunk){
        html += chunk;
    });
    res.on('end',function(){
        down(html);
    })
}).on("error",function(err){
    console.log(err)
});