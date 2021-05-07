import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Child from './child'

class Index extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{ margin: '100px' }}>
        <Child />
      </div>
    )
  }
}

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('appview')
)
