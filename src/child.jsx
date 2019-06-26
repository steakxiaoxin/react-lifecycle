import React from 'react'

class Index extends React.Component {
  constructor() {
    console.log('  子 constructor')
    super()
    this.state = {
      num: 1
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('  子 getDerivedStateFromProps')
    return state
  }

  componentDidMount() {
    console.log('  子 componentDidMount')
    console.log('   --------------------------------')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('  子 shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('  子 getSnapshotBeforeUpdate')
    return prevState.num
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('  子 componentDidUpdate', 'snapshot: ', snapshot)
    console.log('   --------------------------------')
  }

  render() {
    const { state, props } = this
    console.log('  子 render')
    return (
      <div className="">
        <button
          onClick={() => {
            this.setState({ num: state.num + 1 })
          }}
        >
          子 +1
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
          子 state：
          {state.num}
        </span>
        <span style={{ margin: '20px' }}>
          子 props：
          {props.num}
        </span>
      </div>
    )
  }

  componentWillUnmount() {
    console.log('  子 componentWillUnmount')
  }
}

export default Index
