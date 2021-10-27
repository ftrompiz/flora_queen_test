module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://bouquets.herokuapp.com',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        }
    }
}