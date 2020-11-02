import { combineReducers } from 'redux'

import bid from './bid'
import loggedReducer from './loggedReducer'

// 合併所有的reducers成一個大的reducer
const rootReducer = combineReducers({
  bid,
  isLogged: loggedReducer,
})

export default rootReducer
