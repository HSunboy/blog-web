const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



const base_config=require("./webpack.base.conf.js")();
const cssloader=require("./css-loader").pro;

let pathsToClean = [
  'dist'
]

// the clean options to use
let cleanOptions = {
  root:     process.cwd(),
  verbose:  true,
  dry:      false
}

const proConfig={
	module:{
		rules:[
			cssloader
		]
	},
	plugins:[
		new BundleAnalyzerPlugin(),
	 	new CleanWebpackPlugin(pathsToClean, cleanOptions),
		new MiniCssExtractPlugin({
        	filename: "[name].[contenthash].css"
    	})
    ]
}

console.log(JSON.stringify(merge(base_config,proConfig)));
module.exports=function(){
	return merge(base_config,proConfig)
}