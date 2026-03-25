import { Navigate, Outlet } from 'react-router'
import { useAppSelector } from '@/app/hooks/useAppDispatch'

type Props = {
  redirectPath?: string
}

export const ProtectedRoute = ({ redirectPath = '/auth/login' }: Props) => {
  const { user, initialized } = useAppSelector((state) => state.auth)

  if (!initialized) {
    return null
  }

  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
