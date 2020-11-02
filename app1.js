// showForm.html
var express = require('express');
var app = express();
var body = require('body-parser') //อ่านข้อมูลจาก method post
var cookie = require('cookie-parser')
app.use(body());
app.use(cookie())
app.set('view engine', 'ejs');
// app.get('/showForm', function (req, res) {//display showForm
//     res.sendFile(__dirname + "/" + "showForm.html");
// });

// app.get('/showData', function (req, res) {//after submit
//     data = {//รับเป็น JSON
//         fname: req.query.fname,
//         lname: req.query.lname
//     };
//     console.log(data)
//     res.end(JSON.stringify(data));
// });

// app.post('/showData', function (req, res) {//ใช้ body parser เพื่ออ่าน ข้อมูลจาก post
//     data = {//รับเป็น JSON
//         fname: req.body.fname,
//         lname: req.body.lname
//     };
//     console.log(data)
//     // res.end(JSON.stringify(data)); //return JSON
//     res.end("<h1>" + data.fname + " " + data.lname + "</h1>"); //return JSON
// });

app.get('/createCookie',function (req, res) {
    res.cookie('myCookie','watunyu');//cookiename, value
    res.end("Create Cookie");
})
app.get('/deleteCookie',function (req, res) {
    res.clearCookie('myCookie');//cookiename, value
    res.end("Delete Cookie Complete");
})

app.listen(8081);