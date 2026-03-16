import styles from './ReviewCard.module.scss'
import { Typography } from '@/shared/ui/typography'

export interface ReviewCardProps {
  id: string
  img?: string
  name?: string
  rating?: number
  reviewText?: string
}

const ReviewCard = ({ id, img, name, rating, reviewText }: ReviewCardProps) => {
  const starsArray = Array.from({ length: rating ?? 0 })

  return (
    <li className={styles.reviews__item} id={id}>
      <blockquote className={styles.reviewCard}>
        <header className={styles.reviewCard__header}>
          <img
            src={img}
            alt="Фото профиля автора отзыва"
            className={styles.reviewCard__image}
            width="60"
            height="60"
            loading="lazy"
          />
          <div className={styles.reviewCard__top}>
            <Typography variant="h4" className={styles.reviewCard__title}>
              {name}
            </Typography>

            <div className={styles.reviewCard__starRating}>
              {starsArray.map((_, index) => (
                <span key={index}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.63954 4.27523L6.37154 0.603644C6.42196 0.497388 6.4995 0.408016 6.59547 0.345552C6.69144 0.283087 6.80204 0.25 6.91487 0.25C7.02771 0.25 7.13831 0.283087 7.23428 0.345552C7.33025 0.408016 7.40779 0.497388 7.45821 0.603644L9.19021 4.27523L13.0622 4.86751C13.1739 4.88381 13.279 4.93284 13.3655 5.00899C13.4519 5.08514 13.5163 5.18536 13.5513 5.29819C13.5863 5.41103 13.5904 5.53194 13.5632 5.64713C13.536 5.76231 13.4786 5.86713 13.3975 5.94962L10.5962 8.80576L11.2575 12.8409C11.3422 13.3587 10.8222 13.7531 10.3775 13.5089L6.91487 11.603L3.45154 13.5089C3.00754 13.7538 2.48754 13.3587 2.57221 12.8402L3.23354 8.80506L0.432206 5.94892C0.35153 5.86637 0.294471 5.76166 0.267515 5.64668C0.240559 5.5317 0.244787 5.41107 0.279718 5.29849C0.31465 5.18591 0.378883 5.08591 0.465118 5.00985C0.551353 4.93379 0.65613 4.88471 0.767539 4.86821L4.63954 4.27523Z"
                      fill="#FFD400"
                      stroke="#FFD400"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              ))}
            </div>
          </div>
        </header>
        <Typography variant="text" className={styles.reviewCard__description}>
          {reviewText}
        </Typography>
      </blockquote>
    </li>
  )
}

export { ReviewCard }
