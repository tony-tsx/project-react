import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'

const App = props => (
  <Provider store={store}>
    <BrowserRouter>
      <Header title={'React'}/>
      {props.children}
    </BrowserRouter>
  </Provider>
)

export default App
