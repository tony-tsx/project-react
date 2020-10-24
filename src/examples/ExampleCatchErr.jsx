import React, { Component } from 'react'
import CatchErrComponent from '../components/CatchErr'
import BuggyCounterComponent from '../tuto/BuggyCounter'

class ExampleCatchErrComponent extends Component {
  render() {
    return (
      <CatchErrComponent>
        <BuggyCounterComponent />
      </CatchErrComponent>
    )
  }
}

export default ExampleCatchErrComponent
