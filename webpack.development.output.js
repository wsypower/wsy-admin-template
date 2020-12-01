{
  mode: 'development',
  context: '/Users/weiyafei/Documents/中国电信/cloud/cloud',
  devtool: 'cheap-source-map',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/weiyafei/Documents/中国电信/cloud/cloud/dist',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    symlinks: true,
    alias: {
      '@': '/Users/weiyafei/Documents/中国电信/cloud/cloud/src',
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@api': '/Users/weiyafei/Documents/中国电信/cloud/cloud/src/api'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules',
      '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing() {
            // ¯\_(ツ)_/¯
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules',
      '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/.cache/vue-loader',
              cacheIdentifier: '6a25684b'
            }
          },
          {
            loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-loader/lib/index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/.cache/vue-loader',
              cacheIdentifier: '6a25684b'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
        exclude: [
          '/Users/weiyafei/Documents/中国电信/cloud/cloud/src/assets/svg-icons/icons'
        ],
        use: [
          {
            loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        include: [
          '/Users/weiyafei/Documents/中国电信/cloud/cloud/src/assets/svg-icons/icons'
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'd2-[name]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.5\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import \'~@/assets/style/public.scss\';'
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.5\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import \'~@/assets/style/public.scss\';'
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.5\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import \'~@/assets/style/public.scss\';'
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.5\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import \'~@/assets/style/public.scss\';'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.5\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import \'~@/assets/style/public.scss\';',
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.5\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import \'~@/assets/style/public.scss\';',
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.5\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import \'~@/assets/style/public.scss\';',
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.26.5\t(Sass Compiler)\t[Dart]\ndart2js\t2.7.2\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import \'~@/assets/style/public.scss\';',
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/.cache/babel-loader',
              cacheIdentifier: '502aea0c'
            }
          },
          {
            loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/@vue/cli-service/lib'
        ],
        use: [
          {
            loader: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/eslint-loader/index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: 'ed255cb4',
              emitWarning: true,
              emitError: false,
              eslintPath: '/Users/weiyafei/Documents/中国电信/cloud/cloud/node_modules/eslint',
              formatter: undefined
            }
          }
        ]
      },
      /* config.module.rule('i18n') */
      {
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        use: [
          {
            loader: '@intlify/vue-i18n-loader'
          }
        ]
      },
      /* config.module.rule('md') */
      {
        test: /\.md$/,
        use: [
          {
            loader: 'text-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: false,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          VUE_APP_TITLE: '"wsy-cli Dev"',
          NODE_ENV: '"development"',
          VUE_APP_PROJECT_NAME: '"wsy-cli"',
          VUE_APP_API: '"/api/"',
          VUE_APP_REPO: '"https://github.com/d2-projects/d2-admin-start-kit"',
          VUE_APP_I18N_LOCALE: '"zh-chs"',
          VUE_APP_I18N_FALLBACK_LOCALE: '"en"',
          VUE_APP_ELEMENT_COLOR: '"#409EFF"',
          VUE_APP_VERSION: '"1.20.1"',
          VUE_APP_BUILD_TIME: '"2020-12-1 10:19:55"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'd2-admin',
        templateParameters: function () { /* omitted long function */ },
        template: '/Users/weiyafei/Documents/中国电信/cloud/cloud/public/index.html',
        cdn: []
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: '/Users/weiyafei/Documents/中国电信/cloud/cloud/public',
          to: '/Users/weiyafei/Documents/中国电信/cloud/cloud/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    /* config.plugin('theme-color-replacer') */
    new ThemeColorReplacer(
      {
        fileName: 'css/theme-colors.[contenthash:8].css',
        matchColors: [
          '#409EFF',
          '64,158,255',
          '#409eff',
          '#53a8ff',
          '#66b1ff',
          '#79bbff',
          '#8cc5ff',
          '#a0cfff',
          '#b3d8ff',
          '#c6e2ff',
          '#d9ecff',
          '#ecf5ff',
          '#f5faff',
          '#3a8ee6',
          '#337ecc'
        ],
        externalCssFiles: [
          './node_modules/element-ui/lib/theme-chalk/index.css'
        ],
        changeSelector: function () { /* omitted long function */ }
      }
    )
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
