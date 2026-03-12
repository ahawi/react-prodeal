import styles from './FeatureCard.module.scss'
import { Typography } from '@/shared/ui/typography'

interface FeatureCardProps {
  title: string
  items: string[]
}

const FeatureCard = ({ title, items }: FeatureCardProps) => {
  return (
    <article className={styles.card}>
      <li className={styles.card__item}>
        <a href="#" className={styles.card__link}>
          <Typography variant="h3" className={styles.linkTitle}>
            {title}
          </Typography>
          <ul className={styles.list}>
            {items.map((item, i) => (
              <li key={i} className={styles.item}>
                <Typography variant="h4" className={styles.title}>
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </a>
      </li>
    </article>
  )
}

export { FeatureCard }
