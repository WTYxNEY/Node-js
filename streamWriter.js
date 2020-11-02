var fs = require('fs');
var data = 'Watunyu Panmun'
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'utf8');
writerStream.end();
writerStream.on('finish',function(){
    console.log("Output Finish !!")
});