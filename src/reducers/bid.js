import { INIT_ACT } from '../actions/actionTypes'

//放state

export default function bid(state = [], action) {
  switch (action.type) {
    case INIT_ACT:
      return action.data
    default:
      return state
  }
}
