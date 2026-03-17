import HeroBanner from '@/shared/assets/images/hero-banner.svg'
import styles from './Hero.module.scss'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={`${styles.main} container`}>
        <div className={styles.body}>
          <Typography variant="h1" className={styles.title}>
            Сервис безопасных сделок с гарантией доставки
          </Typography>

          <div className={styles.description}>
            <Typography variant="desc">
              Сервис предоставляет 100% защиту денежных средств для покупателей
              и продавцов при покупках товаров в интернете
            </Typography>
          </div>
          <Button
            size="large"
            type="button"
            variant="primary"
            className={`${styles.button} button`}
          >
            Создать сделку
          </Button>
        </div>
        <img
          src={HeroBanner}
          alt=""
          className={styles.image}
          width="528"
          height="412"
        />
      </div>
    </div>
  )
}

export { Hero }
