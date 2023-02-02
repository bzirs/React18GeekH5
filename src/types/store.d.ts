import { ThunkAction } from 'redux-thunk'
import store from '../store'

// Redux 应用的状态
export type RootState = ReturnType<typeof store.getState>

// -------------------- Redux 对象形式的 action 的类型 ---------------------------

// 登录相关的 action 类型
export type LoginAction = {}
// 文章相关的 action 类型
export type ArticleAction = {}
// 等等
type RootAction = LoginAction | ArticleAction

// 使用 thunk 中间件后的 Redux dispatch 类型
// ReturnType：thunk action 的返回类型，项目中几乎都是返回 Promise
// State: Redux 的状态  RootState
// ExtraThunkArg: 额外的参数，没有用到，可以指定为 unknown
// BasicAction: 非 thunk action，即对象形式的 action
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>
