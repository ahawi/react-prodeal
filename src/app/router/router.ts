import { createBrowserRouter } from 'react-router'
import MainPage from '@/pages/main/ui'
import { MainLayout } from '../layout'
import AuthPage from '@/pages/auth/ui'
import { LoginForm } from '@/features/login-form'
import { RegisterForm } from '@/features/register-form'
import ProfilePage from '@/pages/profile/ui'
import { ProtectedRoute } from './protected-route'

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
        Component: ProtectedRoute,
        children: [
          {
            path: 'profile',
            Component: ProfilePage,
          },
        ],
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
