module.exports = {
    devServer: {
        proxy: {
            "/library": {
                target: "http://localhost:6060",
                ws: true,
                changeOrigin: true
            }
        }
    }
};