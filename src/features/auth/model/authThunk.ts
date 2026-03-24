import { createAsyncThunk } from '@reduxjs/toolkit'
import { authApi } from '@/shared/api'

interface LoginData {
  email: string
  password: string
}

interface RegisterData {
  firstName: string
  lastName: string
  phone: string
  email: string
  password: string
  isAgree: boolean
}

const loginUser = createAsyncThunk(
  'auth/login',
  async (data: LoginData, thunkAPI) => {
    try {
      return await authApi.login(data)
    } catch {
      return thunkAPI.rejectWithValue('Ошибка входа')
    }
  },
)

const registerUser = createAsyncThunk(
  'auth/register',
  async (data: RegisterData, thunkAPI) => {
    try {
      return await authApi.register(data)
    } catch {
      return thunkAPI.rejectWithValue('Ошибка регистрации')
    }
  },
)

const fetchProfile = createAsyncThunk('auth/profile', async (_, thunkAPI) => {
  try {
    return await authApi.getProfile()
  } catch {
    return thunkAPI.rejectWithValue('Не авторизован')
  }
})

const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await authApi.logout()
  } catch {
    return thunkAPI.rejectWithValue('Ошибка выхода')
  }
})

export { loginUser, registerUser, fetchProfile, logoutUser }
