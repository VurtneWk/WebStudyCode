
// 使用npm install moment 或者 npm i moment 安装

// node_modules 文件夹用来存放所有已安装到项目中的包。require() 导入第三方包时，就是从这个目录中查找并加载包。
// package-lock.json 配置文件用来记录 node_modules 目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等。


// npm install 命令安装包的时候，会自动安装最新版本的包。如果需要安装指定版本的包，可以在包名之后，通过 @ 符号指定具体的版本
// npm i moment@2.22.2

// 包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如 2.24.0
// 其中每一位数字所代表的的含义如下：
// 第1位数字：大版本
// 第2位数字：功能版本
// 第3位数字：Bug修复版本
// 版本号提升的规则：只要前面的版本号增长了，则后面的版本号归零。


const m = require('moment');

const dt = m().format('YYYY-MM-DD HH:mm:ss');

console.log(dt);


