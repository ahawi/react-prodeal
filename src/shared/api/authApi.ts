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

export const authApi = {
  login: async (data: LoginData) => {
    const response = await api.post('/api/auth/login', data)
    return response.data
  },

  register: async (data: RegisterData) => {
    const response = await api.post('/api/auth/register', data)
    return response.data
  },

  getProfile: async () => {
    const response = await api.get('/api/profile')
    return response.data
  },

  logout: async () => {
    const response = await api.post('/api/logout')
    return response.data
  },
}
