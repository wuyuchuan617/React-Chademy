const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api', // 代理 /api 開頭的請求
    createProxyMiddleware({
      target: 'http://localhost:3001', // 打去的後端 host
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // 去除 api
      },
    })
  )
}
