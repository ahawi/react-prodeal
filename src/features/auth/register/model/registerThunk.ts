import { authApi } from '@/shared/api/authApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface RegisterData {
  firstName: string
  lastName: string
  phone: string
  email: string
  password: string
  isAgree: boolean
}

const registerUser = createAsyncThunk(
  'auth/register',
  async (data: RegisterData, thunkAPI) => {
    try {
      const response = await authApi.register(data)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue('Ошибка регистрации')
      console.log(error)
    }
  },
)

export { registerUser }
