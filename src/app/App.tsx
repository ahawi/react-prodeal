import { RouterProvider } from 'react-router'
import { router } from './router'
import { useAppDispatch } from './hooks/useAppDispatch'
import { useEffect } from 'react'
import { fetchProfile } from '@/entities/auth/model/authThunk'
import { loadUserFromStorage } from '@/entities/auth/model/authSlice'
import { authStorage } from '@/entities/auth/model/authStorage'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadUserFromStorage())

    if (authStorage.read()) dispatch(fetchProfile())
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App
