module.exports = {
    publicPath:'./',
    devServer:{
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8080',
        https: false,  //是否使用https协议
        hotOnly: true, //是否开启热更新
    }
}