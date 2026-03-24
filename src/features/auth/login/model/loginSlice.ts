import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from './loginThunk'

interface LoginState {
  loading: boolean
  error: string | null
}

const initialState: LoginState = {
  loading: false,
  error: null,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export { loginSlice }
