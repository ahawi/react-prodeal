import { createAsyncThunk } from '@reduxjs/toolkit'
import { authApi } from '@/shared/api'

export interface User {
  firstName: string
  lastName: string
  phone: string
  email: string
}

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

interface AuthResponse {
  user: User
}

const loginUser = createAsyncThunk<
  AuthResponse,
  LoginData,
  { rejectValue: string }
>('auth/login', async (data, thunkAPI) => {
  try {
    return await authApi.login(data)
  } catch {
    return thunkAPI.rejectWithValue('Ошибка входа')
  }
})

const registerUser = createAsyncThunk<
  AuthResponse,
  RegisterData,
  { rejectValue: string }
>('auth/register', async (data, thunkAPI) => {
  try {
    return await authApi.register(data)
  } catch {
    return thunkAPI.rejectWithValue('Ошибка регистрации')
  }
})

const fetchProfile = createAsyncThunk<User, void, { rejectValue: string }>(
  'auth/profile',
  async (_, thunkAPI) => {
    try {
      const data = await authApi.getProfile()

      if (!data || typeof data !== 'object' || !('email' in data)) {
        return thunkAPI.rejectWithValue('Не авторизован')
      }
      return data
    } catch {
      return thunkAPI.rejectWithValue('Не авторизован')
    }
  },
)

const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await authApi.logout()
    } catch {
      return thunkAPI.rejectWithValue('Ошибка выхода')
    }
  },
)

export { loginUser, registerUser, fetchProfile, logoutUser }
