var http = require('http');
// 创建http服务
var app = http.createServer(function (req, res) {
    // 查询本机ip
    var sreq = http.request({
        host:     'www.baidu.com', // 目标主机
        path:     '/', // 目标路径
        method:   req.method // 请求方式
    }, function(sres){
        sres.pipe(res);
        sres.on('end', function(){
            console.log('done');
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
});
// 访问127.0.0.1:3001查看效果
app.listen(3001);
console.log('server started on 127.0.0.1:3001');