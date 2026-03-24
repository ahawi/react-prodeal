import { configureStore } from '@reduxjs/toolkit'
import { loginSlice } from '@/features/auth/login'
import { registerSlice } from '@/features/auth/register'
import { userSlice } from '@/entities/user'

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    register: registerSlice.reducer,
    user: userSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
