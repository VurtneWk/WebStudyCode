
//1. 导入fs模块

const fs = require('fs')


fs.readFile('./素材/成绩.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log("读取失败=》" + err);
    }
    console.log("读取成功=》" + dataStr);
    //根据空格分割
    var dataList = dataStr.split(" ")

    const arrNew = []
    dataList.forEach(element => {
        //放入新数据 并替换 = 为 ：
        arrNew.push(element.replace("=", ":"))
    });
    //每个数据增加\n
    const newStr = arrNew.join("\n")

    console.log(newStr);

    fs.writeFile('./files/成绩-ok.txt', newStr, function (err) {
        if (err) {
            return console.log("写入失败");
        }
    })
    console.log("写入成功");

})