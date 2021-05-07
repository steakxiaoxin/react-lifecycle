import { ADD, SUB } from '../actionTypes'

//设置一个初始值
const initialState = {
  count: 0
}

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case SUB:
      return Object.assign({}, state, {
        count: state.count - 1
      })
    default:
      return state
  }
}
