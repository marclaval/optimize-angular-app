var path = require('path');
var webpack = require('webpack');

// Webpack Plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var aotplugin = require('@ngtools/webpack');

module.exports = function makeWebpackConfig() {
  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {};

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  config.devtool = 'source-map';

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   */
  config.entry = {
    'app': './app/main.jit.ts' // our angular app
  };

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   */
  config.output = {
    path: root('dist', 'aot-webpack'),
    publicPath: '',
    filename: 'js/[name].js',
    chunkFilename: '[id].chunk.js'
  };

  /**
   * Resolve
   * Reference: http://webpack.github.io/docs/configuration.html#resolve
   */
  config.resolve = {
    modules: [root('app'), root('public', 'aot-webpack'), 'node_modules'],
    // only discover files that have those extensions
    extensions: ['.ts', '.js', '.html']
  };

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */
  config.module = {
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack',
        include: [root('app'), root('node_modules')]
      },
      // support for .html as raw text
      {test: /\.html$/, loader: 'raw-loader'}
    ],
    noParse: [/.+zone\.js\/dist\/.+/]
  };

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [
    // Define env variables to help with builds
    // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      // Environment helpers
      'process.env': {
        ENV: 'build',
        version: JSON.stringify(require('./package.json').version)
      }
    }),

    // Reference: https://github.com/angular/angular-cli/tree/master/packages/webpack
    new aotplugin.AotPlugin({
      tsConfigPath: './tsconfig-aot.json',
      entryModule: './app/module#AppModule'
    }),

    // Inject script and link tags into html files
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './public/aot-webpack/index.html',
      chunksSortMode: 'dependency'
    }),

    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    }),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
    // Only emit files when there are no errors
    new webpack.NoErrorsPlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // Dedupe modules in the output
    // TODO: reactivate once fixed, see https://github.com/webpack/webpack/issues/2644
    //new webpack.optimize.DedupePlugin(),

    // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      output: {comments: false},
      sourceMap: true
    })
  ];

  return config;
}();

// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}