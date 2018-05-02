var http = require('http');
var url = 'http://coding.imooc.com/class/chapter/212.html#Anchor';
var cheerio = require('cheerio');

function filterChapters(html){
    var $ = cheerio.load(html)
    
    var chapters = $('.chapter-ul')
    var courseData = []

    chapters.each(function(item) {
        var chapter = $(this);
        var chapterTitle = chapter.find('h5').text();
        var chapterContent = chapter.find('.chapter-bd').children('p')
        var chapterData = {
            chapterTitle:chapterTitle,
            chapterContent:chapterContent
        };

        console.log(chapterTitle)
    })
        return courseData;
}

http.get(url,function(res){
    var html = ''

    res.on('data',function(data){
        html+=data
    })

    res.on('end',function(){
        var courseData = filterChapters(html);
        console.log(courseData)
    })
}).on('error',function(){
    console.log('获取课程出错')
})