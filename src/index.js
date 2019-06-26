import React from 'react'
import { render } from 'react-dom'

import Child from './child'

class Index extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log('父 getDerivedStateFromProps')
    return state
  }

  constructor() {
    console.log('父 constructor')
    super()
    this.state = {
      num: 1
    }
  }

  componentDidMount() {
    console.log('父 componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('父 shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('父 getSnapshotBeforeUpdate')
    return '父'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('父 componentDidUpdate', 'snapshot: ', snapshot)
  }

  render() {
    const { state } = this
    console.log('父 render')
    return (
      <div className="">
        父state：
        {state.num}
        <button
          style={{ margin: '20px' }}
          onClick={() => {
            this.setState({ num: state.num + 1 })
          }}
        >
          父 +1
        </button>
        <div>------------------------------------------------------------</div>
        <Child num={state.num} />
      </div>
    )
  }
}

render(<Index />, document.getElementById('appview'))
