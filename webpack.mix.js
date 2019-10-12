// see: https://laravel-mix.com/docs/5.0/basic-example
const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

mix.webpackConfig({
  plugins: [
    new LiveReloadPlugin()
  ]
});

mix.react('frontend/js/app.js', 'public/js');
