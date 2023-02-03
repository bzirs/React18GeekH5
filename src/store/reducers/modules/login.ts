import { login } from '@/store/api/login'
import { TokenState } from '@/types/store'
import { createSlice } from '@reduxjs/toolkit'

const initialState: TokenState = {
  token: null,
  refreshToken: null
}

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {},
  // 配合axios异步的 https://redux-toolkit.js.org/api/createSlice#extrareducers
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log(payload)

      state.token = payload.data.data.token
      state.refreshToken = payload.data.data.refresh_token
    })
  }
})

export default loginSlice.reducer
