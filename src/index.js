import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './cart/style/jay.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

// 第一步：匯入createStore, combineReducers API
import { createStore, applyMiddleware, compose } from 'redux'

// 導入redux-thunk中介軟體
import thunk from 'redux-thunk'

// 匯入綁定react與redux用的最上層元件
import { Provider } from 'react-redux'

// 第二部：寫出reducer
import { rootReducer } from './reducers'

// 在建立store時要加入中介軟體
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 第三步：由rootReducer建立store
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
