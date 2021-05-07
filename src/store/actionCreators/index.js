import axios from 'axios'

import { ADD, SUB } from '../actionTypes'

export const Add = () => ({
  type: ADD
})
export const Sub = () => ({
  type: SUB
})

export const Add2 = () => {
  return dispatch => {
    axios
      .get('/api/list.json')
      .then(res => {})
      .finally(() => {
        const action = Add()
        dispatch(action)
      })
  }
}
