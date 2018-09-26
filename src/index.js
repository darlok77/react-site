import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import Header from './header'
import FooterPage from './footer'

const App = () => (
  <div>
    <Header />
    <Home />
    <FooterPage />
  </div>

)

ReactDOM.render(<App />, document.body)
