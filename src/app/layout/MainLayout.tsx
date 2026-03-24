import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Outlet } from 'react-router'
import styles from './MainLayout.module.scss'

const MainLayout = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export { MainLayout }
