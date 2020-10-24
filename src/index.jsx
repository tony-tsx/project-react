import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Pages from './pages'

import './index.scss'

ReactDOM.render(
  <App>
    <Pages />
  </App>,
  document.getElementById( 'app' )
)
