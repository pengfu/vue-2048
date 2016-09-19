var path = require('path')
module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  module: {
    loaders: [{
      test: /\.vue?$/,
      exclude: /node_modules/,
      loader: 'vue'
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    },{
      test: /\.scss$/,
      include:[path.join(__dirname,'src/assets/scss')],
      loader: "style!css!postcss!sass"
    },{
      test: /\.css$/,

      loader: "style!css!postcss"
    },{
      test: /\.css$/,
      include: /node_modules/,
      loader: 'style!css'
    },{
      test: /\.(png|jpe?g|gif)$/,
      loader: 'url?limit=1024'
    },{
      test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url?limit=10240'
    }]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  postcss: [
    require('precss')(),
    require('autoprefixer')({browsers: ['last 2 versions','IE 9']}),

  ],
  vue: {
    loaders: {
      js: 'babel',
      css: 'vue-style!css!postcss',
      less:'vue-style!css!postcss!less',
      scss:'vue-style!css!postcss!sass'
    }
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss','.less', '.css', '.vue']
  },
}
