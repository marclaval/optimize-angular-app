var path = require('path');
var webpack = require('webpack');

// Webpack Plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
    'app': './app/main.universal.ts' // our angular app
  };

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   */
  config.output = {
    path: root('dist', 'universal'),
    publicPath: '',
    filename: 'js/[name].js',
    chunkFilename: '[id].chunk.js'
  };

  /**
   * Resolve
   * Reference: http://webpack.github.io/docs/configuration.html#resolve
   */
  config.resolve = {
    modules: [root('app'), root('public', 'universal'), 'node_modules'],
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
        loaders: [
          'awesome-typescript-loader?' + JSON.stringify({
            target: 'es5',
            module: 'commonjs',
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            lib: ['es2015', 'dom'],
            typeRoots: ['./node_modules/@types']
          }),
          'angular2-router-loader?aot=true&genDir=./app'],
        include: [root('app'), root('node_modules')]
      },
      // support for .html as raw text
      {test: /\.html$/, loader: 'raw'}
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

    // Inject script and link tags into html files
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './tmp/universal/index.html',
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