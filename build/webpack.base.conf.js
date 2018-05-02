const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');






module.exports = function() {
  return {
    entry: {
      main: path.resolve(process.cwd(), "src/main.js")
    },
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(process.cwd(), "dist")
    },
    optimization:{
      splitChunks:{
        chunks:"all"
      },
      "runtimeChunk": {
        "name": "manifest"
      }
    },
    
    module: {
      rules: [
      
        {
          test: /\.js$/,
          exclude: [
            path.resolve(process.cwd(), "node_modules")
          ],
          use: [{
            loader: 'babel-loader'
          }]
        },
        
        {
          test:/\.(png|svg|jpg|gif)$/,
          use:[
            {
              loader:'url-loader',
              options:{
                limit: 1024
              }
            }
          ]
        }
      ]
    },
    plugins: [
      
      new HtmlWebpackPlugin({
        template: path.resolve(process.cwd(), "src/public/index.html")
      }),
     
      
    ],
    resolve:{
    	extensions:['.js','jsx','json'],
    	alias:{
    		"@":path.resolve(process.cwd(),"src")
    	}
    }
  }

}