var express = require('express');
var app = express();
app.set('view engine', 'ejs');
// app.get('/:name',function(req,res){
app.get('/', function (req, res) {
    var data = {
        user: "Watunyu",
        age: 22,
        job: "student"
    }
    // res.render('profile',{person: req.params.name,data:data});
    res.render('profile', { person: data });
})
app.get('/contract', function (req, res) {
    res.render('contract')
})
app.get('/database', function (req, res) {
    res.render('database')
})
app.listen(3000);