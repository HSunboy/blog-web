const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
	dev:{
		 
          test:/\.css$/,
          use:[
           'style-loader',
            "css-loader",
            'postcss-loader',
          ]
          
        
	},
	pro:{
          test:/\.css$/,
          use:[
           MiniCssExtractPlugin.loader,
            "css-loader",
            'postcss-loader'
          ]
          
        },
}