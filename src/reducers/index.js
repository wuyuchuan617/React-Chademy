import { combineReducers } from 'redux'
import bid from './bid'
// 合併所有的reducers成一個大的reducer
export const rootReducer = combineReducers({
    bid,
})
