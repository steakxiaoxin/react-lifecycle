import React from 'react'

class Index extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log('  子 getDerivedStateFromProps')
    return state
  }

  constructor() {
    console.log('  子 constructor')
    super()
    this.state = {
      num: 1
    }
  }

  componentDidMount() {
    console.log('  子 componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('  子 shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('  子 getSnapshotBeforeUpdate')
    return '子'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('  子 componentDidUpdate', 'snapshot: ', snapshot)
  }

  render() {
    const { state, props } = this
    console.log('  子 render')
    return (
      <div className="">
        子props：
        {props.num}
        <button
          style={{ margin: '20px' }}
          onClick={() => {
            this.setState({ num: state.num + 1 })
          }}
        >
          子 +1
        </button>
        子state：
        {state.num}
      </div>
    )
  }
}

export default Index
