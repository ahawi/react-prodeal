import { useAppDispatch } from '@/app/hooks/useAppDispatch'
import { logoutUser } from '@/entities/auth/model/authThunk'
import { LogoutIcon } from '@/shared/ui/icons/LogoutIcon'
import { Typography } from '@/shared/ui/typography'
import styles from './LogoutButton.module.scss'

const LogoutButton = () => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <button
      type="button"
      className={styles.logoutButton}
      onClick={handleLogout}
    >
      <div className={styles.iconWrapper}>
        <LogoutIcon className={styles.logoutIcon} />
      </div>
      <Typography variant="text">Выйти</Typography>
    </button>
  )
}

export { LogoutButton }
