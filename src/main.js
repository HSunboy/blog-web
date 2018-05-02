import React from "react";
import ReactDOM from 'react-dom'
import "@/public/css/common.css"
import { HashRouter } from 'react-router-dom'
import Main from "@/views/main"

import { hot } from 'react-hot-loader'

function root(){
	return (
		<HashRouter>
			<Main />
		</HashRouter>	
		)
}
const Root=hot(module)(root)

ReactDOM.render(
	<Root />
	,document.getElementById('app')
	);


