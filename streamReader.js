//stream มีการดักจับ event
var fs = require('fs');
var data = '';
var readStream = fs.createReadStream('code.txt');
readStream.setEncoding('utf8');//เข้ารหัส
readStream.on('data', function (txt) {
    data += txt; //data = data+txt
});
readStream.on('end',function () {
    console.log(data);
});
readStream.on('error',function (err) {//ถ้ามี error จะ return error
    console.log(err.stack)
});