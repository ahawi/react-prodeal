import { RouterProvider } from 'react-router'
import { router } from './router'
import { useAppDispatch } from './hooks/useAppDispatch'
import { useEffect } from 'react'
import { fetchProfile } from '@/features/auth/model/authThunk'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfile())
  }, [dispatch])
  return <RouterProvider router={router} />
}

export default App
