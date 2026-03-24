import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './registerThunk'

interface RegisterState {
  loading: boolean
  error: string | null
}

const initialState: RegisterState = {
  loading: false,
  error: null,
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export { registerSlice }
