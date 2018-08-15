var express = require('express');
var app = express();//只执行一次

// middleware拿出来 执行多次 
// 从上到下，执行一次
// 伺候用户 薯片串
// 验证身份
// log bodyparser cookie session 错误处理 路由处理
var port = process.env.PORT || 8080;
var router = express.Router(); //为了带来controller

router.get('/',function(req, res){
    res.send('<h1>Hello world2</h1>')
})
router.get('/:name', function(req, res){
    res.send('<h1>Hello ' + req.params.name + '</h1>')
})

//启动 使用一个中间件，顺序
app.use('/home', router)

app.get('/',(req,res) => {
    res.send('<h1>Hello world</h1>')
});

app.listen(3000,function(){
    console.log(`web server在${port}端口伺服`)
})