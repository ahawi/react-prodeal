import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export { MainLayout }
