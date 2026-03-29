import { ProfileSidebar } from '@/widgets/profile-sidebar'
import styles from './ProfilePage.module.scss'
import { ProfileInfo } from '@/widgets/profile-info'

const ProfilePage = () => {
  return (
    <main className={`${styles.main} container`}>
      <ProfileSidebar />
      <ProfileInfo />
    </main>
  )
}

export default ProfilePage
