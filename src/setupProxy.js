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

  /**
   * 將 http://localhost:3000/img/664cc2d6-8a53-4469-a8bb-f0f9bfa335d3.png
   * 變成 http://localhost:3001/img/664cc2d6-8a53-4469-a8bb-f0f9bfa335d3.png
   */
  app.use(
    '/img', // 代理 /img 開頭的請求
    createProxyMiddleware({
      target: 'http://localhost:3001', // 打去的後端 host
      changeOrigin: true,
    })
  )
}
