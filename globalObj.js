// console.log(__filename);//เก็บชื่อ file ที่เราทำงานอยู่
// console.log(__dirname);//เก็บชื่อ directory(folder) ที่เราทำงานอยู่
function printHello() {
    console.log("Hello World")
}
// var t = setTimeout(printHello, 2000);
// clearTimeout(t);//clear setTimeout
setInterval(printHello, 2000); //ทำงานต่อเนื่องทุกๆครั้งตามเวลาที่กำหนด