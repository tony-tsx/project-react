import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'
import SignInContainer from '../containers/SignInContainer'

const Pages = () => (
  <Switch>
    <Route path='/' exact>
      <HomeContainer />
    </Route>
    <Route path='/sign-in' exact>
      <SignInContainer />
    </Route>
  </Switch>
)

export default Pages
