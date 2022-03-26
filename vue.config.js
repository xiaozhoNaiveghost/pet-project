module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //起别名
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "views": 'views',
        'network': 'network',
      }
    }
  }
}
