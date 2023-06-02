

const path = require('path')
const fs = require('fs')

// 注意：  ../ 会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr);


fs.readFile(path.join(__dirname, ".././FS/files/3.txt"), "utf-8", function (err, str) {
    if (err) {
        return console.log(err);
    }
    console.log(str);
})