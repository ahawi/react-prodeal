import {createBrowserRouter} from 'react-router'
import MainPage from '@/pages/main/ui'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainPage,
  },
])
