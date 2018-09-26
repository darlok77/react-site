import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './home'
import Search from './search'
import Header from './header'
import FooterPage from './footer'

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </BrowserRouter>
    <FooterPage />
  </div>
)

export default App
