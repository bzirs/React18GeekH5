export type LoginFormType = {
  mobile: string
  code: string
}

// 登录接口返回数据类型
export type Token = {
  token: string
  refresh_token: string
}

// 统一的axios的响应类型
export type ApiResponse<T> = {
  message: string
  data: T
}
