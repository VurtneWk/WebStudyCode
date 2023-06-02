

const fs = require("fs")
const path = require('path')


const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, "素材/index.html"), "utf-8", function (err, data) {
    if (err) {
        return console.log("读取失败==》" + err);
    }


    resolveCSS(data)
    resolveJS(data)
    resolveHTML(data)
});

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    console.log(r1?.length);
    if (r1) {
        const newCSS = r1[0].replace('<style>', '').replace('<\/style>', '')
        fs.writeFile(path.join(__dirname, "./clock/index.css"), newCSS, function (err) {
            if (err) {
                return console.log("写入css样式失败=》" + err);
            }
            console.log("写入CSS样式成功");
        })
    }
    // const regex = /a(b+)c/;
    // const str = "abbbc";
    // const result = regex.exec(str);
    // console.log(result?.length);
    // console.log(result);
}

// 4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr) {
    // 4.2 通过正则，提取对应的 <script></script> 标签内容
    const r2 = regScript.exec(htmlStr)
    // 4.3 将提取出来的内容，做进一步的处理
    if (r2 == null) return
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
        if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
        console.log('写入 JS 脚本成功！')
    })
}

// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
    // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
    // 5.3 写入 index.html 这个文件
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function (err) {
        if (err) return console.log('写入 HTML 文件失败！' + err.message)
        console.log('写入 HTML 页面成功！')
    })
}
