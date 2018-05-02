import React,{Component} from "react";
import title_img from "@/public/images/title.png"

class Header extends Component{

	render(){
		return (

				<header className="header">
					<div className="header-aboutus">
						关于我们
					</div>
					<div style={{flexGrow: 1,flexBasis: "0%"}} >
						<img src={title_img} style={{width:"200px"}} />
					</div>
					
						
					
					<div style={{color:"#03a87c",flexGrow: 1,textAlign:"right",flexBasis: "0%"}}>
						<a href="#" className="a header-login" style={{marginRight:"16px"}}>登录</a>
						<a href="#" className="a header-login header-button">注册</a>
					</div>
				</header>
			)
	}
}
export default Header;