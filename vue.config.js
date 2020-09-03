'use strict';
const path = require('path');
const defaultSettings = require('./src/settings.js');

function resolve(dir) {
  return path.join(__dirname, dir);
}

// 处理加载压缩包
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';

const name = defaultSettings.title || '新兴铸管'; // page title

const port = process.env.port || process.env.npm_config_port || 9527; // dev port

const targetUrl = process.env.VUE_APP_DEV_REQUEST_DOMAIN_PREFIX
// prod-api  dev-api  api
const proxyUrl = process.env.VUE_APP_BASE_API

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false,
  productionSourceMap: false, //map  加密
  devServer: {
    port: port,
    //open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // change xxx-api/login => ≥mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [proxyUrl]: {
        target: targetUrl,
        changeOrigin: true,
        pathRewrite: {
          // SpringCloud 项目使用这段配置
          ['^' + proxyUrl]: proxyUrl
        }
      },
      "/api": {
        target: "http://120.26.6.23:8087/schelule", // 要请求的后台地址
        ws: true, // 启用websockets
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '/api'
        }
      },
    }


  },
  // configureWebpack: {
  //   name: name,
  // },
  configureWebpack: config => {
    if (isProduction) {
      // 为生产环境修改配置...
      config.plugins.push(new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
        threshold: 10240,
        minRatio: 0.8
      }))
    }
  },
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'))
    config.plugin('preload').tap(() => [{
      rel: 'preload',
      fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
      include: 'initial'
    }]);

    config.entry('main').add('babel-polyfill'); // 解决浏览器兼容性问题

    config.plugins.delete('prefetch');

    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();

    config.when(process.env.NODE_ENV !== 'development', config => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [{
          // `runtime` must same as runtimeChunk name. default is `runtime`
          inline: /runtime\..*\.js$/
        }])
        .end();
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      // config.optimization.runtimeChunk("single");
    });
  }
};
