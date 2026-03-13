import styles from './HowItWorks.module.scss'
import { Typography } from '@/shared/ui/typography'
import WalletIcon from '@/app/assets/images/wallet.svg'
import DeliveryBoxIcon from '@/app/assets/images/delivery-box.svg'
import FolderIcon from '@/app/assets/images/folder.svg'

const steps = [
  { text: '1. Устная договорённость участников', icon: DeliveryBoxIcon },
  { text: '2. Заполнение данных продавцов', icon: FolderIcon },
  { text: '3. Заполнение данных покупателем', icon: FolderIcon },
  { text: '4. Депонирование суммы за товар и услуги', icon: DeliveryBoxIcon },
  { text: '5. Передача посылки перевозчику', icon: DeliveryBoxIcon },
  { text: '6. Доставка и проверка получателем', icon: DeliveryBoxIcon },
  { text: '7. Оплата продавцу за услуги доставки', icon: WalletIcon },
  { text: '8. Перевод оплаты продавцу, завершение', icon: WalletIcon },
]

const HowItWorks = () => {
  return (
    <div className={styles.howitworks}>
      <div className={`${styles.howitworks__inner} container`}>
        <Typography variant="h2" className={styles.howitworks__title}>
          Как это работает?
        </Typography>
        <div className={styles.howitworks__body}>
          <ul className={styles.howitworks__list}>
            {steps.map((steps) => (
              <li key={steps.text} className={styles.howitworks__item}>
                <article className={styles.howitworks__card}>
                  <img
                    src={steps.icon}
                    alt=""
                    className={styles.howitworks__card_image}
                    width="32"
                    height="32"
                    loading="lazy"
                  />
                  <Typography
                    variant="h4"
                    className={styles.howitworks__card_title}
                  >
                    {steps.text}
                  </Typography>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { HowItWorks }
