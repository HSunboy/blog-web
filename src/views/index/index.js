import React, { Component } from "react"
import {Icon} from "antd"
import moment from "moment";

import net from "@/network/http"



class Index extends Component {
 constructor(props){
		super(props);

		this.state={
			topArticle:[]
		}
	}

  getCagatoryLst(){
  	const list=[
	  	{
	  		article:"阿里云全资收购袋鼠云",
	  		img:"https://cdn-images-1.medium.com/fit/c/1008/444/1*Dy4f7L8sW0Aand-CYqBYOA.jpeg",
	  		desc:"袋鼠云是一个数据智能公司",
	  		author:"李宇春",
	  		date:"May 10",
	  		read:"8 min read"
	  	},
	  	{
	  		article:"阿里云全资收购袋鼠云",
	  		img:"https://cdn-images-1.medium.com/fit/c/1008/444/1*Dy4f7L8sW0Aand-CYqBYOA.jpeg",
	  		desc:"袋鼠云是一个数据智能公司",
	  		author:"李宇春",
	  		date:"May 10",
	  		read:"8 min read"
	  	},
	  	{
	  		article:"阿里云全资收购袋鼠云",
	  		img:"https://cdn-images-1.medium.com/fit/c/1008/444/1*Dy4f7L8sW0Aand-CYqBYOA.jpeg",
	  		desc:"袋鼠云是一个数据智能公司",
	  		author:"李宇春",
	  		date:"May 10",
	  		read:"8 min read"
	  	}
  	];
  	return list.map(
  			(item)=>{
  				return (
  					<section className="article-list-item">
      					<div className="list-article_content">
			      			<span className="list-article_title">
			      					{item.article}
			      			</span>
			      			<span className="list-article_desc">
			      					{item.desc}
			      			</span>
			      			<div className="list-article_box">
			      				<span className="list-article_author">
			      					{item.author}
				      			</span>
				      			<div className="list-article_ext">
				      					{item.date} · <Icon type="star" /> {item.read}
				      			</div>
			      			</div>
      					</div>
      					<img src={item.img} />
      				</section>
  					)
  			}
  		)
  }
  getRankList(){
  	const list=[
	  	{
	  		article:"阿里云全资收购袋鼠云",
	  		img:"https://cdn-images-1.medium.com/fit/c/1008/444/1*Dy4f7L8sW0Aand-CYqBYOA.jpeg",
	  		desc:"袋鼠云是一个数据智能公司",
	  		author:"李宇春",
	  		date:"May 10",
	  		read:"8 min read"
	  	},
	  	{
	  		article:"阿里云全资收购袋鼠云",
	  		img:"https://cdn-images-1.medium.com/fit/c/1008/444/1*Dy4f7L8sW0Aand-CYqBYOA.jpeg",
	  		desc:"袋鼠云是一个数据智能公司",
	  		author:"李宇春",
	  		date:"May 10",
	  		read:"8 min read"
	  	},
	  	{
	  		article:"阿里云全资收购袋鼠云",
	  		img:"https://cdn-images-1.medium.com/fit/c/1008/444/1*Dy4f7L8sW0Aand-CYqBYOA.jpeg",
	  		desc:"袋鼠云是一个数据智能公司",
	  		author:"李宇春",
	  		date:"May 10",
	  		read:"8 min read"
	  	}
  	];
  	function getRank(number){
  		number++;
  		if(number>9){
  			return number+''
  		}
  		return "0"+number;
  	}
  	return list.map(
  			(item,index)=>{
  				return (
  					<section className="list-rank-item">
      					<span className="list-rank-number">{getRank(index)}</span>
      					<div className="list-article_content list-rank_content" >
			      			<span className="list-article_title list-rank_title">
			      					{item.article}
			      			</span>
			      			<div className="list-article_box">
			      				<span className="list-article_author">
			      					{item.author}
				      			</span>
				      			<div className="list-article_ext">
				      					{item.date} · <Icon type="star" /> {item.read}
				      			</div>
			      			</div>
      					</div>
      				</section>
  					)
  			}
  		)
  }
  render() {
  	const {topArticle}=this.state;
  	const firstArticle=topArticle.length>0?topArticle[0]:{};
  	const secondArticle=topArticle.length>1?topArticle[1]:{};
  	const thirdArticle=topArticle.length>2?topArticle[2]:{};
  	const fourthArticle=topArticle.length>3?topArticle[3]:{};
  	const fifthArticle=topArticle.length>4?topArticle[4]:{};
    return (
      <div className="index" >
      	<div className="top-box">
      		<section className="big-article_item" style={{marginRight:"30px",flex:"0 1 auto",flexBasis: "340px"}}>
      			<img src="https://cdn-images-1.medium.com/fit/c/832/302/1*PjFZcujLi-6mLy82-VuhLA.jpeg" />
      			<div className="big-article_content">
	      			<a className="big-article_title">
	      					{firstArticle.title}
	      			</a>
	      			<span className="big-article_desc">
	      					{firstArticle.description}
	      			</span>
	      			<div className="common-article_box">
	      				<span className="common-article_author">
	      					{firstArticle.creatorName||"佚名"}
		      			</span>
		      			<div className="common-article_ext">
		      				{firstArticle.createAt} <Icon type="star" /> {firstArticle.views} read
		      			</div>

	      			</div>
	      			
      			</div>
      		</section>
      		<div className="article-box" style={{marginRight:"30px",flex:"0 1 auto"}}>
      			<section className="small-article_item">
      				<img src="https://cdn-images-1.medium.com/fit/c/200/200/1*-md7urIQrRcjkpbOSYQs_w.jpeg" />
      				<div className="small-article_content">
		      			<span className="small-article_title">
		      					阿里云全资收购袋鼠云
		      			</span>
		      			<span className="small-article_desc">
		      					袋鼠云是一个数据智能公司
		      			</span>
		      			<div className="common-article_box">
		      				<span className="common-article_author">
		      					李宇春
			      			</span>
			      			<div className="common-article_ext">
			      					May 10 · <Icon type="star" /> 8 min read
			      			</div>

		      			</div>
	      			
      				</div>
      			</section>
      			<section className="small-article_item">
      				<img src="https://cdn-images-1.medium.com/fit/c/200/200/1*bw8fLCwwgVLQI-lMNAJQlw.jpeg" />
      				<div className="small-article_content">
		      			<span className="small-article_title">
		      					阿里云全资收购袋鼠云
		      			</span>
		      			<span className="small-article_desc">
		      					袋鼠云是一个数据智能公司
		      			</span>
		      			<div className="common-article_box">
		      				<span className="common-article_author">
		      					李宇春
			      			</span>
			      			<div className="common-article_ext">
			      					May 10 · <Icon type="star" /> 8 min read
			      			</div>

		      			</div>
	      			
      				</div>
      			</section>
      			<section className="small-article_item">
      				<img src="https://cdn-images-1.medium.com/focal/304/312/40/46/1*Rb-UI1apeS99mBhvA_ewfw.jpeg" />
      				<div className="small-article_content">
		      			<span className="small-article_title">
		      					阿里云全资收购袋鼠云
		      			</span>
		      			<span className="small-article_desc">
		      					袋鼠云是一个数据智能公司
		      			</span>
		      			<div className="common-article_box">
		      				<span className="common-article_author">
		      					李宇春
			      			</span>
			      			<div className="common-article_ext">
			      					May 10 · <Icon type="star" /> 8 min read
			      			</div>

		      			</div>
	      			
      				</div>
      			</section>
      		</div>
      		<section className="common-article_item" style={{flex: "0 1 auto",flexBasis:"240px"}} >
      			<img src="https://cdn-images-1.medium.com/fit/c/1008/444/1*Dy4f7L8sW0Aand-CYqBYOA.jpeg" />
      			<div className="common-article_content">
		      			<span className="common-article_title">
		      					阿里云全资收购袋鼠云
		      			</span>
		      			<span className="common-article_desc">
		      					袋鼠云是一个数据智能公司
		      			</span>
		      			<div className="common-article_box">
		      				<span className="common-article_author">
		      					李宇春
			      			</span>
			      			<div className="common-article_ext">
			      					May 10 · <Icon type="star" /> 8 min read
			      			</div>

		      			</div>
	      			
      				</div>

      		</section>


      	</div>
      	<div className="top-box-line"></div>
      	<div className="catagory-box">
      		<section className="article-list-box" style={{flex: 1,paddingLeft:"8px"}}>
      			<div className="list-header">
      				<span>精选</span>
      				<a>MORE<Icon type="right" /></a>
      			</div>
      			<span className="list-line"></span>
      			<div className="list-content">
      				{this.getCagatoryLst()}
      			</div>
      		</section>
      		<section className="article-list-rank-box" style={{flex: "0 0 328px",marginLeft:"24px",paddingTop:"40px"}}>
      			<div className="list-rank-header">
      				<span>排行</span>
      			</div>
      			<span className="list-rank-line"></span>
      			<div className="list-rank-content">
      				{this.getRankList()}
      			</div>
      		</section>
      	</div>
	  </div>
    )
  }
  componentDidMount(){
  	console.log("log")
  	net.getArticle({
  		params:{
  			pageNo:1,
  			pageSize:20,
  			type:1
  		}
  	})
  	.then(
  		(res)=>{
  			if(res.result){
  				this.setState({
  					topArticle:res.result
  				})
  			}
  		}
  		);


  }
}
export default Index;