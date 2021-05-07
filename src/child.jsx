import React from 'react'
import { connect } from 'react-redux'

import { Add, Add2, Sub } from './store/actionCreators'

class Counter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <button onClick={this.countSub}>减一</button>
          <span
            style={{
              display: 'inline-block',
              width: '50px',
              textAlign: 'center'
            }}
          >
            {this.props.count}
          </span>
          <button onClick={this.props.countAdd}>加一</button>
        </div>
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <button onClick={this.props.countSub}>减一</button>
          <span
            style={{
              display: 'inline-block',
              width: '50px',
              textAlign: 'center'
            }}
          >
            {this.props.count}
          </span>
          <button onClick={this.props.countAdd2}>加一</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    countAdd: count => {
      dispatch(Add())
    },
    countAdd2: count => {
      dispatch(Add2())
    },
    countSub: count => {
      dispatch(Sub())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
