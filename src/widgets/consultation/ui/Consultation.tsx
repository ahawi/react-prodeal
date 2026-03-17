import styles from './Consultation.module.scss'
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

const Consultation = () => {
  return (
    <div className={`${styles.consultation} container`}>
      <div className={styles.consultation__body}>
        <Typography variant="h2" className={styles.consultation__title}>
          Есть вопросы? Оставьте заявку на консультацию
        </Typography>
        <Typography variant="text" className={styles.consultation__description}>
          Оставьте заявку и наш консультант ответит на любые вопросы, расскажет
          про все возможности сервиса
        </Typography>
      </div>
      <form className={styles.consultation__form}>
        <div className={styles.consultation__formBody}>
          <div className={styles.consultation__field}>
            <label className="visually-hidden" htmlFor="name">
              Имя
            </label>
            <Input
              size="large"
              placeholder="Имя"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className={styles.consultation__field}>
            <label className="visually-hidden" htmlFor="email">
              Email
            </label>
            <Input
              size="large"
              placeholder="Email"
              type="text"
              id="email"
              name="email"
              required
            />
          </div>

          <div className={styles.consultation__field}>
            <label className="visually-hidden" htmlFor="phone">
              Телефон
            </label>
            <Input
              size="large"
              placeholder="Телефон"
              type="phone"
              id="phone"
              name="phone"
              required
            />
          </div>
          <Button size="large" variant="primary" type="submit">
            Оставить заявку
          </Button>

          <Typography
            variant="caption_1"
            className={styles.consultation__privacy}
          >
            Заполняя форму вы соглашаетесь на обработку персональных данных и
            получение информационных сообщений от PRODEAL
          </Typography>
        </div>
      </form>
    </div>
  )
}

export { Consultation }
