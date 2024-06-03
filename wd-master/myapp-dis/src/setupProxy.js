const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://wq.bwstudent.com:7999",
      changeOrigin: true,
      pathRewrite: {
        "/api": "",
      },
    })
  );
};