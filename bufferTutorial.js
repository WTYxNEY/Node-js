var buf = new Buffer(26);
// console.log(buf.toString())
// len = buf.write("Watunyu");
// console.log(buf.toString())
for (let i = 0; i < 26; i++) {
    buf[i] = i+97;
    
}
console.log(buf.toString('ascii'))