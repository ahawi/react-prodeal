import { createSlice } from '@reduxjs/toolkit'
import type { User } from './authThunk'
import { fetchProfile, loginUser, logoutUser, registerUser } from './authThunk'
import { authStorage } from './authStorage'

interface RequestState {
  loading: boolean
  error: string | null
}

interface AuthState {
  user: User | null
  initialized: boolean
  login: RequestState
  register: RequestState
  profile: RequestState
  logout: RequestState
}

const initialRequestState = {
  loading: false,
  error: null,
}

const initialState: AuthState = {
  user: null,
  initialized: false,
  login: { ...initialRequestState },
  register: { ...initialRequestState },
  profile: { ...initialRequestState },
  logout: { ...initialRequestState },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadUserFromStorage: (state) => {
      const data = authStorage.read()
      if (data) state.user = data
      state.initialized = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.login.loading = true
        state.login.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.loading = false
        state.user = action.payload.user
        authStorage.save(action.payload.user)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.loading = false
        state.login.error = action.payload as string
      })

      .addCase(registerUser.pending, (state) => {
        state.register.loading = true
        state.register.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.register.loading = false
        state.user = action.payload.user
        authStorage.save(action.payload.user)
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.register.loading = false
        state.register.error = action.payload as string
      })

      .addCase(fetchProfile.pending, (state) => {
        state.profile.loading = true
        state.profile.error = null
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile.loading = false
        state.user = action.payload
        authStorage.save(action.payload)
        state.initialized = true
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.profile.loading = false
        state.profile.error = action.payload as string
        state.user = null
        authStorage.clear()
        state.initialized = true
      })

      .addCase(logoutUser.pending, (state) => {
        state.logout.loading = true
        state.logout.error = null
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.logout.loading = false
        state.user = null
        authStorage.clear()
        state.initialized = true
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.logout.loading = false
        state.logout.error = action.payload as string
      })
  },
})

export const { loadUserFromStorage } = authSlice.actions
export default authSlice
