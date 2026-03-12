import { FeatureCard } from './FeatureCard'
import styles from './FeatureCards.module.scss'

const cards = [
  {
    title: 'Покупателям',
    items: [
      'Безопасные онлайн покупки',
      'Возможность приобретать товары из другого города',
      'Быстрая доставка',
      'Возможность проверки и примерки покупки',
      'Курьерская доставка до двери',
    ],
  },
  {
    title: 'Продавцам',
    items: [
      'Безопасные онлайн продажи',
      'Доставка товаров клиентам по низким ценам',
      'Возврат товара при отказе',
      'Онлайн оформление сопроводительных документов',
      'Возможность получения оплаты на карту или расчётный счёт',
    ],
  },
  {
    title: 'Площадкам',
    items: [
      'Новый способ монетизации проекта',
      'Повышение доверия пользователей',
      'Продажа через социальные сети и площадки',
      'Новые услуги и сервисы для клиентов',
      'Высокий процент выкупаемости заказов',
    ],
  },
]

const FeatureCards = () => {
  return (
    <div className={`${styles.infoCards} container`}>
      <ul className={styles.infoCards__list}>
        {cards.map((card) => (
          <FeatureCard key={card.title} title={card.title} items={card.items} />
        ))}
      </ul>
    </div>
  )
}

export { FeatureCards }
