// var response = require('./method.js')
// console.log(response.update())
// console.log(response.pi)
// console.log(response.addition(1,2))
// response.data.updateData()
// response.data.deleteUser()
//-----------------------File System Read File-----------------------------//
var fs = require('fs');//call function File System
var readMe = fs.readFileSync('./code.txt','utf8');
// console.log(readMe)
//-----------------------File System Write File-----------------------------//
// fs.writeFileSync('HelloNodeJs.txt',readMe);
// fs.mkdir('Project',function(){//crate diractory
//     fs.writeFileSync('./Project/Readme.txt',readMe);
// });
// fs.rmdir('Project',function(){//remove diractory
//     fs.unlinkSync('./Project/Readme.txt');
// })

