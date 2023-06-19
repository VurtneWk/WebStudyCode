const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3030, //端口号修改
    open: true,//浏览器自动打开
  },
  lintOnSave: false,//关闭lint检查
})
