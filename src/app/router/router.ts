import { createBrowserRouter } from 'react-router'
import MainPage from '@/pages/main/ui'
import { MainLayout } from '../layout'
import AuthPage from '@/pages/auth/ui'
import { LoginForm } from '@/features/auth/login'
import { RegisterForm } from '@/features/auth/register'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: 'auth',
        Component: AuthPage,
        children: [
          {
            path: 'login',
            Component: LoginForm,
          },
          {
            path: 'register',
            Component: RegisterForm,
          },
        ],
      },
    ],
  },
])
