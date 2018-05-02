import React,{Component} from "react";
import {Icon} from "antd"
const menu=[
	{
		name:"主页"
	},
	{
		name:"精选文章"
	},
	{
		name:"国内资讯"
	},
	{
		name:"国际资讯"
	},
	{
		name:"行情资讯"
	},
	{
		name:"金融资讯"
	},
	{
		name:"前沿技术"
	},
	{
		name:"热点杂谈"
	}
]
function getTranslateX(dom) {
  var style = window.getComputedStyle(dom);
  var matrix = new WebKitCSSMatrix(style.webkitTransform);
  return  matrix.m41
}
class XkNav extends Component{

	constructor(props){
		super(props);
		this.navContent=React.createRef();
		this.navItemsBox=React.createRef();
		this.navItems=[];
		this.state={
			offset:0,
			navContent:null,
			left:false,
			right:false
		}
	}

	initContent(ref){
		if(ref){

			this.navContent=ref
			
		}
		
	}
	initItemsbox(ref){
		if(ref){

			this.navItemsBox=ref
			
		}
	}
	initItem(ref){

		if(ref){
			if(this.navItems.length>=menu.length){
				return;
			}
			this.navItems.push(ref)
			
		}
	}
	getItemData(){
		const ref=this.navContent;
		const itemsBox=this.navItemsBox;
		const cw=ref.clientWidth
		const sw=ref.scrollWidth
		// const offset=-getTranslateX(ref)
		const offset=this.state.offset;
		let amount=0;
		for(let i in this.navItems){
			amount+=this.navItems[i].clientWidth;
		}

		const padding=(sw+offset-amount)/(this.navItems.length-1)
		return {
			padding:padding,
			boxWidth:cw,
			itemsWidth:sw-getTranslateX(itemsBox),
			items:this.navItems
		}
	}
	initIcon(){
		
		const itemData=this.getItemData();

		let left=false;
		let right=false;
		if(this.state.offset>0){
			left=true;
		}

		if(itemData.itemsWidth>itemData.boxWidth+this.state.offset){

			right=true;
		}
		this.setState({
			left:left,
			right:right
		})
	}
	componentDidMount(){
		this.initIcon()
		window.addEventListener("resize",
				()=>{
					this.initIcon();
				}
			)
	}
	getMenuView(){
		return menu.map(
				(item,index)=>{
					return <span key={index} ref={this.initItem.bind(this)} className="nav-item">{item.name}</span>
				}	
			)
	}
	toLeft(){
		if(!this.state.left){
			return;
		}
		this.setOffsetWithIndexr(
			this.getFirstItemr()
			)
		this.initIcon();
	}
	toRight(){
		if(!this.state.right){
			return;
		}
		this.setOffsetWithIndex(
			this.getFirstItem()
			)
		this.initIcon();
	}
	//获取当前menu最后一个未显示或者未显示完全的元素index
	getFirstItemr(){
		const {padding,boxWidth,itemsWidth,items}=this.getItemData();
		const offset=this.state.offset;
		const ShowLength=offset-boxWidth;
		let amount=items[0].clientWidth;
		let index=0;
		if(ShowLength<=0){
			return 0;
		}
		for(let i in items){
			if(i==0){
				continue;
			}
			
			amount=items[i].clientWidth+amount+padding;

			
			index=i;
			if(amount>=ShowLength){
				break;
			}
		}
		return index;

	}
	//根据index偏移
	setOffsetWithIndexr(index){
		const {padding,boxWidth,itemsWidth,items}=this.getItemData();
		if(index>items.length-1){
			return;
		}
		let amount=0;
		for(let i in items){
			if(i==index){
				break;
			}
			amount=amount+items[i].clientWidth+padding;
			
			
		}
		if(amount+boxWidth>=itemsWidth){
			amount=itemsWidth-boxWidth;
		}
		this.setState({
			offset:amount
		},
		()=>{
			this.initIcon();
		})
	}
	//获取当前menu最后一个未显示或者未显示完全的元素index
	getFirstItem(){
		const {padding,boxWidth,itemsWidth,items}=this.getItemData();
		const offset=this.state.offset;
		const ShowLength=offset+boxWidth;
		let amount=items[0].clientWidth;
		let index=0;
		for(let i in items){
			if(i==0){
				continue;
			}
			amount=items[i].clientWidth+amount+padding;

			if(amount>=ShowLength){
				break;
			}
			index=i;
		}
		return index;

	}
	//根据index偏移
	setOffsetWithIndex(index){
		const {padding,boxWidth,itemsWidth,items}=this.getItemData();
		if(index>items.length-1){
			return;
		}
		let amount=0;
		for(let i in items){
			amount=amount+items[i].clientWidth+padding;
			if(i==index){
				break;
			}
			
		}
		if(amount+boxWidth>=itemsWidth){
			amount=itemsWidth-boxWidth;
		}
		this.setState({
			offset:amount
		},
		()=>{
			this.initIcon();
		})
	}
	render(){
		const {offset,left,right}=this.state
		const offsetStyle={
			transform: `translateX(${-offset}px)`,
    		transition: "transform 200ms"
		}
		let leftClassName="nav-icon";
		let rightClassName="nav-icon";
		if(!left){
			leftClassName="nav-icon-disable"
		}
		if(!right){
			rightClassName="nav-icon-disable"
		}
		return (

				<nav className="nav">
					<Icon onClick={this.toLeft.bind(this)} className={leftClassName} style={{marginRight:"10px"}}  type="left" />
					<div className="nav-content"  ref={this.initContent.bind(this)} >
						<div ref={this.initItemsbox.bind(this)} style={offsetStyle}>
							{this.getMenuView()}
							
						</div>
					</div>
						
					<Icon onClick={this.toRight.bind(this)} className={rightClassName} style={{marginLeft:"10px"}}  type="right" />
				</nav>
			)
	}
}
export default XkNav;