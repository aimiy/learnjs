var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'id':19,
    'jsonrpc':'2.0',
    'method':'collectCoupon',
    'params':{
        "batcjCouponCode":"3a306713-4b10-cd2a-2aa6-76d9356da21c",
        "userCode":"4fda7e70-ec93-78fc-59ac-c90418e13ec6"}
})

var options = {
    hostname:'hfq.huift.com.cn',
    port:80,
    path:'/Api/Shop',
    method:'POST',
    headers:{
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en,zh-CN;q=0.9,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/json',
        'Cookie': 'PHPSESSID=v0f2p0jqse4p18nakggts50h00',
        'Host': 'hfq.huift.com.cn',
        'Origin': 'https://hfq.huift.com.cn',
        'Referer': 'https://hfq.huift.com.cn/huiquan/',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
    }
}

var req = http.request(options,function(res){
    console.log('status:' + res.statusCode);
    console.log('headers:' + JSON.stringify(res.headers))

    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })

    res.on('end',function(){
        console.log('完毕')
    })
})
    req.on('error',function(err){
        console.log(err)
    });
    req.write(postData);
    req.end();