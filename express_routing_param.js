var express = require('express');
var routing = express();
routing.get('/', function (req, res) {
    res.send("<h1>Hello User</h1>");
});

routing.use('/user/profile/:name', function (req, res, next) {//middleware เพื่อดักจับ req
    console.log("Request:" + req.params.name + " " + new Date(), req.method, req.url);
    //ดูค่า date, req, url ตอนที่ req มา
})
// routing.get('/user/profile/:id', function (req, res) {

//     res.send("<h1>Node JS by " + req.params.id + "</h1>");
// });

routing.listen(3000);