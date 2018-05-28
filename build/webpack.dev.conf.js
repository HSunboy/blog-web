const merge = require('webpack-merge');
const path = require("path")
const WebpackMessages = require('webpack-messages');
const base_config=require("./webpack.base.conf.js")();
const cssloader=require("./css-loader").dev;
const webpack = require('webpack');

const devConfig={
	mode:"development",
	module:{
		rules:[
			cssloader
		]
	},
	devtool: 'inline-source-map',
	devServer:{
		contentBase:path.resolve(process.cwd(),"dist"),
		host:"0.0.0.0",
		port:19080,
		compress:true,
		hot: true
	},
	plugins:[
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}

// console.log(JSON.stringify(merge(base_config,devConfig)));
module.exports=function(){
	return merge(base_config,devConfig)
}	
