const Dotenv = require('dotenv-webpack');

module.exports = {
    lintOnSave: false,
    publicPath: process.env.VUE_BASE_URL || '/',
    productionSourceMap: false,

    configureWebpack: {
        plugins: [
            new Dotenv(),
        ]
    },

    devServer: {
        disableHostCheck: true
    },
    transpileDependencies: [
        'resize-detector', // vue-echarts
    ]
}