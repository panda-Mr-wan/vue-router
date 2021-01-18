module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'vue$':'vue/dist/vue.esm.js'
            }
        }
    },
    devServer: {
        proxy:{
            "/data": {
                target:"http://www.bjlink32.com/data5.php?cateID=10001",
                ws:true,
                changeOrigin:true,
                pathRewrite: {
                    '^/data': ''
                }
            }
        }
    }
}