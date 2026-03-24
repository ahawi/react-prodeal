import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { User } from './types'

interface UserState {
  user: User | null
  token: string | null
}

const initialState: UserState = {
  user: null,
  token: localStorage.getItem('token'),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
    },
    logout(state) {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },
  },
})

export const { setUser, logout } = userSlice.actions
export { userSlice }
