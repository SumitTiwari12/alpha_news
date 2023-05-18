import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  pageSize = 5;
  apikey = process.env.REACT_APP_API_KEY
  state={
    progress:0
  }
  setProcessLoad = (val)=>{
    this.setState({progress:val}) 
  }
  
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar color='yellow' height={3} progress={this.state.progress}/>

      <Routes>
        <Route exact path='/' element={<News  key={'general'}  setProcessLoad={this.setProcessLoad} apikey={this.apikey} pageSize={this.pageSize} category="general" country="in" />}/>

        <Route exact path='/business' element={<News key={"business"} setProcessLoad={this.setProcessLoad} apikey={this.apikey} pageSize={this.pageSize} category="business" country="in" />}/>

        <Route exact path='/entertainment' element={<News key={"entertainment"} setProcessLoad={this.setProcessLoad} apikey={this.apikey} pageSize={this.pageSize} category="entertainment" country="in" />}/>

        <Route exact path='/health' element={<News key={"health"} setProcessLoad={this.setProcessLoad} apikey={this.apikey} pageSize={this.pageSize} category="health" country="in" />}/>

        <Route exact path='/science' element={<News key={"science"} setProcessLoad={this.setProcessLoad} apikey={this.apikey} pageSize={this.pageSize} category="science" country="in" />}/>

        <Route exact path='/science' element={<News key={"science"} setProcessLoad={this.setProcessLoad} apikey={this.apikey} pageSize={this.pageSize} category="science" country="in" />}/>

        <Route exact path='/technology' element={<News  key={"technology"} setProcessLoad={this.setProcessLoad} apikey={this.apikey} pageSize={this.pageSize} category="technology" country="in" />}/>

        <Route exact path='/sport' element={<News  key={"sport"} setProcessLoad={this.setProcessLoad} apikey={this.apikey} pageSize={this.pageSize} category="sport" country="in" />}/>

      </Routes>
      </BrowserRouter>
      </>
    )
  }
}
