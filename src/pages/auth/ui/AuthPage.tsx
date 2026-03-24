import { Link, Outlet, useLocation, Navigate } from 'react-router'
import { Typography } from '@/shared/ui/typography'
import styles from './Auth.module.scss'
import { useAppSelector } from '@/app/hooks/useAppDispatch'

const AuthPage = () => {
  const location = useLocation()
  const isLogin = location.pathname.includes('login')
  const user = useAppSelector((state) => state.auth.user)
  const initialized = useAppSelector((state) => state.auth.initialized)

  if (initialized && user) {
    return <Navigate to="/" replace />
  }

  return (
    <div className={styles.pageWrap}>
      <div
        className={`${styles.card} ${isLogin ? styles.loginCard : styles.registerCard}`}
      >
        <Typography variant="h3" className={styles.title}>
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </Typography>

        <div className={styles.tabs}>
          <Link
            to="/auth/login"
            className={`${styles.tab} ${isLogin ? styles.active : ''}`}
          >
            Вход
          </Link>

          <Link
            to="/auth/register"
            className={`${styles.tab} ${!isLogin ? styles.active : ''}`}
          >
            Регистрация
          </Link>
        </div>

        <Outlet />
      </div>
    </div>
  )
}

export default AuthPage
