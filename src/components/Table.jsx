import React from 'react'
import DefaultBootstrap from './DefaultBootstrap'

class Table extends DefaultBootstrap {
  constructor( props ) {
    super( props )
    this.defaultClass = 'table'
  }
  getRestProps() {
    const { heads, headProps, ...rest } = super.getRestProps()
    return rest
  }
  render() {
    return <table className={this.getClassNames()} {...this.getRestProps()}>
      <thead>
        <tr>
          { this.props.heads.map( ( head, index ) => (
            <th key={`table.head[${index}]`}>
              {head}
            </th>
          ) ) }
        </tr>
      </thead>
      <tbody>
      {this.props.children}
      </tbody>
    </table>
  }
}

Table.Row = class extends DefaultBootstrap {
  render() {
    return <tr className={this.getClassNames()} {...this.getRestProps()} />
  }
}

Table.DataCell = class extends DefaultBootstrap {
  render() {
    return <td className={this.getClassNames()} {...this.getRestProps()} />
  }
}

export default Table
