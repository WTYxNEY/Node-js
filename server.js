var http = require('http');
var fs = require('fs');
var myUsers = {
    "name": "Watunyu",
    "job": "Programmer",
    "age": 22
}
http.createServer(function (req, res) {

    //{'Contect-type':'text/plain'}เพื่อบอกว่าจะตอบด้วยข้อความ(ปัจจุบันแสดง html ได้)
    // res.end("Hello World");//สิ้นสุด response ให้ทำอะไร

    // {'Contect-type':'text/html'} แสดงผล html 


    // res.writeHead(200,{'Contect-type':'application/json'});
    // res.end(JSON.stringify(myUsers)); // ใช้กับ file JSON

    if (req.url === '/home' || req.url === '/') { // Basic Routing
        res.writeHead(200, { 'Contect-type': 'text/html' });
        var myStream = fs.createReadStream(__dirname + "/" + "index.html", 'utf8'); //ใช้กับ html
        myStream.pipe(res);
    }
    else if (req.url === '/facebook') {
        res.writeHead(200, { 'Contect-type': 'text/html' });
        var myStream = fs.createReadStream(__dirname + "/" + "facebook.html", 'utf8'); //ใช้กับ html
        myStream.pipe(res);
    }
    else if (req.url === '/youtube') {
        res.writeHead(200, { 'Contect-type': 'text/html' });
        var myStream = fs.createReadStream(__dirname + "/" + "youtube.html", 'utf8'); //ใช้กับ html
        myStream.pipe(res);
    }
    else {
        res.writeHead(404, { 'Contect-type': 'text/html' });
        var myStream = fs.createReadStream(__dirname + "/" + "notfound.html", 'utf8'); //ใช้กับ html
        myStream.pipe(res);
    }

}).listen(8081, '127.0.0.1');//เข้าใน chrome => http://127.0.0.1:8081/