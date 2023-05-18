import React, { Component } from 'react'
import Spinear from './Spinear';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static propTypes = {
    pageSize:PropTypes.number
  }

  static defaultProps = {
    pageSize: 8,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    constructor(props){
      // console.log("C")
      super(props) 
        this.state={
            article:[],
            loading: true,
            page: 1,
            totalResult:0
        }
        document.title = ` ${this.capitalizeFirstLetter(this.props.category)} - Alpha News`;
    }


    fetchData = async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=f67f1122754244158aa8217ed8ec1f40`
      this.props.setProcessLoad(30)
      let fet = await fetch(url);
      this.props.setProcessLoad(50)
      let responce = await fet.json();
      this.props.setProcessLoad(80)
      this.setState({
        article:responce.articles,
        totalResult: responce.totalResults,
        loading:false
      })
      this.props.setProcessLoad(100)
    }

    async componentDidMount(){
      // console.log("CUP")
       this.fetchData()
    }


    //! InfiniteScroll fetchmore function
    fetchMoreData = async() => {
      this.setState({page:++(this.state.page)})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=f67f1122754244158aa8217ed8ec1f40&page=${this.state.page}`

      let fet = await fetch(url);
      let responce = await fet.json();
      this.setState({
        article:this.state.article.concat(responce.articles),
        totalResult: responce.totalResults,
        loading:false
      })
    };
    
    render() {
      // console.log("R")
        return (
        <>
      <h1 className='text-center my-5 animate__animated animate__backInDown'>Alpha News - Top Heading {this.capitalizeFirstLetter(this.props.category)}</h1>
      <hr />

      {/* {this.state.loading&&<Spinear/>} */}


      <InfiniteScroll 
      dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.setState.totalResult}
          loader={<Spinear/>}>

          
      <div className="container animate__animated animate__bounceInRight">
        <div className="row">
      {this.state.article.map((elm)=>{
       return <div className="col-md-4 my-3"  key={elm.url}>
        <Newsitem title={elm.title}discription={elm.description}imgurl={elm.urlToImage}newsUrl={elm.url}publishedAt={elm.publishedAt}author={elm.author?elm.author:"Unknown"}/>
       </div>
      })}
        </div>
      </div>


      </InfiniteScroll>


      </>
    )
  }
}
