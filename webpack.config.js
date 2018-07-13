const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
    entry: path.join(__dirname,'src','index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                      fallback: 'style-loader',
                      use: ['css-loader', 'sass-loader']
                    })
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
      },
    resolve: {
        modules: [
          path.resolve(__dirname  + '/'),
          path.resolve(__dirname + '/node_modules')
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'src','index.html')
        }),
        new ExtractTextPlugin(
            {filename: 'main.css'}
          )
    ]
}