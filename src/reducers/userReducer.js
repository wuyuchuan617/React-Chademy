// https://www.youtube.com/watch?v=tcCS4mGAq7Q
// https://github.com/gopinav/React-Redux-Tutorials/tree/master/react-redux-demo/src/redux

// 初始值
const initialState = {
  logged: false, // 是否登入
  users: {}, // 使用者的資料
  error: '',
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    // 登入
    case 'SIGN_IN':
      return {
        logged: true, // 使用者是登入的
        users: action.payload, // 使用者的資料
        error: '',
      }

    // 登出
    case 'SIGN_OUT':
      return {
        logged: false, // 使用者非登入的
        users: action.payload,
        error: '',
      }
    default:
      return state
  }
}

export default userReducer
