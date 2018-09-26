import React, { Component } from 'react'
import { BrowserRouter , Route } from "react-router-dom"

import Home from "./home/"
import Search from "./search/"

class App extend Component {
  render(){
    return(
      <BrowserRouter>
        <Route path="/" component={Home}/>
        <Route path="/search" component={Search}/>
      </BrowserRouter>
    )
  }

}

export default App
