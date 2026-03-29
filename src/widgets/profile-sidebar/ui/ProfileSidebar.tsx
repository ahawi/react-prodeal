import { Link } from 'react-router'
import styles from './ProfileSidebar.module.scss'
import profileIcon from '@/shared/assets/images/folder.svg'
import dealsIcon from '@/shared/assets/images/wallet.svg'
import { Typography } from '@/shared/ui/typography'
import { LogoutButton } from '@/features/logout/ui'

const ProfileSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.menu}>
        <Link to="/profile" className={`${styles.menuItem} ${styles.active}`}>
          <img src={profileIcon} alt="folder" className={styles.menuIcon} />
          <Typography variant="text">Профиль</Typography>
        </Link>

        <Link to="/deals" className={styles.menuItem}>
          <img src={dealsIcon} alt="folder" className={styles.menuIcon} />
          <Typography variant="text">Сделки</Typography>
        </Link>
      </nav>
      <LogoutButton />
    </aside>
  )
}

export { ProfileSidebar }
