import React, { Component } from "react"
import { Icon } from "antd"
import moment from "moment";

import net from "@/network/http"



class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			topArticle: [],
			featuredArticle:[],
			rankArticle:[]
		}
	}

	toDetail(item){
		this.props.history.push({
			pathname:"/detail/"+item.id,
			state:{
				hahaha:true
			}
		})
	}

	getCagatoryLst() {
		const list = this.state.featuredArticle;
		return list.map(
			(item) => {
				return (
					<section className="article-list-item">
						<div className="list-article_content">
							<a className="list-article_title" onClick={this.toDetail.bind(this,item)} >
								{item.title}
							</a>
							<span className="list-article_desc">
								{item.description}
							</span>
							<div className="list-article_box">
								<span className="list-article_author">
									{item.author}
								</span>
								<div className="list-article_ext">
								{moment(item.createAt).format("MMM DD")} <Icon type="star" /> {item.views} read
								</div>
							</div>
						</div>
						<img src={item.pic} />
					</section>
				)
			}
		)
	}
	getRankList() {
		const list = this.state.rankArticle;
		function getRank(number) {
			number++;
			if (number > 9) {
				return number + ''
			}
			return "0" + number;
		}
		return list.map(
			(item, index) => {
				return (
					<section className="list-rank-item">
						<span className="list-rank-number">{getRank(index)}</span>
						<div className="list-article_content list-rank_content" >
							<a className="list-article_title list-rank_title" onClick={this.toDetail.bind(this,item)}>
								{item.title}
							</a>
							<div className="list-article_box">
								<span className="list-article_author">
									{item.author}
								</span>
								<div className="list-article_ext">
								{moment(item.createAt).format("MMM DD")} <Icon type="star" /> {item.views} read
								</div>
							</div>
						</div>
					</section>
				)
			}
		)
	}
	render() {
		const { topArticle } = this.state;
		const firstArticle = topArticle.length > 0 ? topArticle[0] : {};
		const secondArticle = topArticle.length > 1 ? topArticle[1] : {};
		const thirdArticle = topArticle.length > 2 ? topArticle[2] : {};
		const fourthArticle = topArticle.length > 3 ? topArticle[3] : {};
		const fifthArticle = topArticle.length > 4 ? topArticle[4] : {};
		return (
			<div className="index" >
				<div className="top-box">
					<section className="big-article_item" style={{ marginRight: "30px", flex: "0 1 auto", flexBasis: "340px" }}>
						<img src={firstArticle.pic} />
						<div className="big-article_content">
							<a className="big-article_title" onClick={this.toDetail.bind(this,firstArticle)}>
								{firstArticle.title}
							</a>
							<span className="big-article_desc">
								{firstArticle.description}
							</span>
							<div className="common-article_box">
								<span className="common-article_author">
									{firstArticle.creatorName || "佚名"}
								</span>
								<div className="common-article_ext">
									{moment(firstArticle.createAt).format("MMM DD")} <Icon type="star" /> {firstArticle.views} read
		      			</div>

							</div>

						</div>
					</section>
					<div className="article-box" style={{ marginRight: "30px", flex: "0 1 auto" }}>
						<section className="small-article_item">
							<img src={secondArticle.pic} />
							<div className="small-article_content">
								<a className="small-article_title" onClick={this.toDetail.bind(this,secondArticle)}>
									{secondArticle.title}
								</a>
								<span className="small-article_desc">
									{secondArticle.description}
								</span>
								<div className="common-article_box">
									<span className="common-article_author">
										{secondArticle.creatorName || "佚名"}
									</span>
									<div className="common-article_ext">
										{moment(secondArticle.createAt).format("MMM DD")} · <Icon type="star" /> {secondArticle.views} read
			      			</div>

								</div>

							</div>
						</section>
						<section className="small-article_item">
							<img src={thirdArticle.pic} />
							<div className="small-article_content">
								<a className="small-article_title" onClick={this.toDetail.bind(this,thirdArticle)}>
									{thirdArticle.title}
								</a>
								<span className="small-article_desc">
									{thirdArticle.description}
								</span>
								<div className="common-article_box">
									<span className="common-article_author">
										{thirdArticle.creatorName || "佚名"}
									</span>
									<div className="common-article_ext">
										{moment(thirdArticle.createAt).format("MMM DD")} · <Icon type="star" /> {thirdArticle.views} read
			      			</div>

								</div>

							</div>
						</section>
						<section className="small-article_item">
							<img src={fourthArticle.pic} />
							<div className="small-article_content">
								<a className="small-article_title" onClick={this.toDetail.bind(this,fourthArticle)}>
									{fourthArticle.title}
								</a>
								<span className="small-article_desc">
									{fourthArticle.description}
								</span>
								<div className="common-article_box">
									<span className="common-article_author">
										{fourthArticle.creatorName || "佚名"}
									</span>
									<div className="common-article_ext">
										{moment(fourthArticle.createAt).format("MMM DD")} · <Icon type="star" /> {fourthArticle.views} read
			      			</div>

								</div>

							</div>
						</section>
					</div>
					<section className="common-article_item" style={{ flex: "0 1 auto", flexBasis: "240px" }} >
						<img src={fifthArticle.pic} />
						<div className="common-article_content">
							<a className="common-article_title" onClick={this.toDetail.bind(this,fifthArticle)}>
								{fifthArticle.title}
							</a>
							<span className="common-article_desc">
								{fifthArticle.description && fifthArticle.description.substr(0, 30)}
							</span>
							<div className="common-article_box">
								<span className="common-article_author">
									{fifthArticle.creatorName || "佚名"}
								</span>
								<div className="common-article_ext">
									{moment(fifthArticle.createAt).format("MMM DD")} · <Icon type="star" /> {fifthArticle.views} read
			      			</div>

							</div>

						</div>

					</section>


				</div>
				<div className="top-box-line"></div>
				<div className="catagory-box">
					<section className="article-list-box" style={{ flex: 1, paddingLeft: "8px" }}>
						<div className="list-header">
							<span>精选</span>
							<a>MORE<Icon type="right" /></a>
						</div>
						<span className="list-line"></span>
						<div className="list-content">
							{this.getCagatoryLst()}
						</div>
					</section>
					<section className="article-list-rank-box" style={{ flex: "0 0 328px", marginLeft: "24px", paddingTop: "40px" }}>
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
	componentDidMount() {
		console.log("log")
		net.getArticle({
			params: {
				pageNo: 1,
				pageSize: 20,
				type: 1
			}
		})
			.then(
				(res) => {
					if (res.result) {
						this.setState({
							topArticle: res.result
						})
					}
				}
			);
		net.getArticle({
			params: {
				pageNo: 1,
				pageSize: 20,
				type: 2
			}
		})
			.then(
				(res) => {
					if (res.result) {
						this.setState({
							featuredArticle:res.result
						})
					}
				}
			);
		net.getArticle({
			params: {
				pageNo: 1,
				pageSize: 20,
				type: 3
			}
		})
			.then(
				(res) => {
					if (res.result) {
						this.setState({
							rankArticle: res.result
						})
					}
				}
			);


	}
}
export default Index;