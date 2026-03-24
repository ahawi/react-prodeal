import { Button } from '@/shared/ui/button'
import styles from './Header.module.scss'
import Logo from '@/shared/assets/images/logo.svg'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="Prodeal" width="167" height="26" />
        </Link>

        <nav className={styles.menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link to="/about" className={styles.menu__link}>
                О сервисе
              </Link>
            </li>

            <li className={styles.menu__item}>
              <Link to="/about" className={styles.menu__link}>
                Как работает
              </Link>
            </li>

            <li className={styles.menu__item}>
              <Link to="#" className={styles.menu__link}>
                Кому выгодно
              </Link>
            </li>

            <li className={styles.menu__item}>
              <Link to="#" className={styles.menu__link}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.rightBlock}>
          <div className={styles.rightBlock__worktime}>
            <a className={styles.rightBlock__phone} href="tel:78003501005">
              +7 (800) 350-10-05
            </a>
            <div className={styles.rightBlock__info}>
              ПН-ПН
              <time dateTime="09:00-18:00">09:00-18:00</time>
            </div>
          </div>
          <Link to="/auth/login">
            <Button
              size="large"
              variant="primary"
              className={styles.rightBlock__button}
            >
              Войти
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export { Header }
