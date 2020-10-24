import React, { Component } from 'react'

class CatchErrComponent extends Component {
  constructor( props ) {
    super( props )
    this.state = { err: null, errInfo: null }
  }

  static getDerivedStateFromError( err, errInfo ) {
    console.log( 'getDerivedStateFromError' )
    return { err, errInfo: { componentStack: err.stack } }
  }
  componentDidCatch( err, errInfo ) {
    console.log( 'componentDidCatch' )
    this.setState( { err, errInfo } )
  }

  clearErr() {
    this.setState( { err: null, errInfo: null } )
  }
  hasErr() {
    return !!this.state.err
  }
  getStackErr() {
    if ( !this.hasErr() ) throw new Error( '' )
    return this.state.errInfo.componentStack
      .trim()
      .split( /\n/g )
      .map( line => line.trim() )
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            { this.hasErr() && (
              <div className="card">
                <div className="card-body">
                  <div className="card-title">{this.state.err.message}</div>
                </div>
                <ul className="list-group list-group-flush">
                  {this.getStackErr().map((line, index) => (
                    <li className="list-group-item" key={`line[${index}]`}>{line}</li>
                  ))}
                </ul>
              </div>
            ) }
          </div>
          <div className="col">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default CatchErrComponent
