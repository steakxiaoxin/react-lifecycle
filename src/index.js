import React from 'react'
import { render } from 'react-dom'

import Child from './child'

class Index extends React.Component {
  constructor() {
    console.log('父 constructor')
    super()
    this.state = {
      num: 1
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('父 getDerivedStateFromProps')
    return state
  }

  componentDidMount() {
    console.log('父 componentDidMount')
    console.log('--------------------------------')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('父 shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('父 getSnapshotBeforeUpdate')
    return prevState.num
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('父 componentDidUpdate', 'snapshot: ', snapshot)
    console.log('--------------------------------')
  }

  render() {
    const { state } = this
    console.log('父 render')
    return (
      <div style={{ margin: '100px' }}>
        <button
          onClick={() => {
            this.setState({ num: state.num + 1 })
          }}
        >
          父 +1
        </button>
        <button
          style={{ margin: '20px' }}
          onClick={() => {
            this.forceUpdate()
          }}
        >
          强制更新父 forceUpdate
        </button>
        <span>
          父 state：
          {state.num}
        </span>
        <div>------------------------------------------------------------</div>
        <Child num={state.num} />
        <div>------------------------------------------------------------</div>
        <div>
          <button
            style={{ marginTop: '20px' }}
            onClick={() => {
              location.reload()
            }}
          >
            刷新
          </button>
        </div>
      </div>
    )
  }
  componentWillUnmount() {
    console.log('父 componentWillUnmount')
  }
}

render(<Index />, document.getElementById('appview'))
