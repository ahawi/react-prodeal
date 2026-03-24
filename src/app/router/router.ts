import { createBrowserRouter } from 'react-router'
import MainPage from '@/pages/main/ui'
import { MainLayout } from '../layout'
import AuthPage from '@/pages/auth/ui'
import { LoginForm } from '@/widgets/login-form'
import { RegisterForm } from '@/widgets/register-form'
import ProfilePage from '@/pages/profile/ui'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      { path: '/profile', Component: ProfilePage },
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
