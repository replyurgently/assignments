
//App.js

import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'


import GlobalStyle from './Theme/GlobalStyle'
import Landing from './Landing/index'
import Details from './Tweets/Details/index'
import NewTweet from './Tweets/List/NewTweet'
//import Footer from './Footer/index'

function App() {
  return (
    <div>
      <NewTweet />
      <GlobalStyle />
      <Switch>
        <Route
          exact path='/'
          component={Landing} />
        <Route
          exact path='/:id'
          component={Details} />
      </Switch>
      
    </div>
  )
}

export default withRouter(App)