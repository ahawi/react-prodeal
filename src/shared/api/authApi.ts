import type { User } from '@/entities/auth/model/authThunk'
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

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

export const authApi = {
  login: async (data: LoginData) => {
    const response = await api.post<AuthResponse>('/api/auth/login', data)
    return response.data
  },

  register: async (data: RegisterData) => {
    const response = await api.post<AuthResponse>('/api/auth/register', data)
    return response.data
  },

  getProfile: async () => {
    const response = await api.get<User>('/api/profile')
    return response.data
  },

  logout: async () => {
    await api.post('/api/logout')
  },
}
