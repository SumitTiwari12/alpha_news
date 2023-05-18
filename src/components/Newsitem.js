import React, { Component } from 'react'
import 'animate.css';

export default class Newsitem extends Component {
    render() {
        let { title,discription,imgurl,newsUrl,publishedAt,author} = this.props
    return (
        <div className="card ">
        <img src={imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <p>Author :  {author}</p>
          <p>Published : {new Date(publishedAt).toGMTString()}</p>
          <a href={newsUrl} className="btn btn-primary btn-sm" target = "_blank" rel="noreferrer">Read More</a>
        </div>
      </div>
    )
  }
}
