import { authApi } from '@/shared/api/authApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface LoginData {
  email: string
  password: string
}

const loginUser = createAsyncThunk(
  'auth/login',
  async (data: LoginData, thunkAPI) => {
    try {
      const response = await authApi.login(data)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue('Ошибка входа')
      console.log(error)
    }
  },
)

export { loginUser }
