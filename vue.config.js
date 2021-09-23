const CompressionWebpackPlugin = require('compression-webpack-plugin')
const VueFilenameInjector = require('@d2-projects/vue-filename-injector')
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
const WebpackBar = require('webpackbar')
const WebpackZipPlugin = require('zip-webpack-plugin')
const cdnDependencies = require('./dependencies-cdn')
const { chain, set, each } = require('lodash')
const path = require('path')
const webpack = require('webpack')
/* =============================================
=                   拼接路径函数                =
============================================= */
const resolve = dir => require('path').join(__dirname, dir)

/* =============================================
=                   增加环境变量                =
============================================= */
process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss')

/* =============================================
=          基础路径 注意发布之前要先修改这里       =
============================================= */
const publicPath = process.env.VUE_APP_PUBLIC_PATH || ''

/* =============================================
=                设置不参与构建的库              =
============================================= */
const externals = {}
cdnDependencies.forEach(pkg => {
  externals[pkg.name] = pkg.library
})

/* =============================================
=               引入文件的 cdn 链接             =
============================================= */
const cdn = {
  css: cdnDependencies.map(e => e.css).filter(e => e),
  js: cdnDependencies.map(e => e.js).filter(e => e)
}
/* =============================================
=               多页配置，默认未开启             =
============================================= */
/**
 * @see 如需要请参考 https://cli.vuejs.org/zh/config/#pages
 * @example
 * const pages = {
 *   index: './src/main.js',
 *   subpage: './src/subpage.js'
 * }
 */
const pages = undefined

// ##################################################################### //
// ########################## vue.config.js配置 ########################## //
// ##################################################################### //

