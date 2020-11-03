import { combineReducers } from 'redux'

import bid from './bid'
import userReducer from './userReducer'

// 合併所有的reducers成一個大的reducer
const rootReducer = combineReducers({
  bid,
  user: userReducer, // => 改名為 user
})

export default rootReducer
