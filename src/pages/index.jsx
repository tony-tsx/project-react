import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import SignIn from './SignIn'

const Pages = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/sign-in' exact component={SignIn} />
  </Switch>
)

export default Pages
