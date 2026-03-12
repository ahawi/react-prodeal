import styles from './About.module.scss'
import { Typography } from '@/shared/ui/typography'
import Author from '@/app/assets/images/author.png'

const features = [
  'Низкая стоимость',
  '100% возврат оплаты',
  '100% компенсация затрат',
  'Точность выполнения условий сделки',
  'Оплата после доставки',
  '100% возврат товара',
  'Быстрая доставка',
]

const About = () => {
  return (
    <div className={`${styles.about} container`}>
      <Typography variant="h2" className={styles.about__title}>
        О сервисе Prodeal
      </Typography>

      <div className={styles.about__body}>
        <div className={styles.about__properties}>
          <ul className={styles.about__list}>
            {features.map((feature, i) => (
              <li key={i} className={styles.about__item}>
                <Typography variant="h3" className={styles.about__item_title}>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.about__description}>
          <div className={styles.about__description_info}>
            <Typography variant="desc_2">
              <b>Сервис Prodeal</b> выступает гарантом в сделках купли-продажи
              товаров и является агрегатором доставки
            </Typography>
          </div>

          <blockquote
            className={styles.about__description_blockquote}
            data-js-about-description-blockquote
          >
            <img
              src={Author}
              alt=""
              className={styles.about__description_image}
              width="70"
              height="70"
            />
            Мы защищаем интересы сторон по безопасной сделке и организуем
            доставку товара на выгодных условиях. Сделка между продавцом и
            покупателем может быть заключена в личном кабинете сервиса или
            покупатель может выбрать безопасную сделку при оформлении заказа на
            партнерской площадке.
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export { About }