module.exports = {
  // 根据你的实际情况更改这里
  publicPath,
  lintOnSave: true,
  // outputDir: '',
  devServer: {
    // 和 publicPath 保持一致
    publicPath,
    // 关闭 host check，方便使用 ngrok 之类的内网转发工具
    disableHostCheck: process.env.NODE_ENV === 'development'
  },
  css: {
    loaderOptions: {
      // 设置 scss 公用变量文件
      sass: {
        prependData: "@import '~@/assets/style/public.scss';"
      }
    }
  },
  pages,
  configureWebpack: config => {
    const configNew = {}
    if (process.env.NODE_ENV === 'production') {
      configNew.externals = externals
      configNew.plugins = [
        /* =============================================
        =                     gzip                    =
        ============================================= */
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false
        }),
        /* =============================================
        =               启动更美观的打包进度条            =
        ============================================= */
        new WebpackBar({
          name: process.env.VUE_APP_PROJECT_NAME,
          profile: true
        }),
        /* =============================================
        =              打包完成后自动压缩一份zip           =
        ============================================= */
        new WebpackZipPlugin({
          path: path.resolve(__dirname, 'zip'),
          filename: `distZip.${process.env.VUE_APP_VERSION}.zip`
        })
      ]
    }
    return configNew
  },
  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: config => {
    /* =============================================
    =     添加 CDN 参数到 htmlWebpackPlugin 配置中   =
    ============================================= */
    // TODO 如果部署的环境不支持访问cdn，需要再次做分包配置
    const htmlPluginNames = chain(pages)
      .keys()
      .map(page => 'html-' + page)
      .value()
    const targetHtmlPluginNames = htmlPluginNames.length
      ? htmlPluginNames
      : ['html']
    each(targetHtmlPluginNames, name => {
      config.plugin(name).tap(options => {
        set(
          options,
          '[0].cdn',
          process.env.NODE_ENV === 'production' ? cdn : []
        )
        return options
      })
    })

    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
     */
    config.plugins.delete('prefetch').delete('preload')
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve.symlinks(true)
    // 颜色提取器
    config.plugin('theme-color-replacer').use(ThemeColorReplacer, [
      {
        fileName: 'css/theme-colors.[contenthash:8].css',
        matchColors: [
          ...forElementUI.getElementUISeries(process.env.VUE_APP_ELEMENT_COLOR) // Element-ui主色系列
        ],
        externalCssFiles: [
          './node_modules/element-ui/lib/theme-chalk/index.css'
        ], // optional, String or string array. Set external css files (such as cdn css) to extract colors.
        changeSelector: forElementUI.changeSelector
      }
    ])
    // ====================================================== //
    // ======================== 开发环境 ======================== //
    // ====================================================== //
    config
      // 开发环境 sourcemap 不包含列信息
      .when(process.env.NODE_ENV === 'development', config =>
        config.devtool('cheap-module-source-map')
      )
      // ====================================================== //
      // ======================== 预览环境 ======================== //
      // ====================================================== //

      // 预览环境构建 vue-loader 添加 filename
      .when(process.env.VUE_APP_SCOURCE_LINK === 'TRUE', config =>
        VueFilenameInjector(config, {
          propName: process.env.VUE_APP_SOURCE_VIEWER_PROP_NAME
        })
      )
    // ====================================================== //
    // ======================== 正式环境 ======================= //
    // ====================================================== //
    config.when(process.env.NODE_ENV === 'production', config => {
      // 压缩html中的css
      config.plugin('html').tap(args => {
        args[0].minify.minifyCSS = true
        return args
      })
      // 在 optimization没有进行再次分包处理,因为进行了cdn分包优化
      // TODO 如果部署的环境不支持访问cdn，需要再次做分包配置
      // webpack-minimizer terser注释console.log
      config.optimization.minimizer('terser').tap(args => {
        const terserOptionsCompress = args[0].terserOptions.compress
        args[0].terserOptions.compress = Object.assign(terserOptionsCompress, {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log']
        })
        return args
      })
      // ====================================================== //
      // ================= chunks splitChunks ================= //
      // ====================================================== //
      // config.optimization.splitChunks({
      //   automaticNameDelimiter: '-',
      //   chunks: 'all',
      //   cacheGroups: {
      //     chunk: {
      //       name: 'urp-chunk',
      //       test: /[\\/]node_modules[\\/]/,
      //       minSize: 131072,
      //       maxSize: 524288,
      //       chunks: 'async',
      //       minChunks: 2,
      //       priority: 10
      //     },
      //     vue: {
      //       name: 'vue',
      //       test: /[\\/]node_modules[\\/](vue(.*)|core-js)[\\/]/,
      //       chunks: 'initial',
      //       priority: 20
      //     },
      //     elementUI: {
      //       name: 'element-ui',
      //       test: /[\\/]node_modules[\\/]element-ui(.*)[\\/]/,
      //       priority: 30
      //     },
      //     extra: {
      //       name: 'ty-extra',
      //       test: resolve('src/extra'),
      //       priority: 40
      //     },
      //     echarts: {
      //       name: 'echarts',
      //       test: /[\\/]node_modules[\\/](echarts|zrender|tslib)[\\/]/,
      //       priority: 50
      //     }
      //   }
      // })
    })
    // ====================================================== //
    // ======================= banner ======================= //
    // ====================================================== //
    config
      .plugin('banner')
      .use(webpack.BannerPlugin, [
        `${process.env.VUE_APP_PROJECT_NAME}-${process.env.VUE_APP_BUILD_TIME}`
      ])
    // markdown
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end()
    // svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.include
      .add(resolve('src/assets/svg-icons/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'd2-[name]'
      })
      .end()
    // image exclude
    const imagesRule = config.module.rule('images')
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude.add(resolve('src/assets/svg-icons/icons'))
      .end()
    // ====================================================== //
    // ===================== 重新设置 alias ===================== //
    // ====================================================== //
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@components', resolve('src/components'))
      .set('@common', resolve('src/common'))
      .set('@plugin', resolve('src/plugin'))
      .set('@views', resolve('src/views'))
    // ====================================================== //
    // ======================== 分析工具 ======================== //
    // ====================================================== //
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  // 不输出 map 文件
  productionSourceMap: false
}
