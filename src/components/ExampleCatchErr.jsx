import React, { Component } from 'react'
import CatchErrComponent from './CatchErr'
import BuggyCounterComponent from './BuggyCounter'

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
