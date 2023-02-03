import { ApiResponse, LoginFormType, Token } from '@/types/data'
import request from '@/utils/request'
import { createAsyncThunk } from '@reduxjs/toolkit'

// 登录
export const login = createAsyncThunk(
  'login',
  async (obj: LoginFormType) => await request.post<ApiResponse<Token>>('/v1_0/authorizations', obj)
)
