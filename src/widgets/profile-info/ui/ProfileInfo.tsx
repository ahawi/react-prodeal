import { Button } from '@/shared/ui/button'
import styles from './ProfileInfo.module.scss'
import { Typography } from '@/shared/ui/typography'
import { Input } from '@/shared/ui/input'

const ProfileInfo = () => {
  return (
    <div className={styles.content}>
      <Typography variant="h2" className={styles.title}>
        Профиль
      </Typography>

      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionText}>
          Общая информация
        </Typography>
        <Typography variant="text" className={styles.sectionText}>
          Эти данные будут видны вашим контрагентам в сделках
        </Typography>

        <form className={styles.form}>
          <div className={styles.row}>
            <Input label="Имя" name="name" placeholder="Ренат" />

            <Input label="Фамилия" name="last-name" placeholder="Аримов" />
          </div>

          <div className={styles.row}>
            <Input label="Телефон" name="phone" placeholder="7 992 345-40-87" />

            <Input
              label="Email"
              name="email"
              placeholder="arimovrenat@gmail.com"
            />
          </div>
        </form>
      </section>

      <section className={styles.section}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Смена пароля
        </Typography>
        <Typography variant="text" className={styles.sectionText}>
          Смена пароля
        </Typography>

        <form className={styles.passwordForm}>
          <div className={styles.passwordRow}>
            <Input label="Старый пароль" name="old-password" type="password" />

            <Input label="Новый пароль" name="new-password" type="password" />

            <Input
              label="Подтвердите новый пароль"
              name="confirm-new-password"
              type="password"
            />
          </div>

          <Button
            variant="primary"
            size="medium"
            type="submit"
            className={styles.saveButton}
          >
            Сохранить
          </Button>
        </form>
      </section>
    </div>
  )
}

export { ProfileInfo }
