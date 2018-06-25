import React, { Component } from 'react';
import { Tag, Button, Tooltip } from "antd";
import net from "@/network/http"

export default class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            article: {}
        }
    }

    componentDidMount() {
        net.getArticleDetail({
            params: {
                articleId: this.state.id
            }
        })
            .then(
                (res) => {
                    if (res.code == "0000") {
                        this.setState({
                            article: res.result
                        })
                    }
                }
            )
    }


    render() {
        const article = this.state.article;

        const keyworks = article && article.keyWordsList && article.keyWordsList.map(
            (keyword) => {
                return <Tag key={keyword.id} color="cyan">{keyword.name}</Tag>
            }
        )

        return (
            <React.Fragment>
                <article className="article-detail-box">
                    <header>
                        <h1 className="article-detail-titie">
                            {article.title}
                        </h1>
                    </header>
                    <div className="article-detail-des">
                        {article.description}
                    </div>
                    <img className="article-detail-img" src={article.pic} />
                    {article.content ?
                        <div className="article-detail-content"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        >

                        </div> : (<span>loading......</span>)}
                    <div className="article-detail-keyworks">
                        {keyworks}
                    </div>
                </article>
                <div className="article-detail-toolbox">
                    <h3>喜欢这篇文章？点个赞呗</h3>
                    <div>
                        <Button type="primary" shape="circle" icon="like-o" size="large" />
                        <span className="article-detail-good">{article.praises}</span>
                        <span className="article-detail-tools">
                            <Tooltip placement="top" title="收藏">
                                <Button shape="circle" icon="paper-clip" size="small" />
                            </Tooltip>
                            <Tooltip placement="top" title="评论">
                                <Button shape="circle" icon="message" size="small" />
                            </Tooltip>
                        </span>
                    </div>

                </div>

            </React.Fragment>

        )
    }
}