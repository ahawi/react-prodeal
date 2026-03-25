import { SocialIcon } from '@/shared/ui/icons/SocialIcon'
import styles from './Footer.module.scss'
import Logo from '@/shared/assets/images/logo-grey.svg'
import { Link, useLocation } from 'react-router'
import { Typography } from '@/shared/ui/typography'

const mainLinks = [
  { title: 'Для продавца', href: '#' },
  { title: 'Для покупателя', href: '#' },
  { title: 'Как работает сделка', href: '#' },
  { title: 'Правовая информация', href: '#' },
]

const socials = [
  { name: 'vkontakte', label: 'VKontakte', href: '#' },
  { name: 'telegram', label: 'Telegram', href: '#' },
  { name: 'whatsapp', label: 'WhatsApp', href: '#' },
]

const Footer = () => {
  const location = useLocation()
  const isMainPage = location.pathname === '/'

  return (
    <footer className={styles.footer}>
      {isMainPage ? (
        <div className={`${styles.footer__inner} container`}>
          <ul className={styles.footer__privacy__list}>
            <li className={styles.footer__item}>
              <a href="#" className={styles.footer__linkLogo}>
                <img
                  className={styles.footer__logo}
                  src={Logo}
                  alt="Prodeal"
                  width="167"
                  height="26"
                  loading="lazy"
                />
              </a>
            </li>

            <li className={styles.footer__item}>
              <p className={styles.footer__coryright}>
                © <time dateTime="2022">2022</time> PRODEAL <br />
                Все права защищены
              </p>
            </li>

            <li className={styles.footer__item}>
              <a href="#" className={styles.footer__link}>
                Политика конфиденциальности
              </a>
            </li>
          </ul>

          <ul className={styles.footer__list}>
            {mainLinks.map((link) => (
              <li className={styles.footer__item} key={link.title}>
                <a href={link.href} className={styles.footer__link}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.footer__actions}>
            <div className={`${styles.footer__soc1als} ${styles.soc1als}`}>
              <ul className={styles.soc1als__list}>
                {socials.map((social) => (
                  <li className={styles.soc1als__item} key={social.name}>
                    <a href={social.href} className={styles.soc1als__link}>
                      <span className="visually-hidden">{social.label}</span>
                      <SocialIcon name={social.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a className={styles.footer__link} href="tel:79923454087">
              +7 992 345-40-87
            </a>
            <a href="#" className={styles.footer__link}>
              Создать сделку
            </a>
          </div>
        </div>
      ) : (
        <div className={`${styles.loginInner} container`}>
          <div className={styles.loginLeft}>
            <Typography variant="text">© 2022 PRO-DEAL</Typography>
            <Typography variant="text">Все права защищены</Typography>
          </div>
          <div className={styles.loginRight}>
            <Link to="/" className={styles.footer__link}>
              <Typography variant="text">Помощь</Typography>
            </Link>
          </div>
        </div>
      )}
    </footer>
  )
}

export { Footer }
