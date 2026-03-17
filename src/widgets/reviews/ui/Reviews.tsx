import styles from './Reviews.module.scss'
import { ReviewCard, type ReviewCardProps } from './ReviewCard'
import { Typography } from '@/shared/ui/typography'

const reviews: ReviewCardProps[] = [
  {
    id: '1',
    img: '/src/shared/assets/images/review-1.png',
    name: 'Максим Фролов',
    rating: 5,
    reviewText:
      'Добрый день! Воспользовался сервисом «Prodeal». Всё прошло хорошо! Давно пользуюсь Сдэком и это здорово, что к нему подключился такой полезный сервис. Всё прозрачно и понятно! Можно прописать условие сделки, приложить фото товара. Единственное, комиссию сервиса хотелось бы чуть поменьше. Рекомендую!',
  },
  {
    id: '2',
    img: '/src/shared/assets/images/review-2.png',
    name: 'Александр Исаев',
    rating: 5,
    reviewText:
      'Добрый день! Воспользовался сервисом «Prodeal». Всё прошло хорошо! Давно пользуюсь Сдэком и это здорово, что к нему подключился такой полезный сервис. Всё прозрачно и понятно! Можно прописать условие сделки, приложить фото товара. Единственное, комиссию сервиса хотелось бы чуть поменьше. Рекомендую!',
  },
  {
    id: '3',
    img: '/src/shared/assets/images/review-3.png',
    name: 'Михаил Родионов',
    rating: 5,
    reviewText:
      'Добрый день! Воспользовался сервисом «Prodeal». Всё прошло хорошо! Давно пользуюсь Сдэком и это здорово, что к нему подключился такой полезный сервис. Всё прозрачно и понятно! Можно прописать условие сделки, приложить фото товара. Единственное, комиссию сервиса хотелось бы чуть поменьше. Рекомендую!',
  },
  {
    id: '4',
    img: '/src/shared/assets/images/review-4.png',
    name: 'Руслан Аримов',
    rating: 5,
    reviewText:
      'Добрый день! Воспользовался сервисом «Prodeal». Всё прошло хорошо! Давно пользуюсь Сдэком и это здорово, что к нему подключился такой полезный сервис. Всё прозрачно и понятно! Можно прописать условие сделки, приложить фото товара. Единственное, комиссию сервиса хотелось бы чуть поменьше. Рекомендую!',
  },
]

const Reviews = () => {
  return (
    <div className="container">
      <div className={styles.reviews}>
        <Typography variant="h2" className={styles.reviews__title}>
          Отзывы наших клиентов
        </Typography>
        <ul className={styles.reviews__list}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              id={review.id}
              img={review.img}
              name={review.name}
              rating={review.rating}
              reviewText={review.reviewText}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export { Reviews }
