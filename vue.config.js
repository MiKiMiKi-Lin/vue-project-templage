module.exports = {
  chainWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      // 生产环境忽略打包的库
      config.externals({
        'element-ui': 'ELEMENT'
      })
    }
  }
}
