var buf1 = new Buffer("Watunyu");
var buf2 = new Buffer("Panmun");
var bufConcat = Buffer.concat([buf1,buf2])
// var json = buf.toJSON(buf);
// console.log(json)
console.log(bufConcat.toString())