import { INIT_ACT } from '../actions/actionTypes'

//放state
// action = { type: 'ADD_VALUE', value: 1 }
// action = { type: 'MINUS_VALUE', value: 1 }
export default function bid(state, action) {
    switch (action.type) {      
      case INIT_VALUE:
        return action.value
      default:
        return state
    }
  }