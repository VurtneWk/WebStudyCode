
// 如果在package.json里加了  "type": "module" 就用不了require //（import也报错了 ）
const p = require('path');
// import p from 'path'

module.exports = {
    entry: './src/main.js', // webpack入口
    output: { // 出口
        path: p.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};