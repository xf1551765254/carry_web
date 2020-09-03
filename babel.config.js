const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  presets: [
    // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
    '@vue/cli-plugin-babel/preset'
  ],
  'env': {
    'development': {
      // babel-plugin-dynamic-import-node plugin only does one thing by converting all import() to require().
      // This plugin can significantly increase the speed of hot updates, when you have a large number of pages.
      // https://panjiachen.github.io/vue-element-admin-site/guide/advanced/lazy-loading.html
      'plugins': ['dynamic-import-node'] // 实现异步加载
    }
  },
  "plugins": [
    // '@babel/plugin-syntax-dynamic-import'
    [
      // "import",
      // {
      //   "libraryName": "element-ui",
      //   "styleLibraryName": "theme-chalk"
      // },
      //配置路由懒加载插件
      ...prodPlugins,
      "@babel/plugin-syntax-dynamic-import"
      // "syntax-dynamic-import"
    ]
  ]
}
