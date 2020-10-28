const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://paa-restapi-job-board.herokuapp.com',
            changeOrigin: true,
        })
    );
};
