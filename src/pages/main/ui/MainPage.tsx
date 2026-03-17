import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { FeatureCards } from '@/widgets/feature-cards'
import { About } from '@/widgets/about'
import { HowItWorks } from '@/widgets/how-it-works'
import { Calculator } from '@/widgets/calculator'
import { Reviews } from '@/widgets/reviews'
import { Consultation } from '@/widgets/consultation'
import { Footer } from '@/widgets/footer'

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeatureCards />
      <About />
      <HowItWorks />
      <Calculator />
      <Reviews />
      <Consultation />
      <Footer />
    </>
  )
}

export default MainPage
