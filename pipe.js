//อ่านและเขียนในเวลาเดียวกัน
var fs = require('fs');
var reader = fs.createReadStream('code.txt')
var writer = fs.createWriteStream('file1.txt');
writer.on('finish',function(){
    console.log("Output Finish !!")
});
reader.pipe(writer);//อ่านข้อมูลใน reader แล้วเอาไปเขียนใน writer