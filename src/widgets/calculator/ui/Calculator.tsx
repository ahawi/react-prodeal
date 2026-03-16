import { useState } from 'react'
import styles from './Calculator.module.scss'
import { Input } from '@/shared/ui/input'
import { RadioGroup, Radio } from '@/shared/ui/radio'
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { Select } from '@/shared/ui/select'

const Calculator = () => {
  const [shippingType, setShippingType] = useState<string>('Забрать от двери')
  const [deliveryType, setDeliveryType] = useState<string>('Доставка до двери')
  const [shippingSelectValue, setShippingSelectValue] = useState<string>('')
  const [deliverySelectValue, setDeliverySelectValue] = useState<string>('')

  const cities = [
    { value: 'Москва', title: 'Москва' },
    { value: 'Санкт-Петербург', title: 'Санкт-Петербург' },
    { value: 'Новосибирск', title: 'Новосибирск' },
    { value: 'Екатеринбург', title: 'Екатеринбург' },
    { value: 'Казань', title: 'Казань' },
    { value: 'Нижний Новгород', title: 'Нижний Новгород' },
    { value: 'Красноярск', title: 'Красноярск' },
    { value: 'Челябинск', title: 'Челябинск' },
    { value: 'Самара', title: 'Самара' },
    { value: 'Уфа', title: 'Уфа' },
  ]

  const shippingSelectedValue = cities.find(
    (item) => item.value === shippingSelectValue,
  )

  const deliverySelectedValue = cities.find(
    (item) => item.value === deliverySelectValue,
  )

  const shippingOptions = [
    'Забрать от двери',
    'Самостоятельная доставка до ПВЗ',
  ]

  const deliveryOptions = ['Доставка до двери', 'Самовывоз']

  return (
    <div className={`${styles.calculator} container`}>
      <Typography
        variant="h2"
        className={styles.calculator__title}
        id="calculator-title"
      >
        Калькулятор <br /> безопасной сделки
      </Typography>

      <form className={styles.calculator__form}>
        <div className={styles.calculator__body}>
          <div className={styles.calculator__item}>
            <Typography variant="h4" className={styles.calculator__item_title}>
              Информация о товаре
            </Typography>

            <div className={styles.parameters}>
              <div className={styles.parameters__group}>
                <Input
                  id="length"
                  name="length"
                  placeholder="0 см"
                  type="number"
                  label="Длина, см"
                  required
                />

                <Input
                  id="width"
                  name="width"
                  placeholder="0 см"
                  type="number"
                  label="Ширина, см"
                  required
                />

                <Input
                  id="height"
                  name="height"
                  placeholder="0 см"
                  type="number"
                  label="Высота, см"
                  required
                />
              </div>

              <div className={styles.parameters__group}>
                <Input
                  id="weight"
                  name="weight"
                  placeholder="0 кг"
                  type="number"
                  label="Вес, кг"
                  required
                />

                <Input
                  id="price"
                  name="price"
                  placeholder="руб"
                  type="number"
                  label="Оценочная стоимость"
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.calculator__item}>
            <Typography variant="h4" className={styles.calculator__item_title}>
              Информация по отправке
            </Typography>

            <div className={styles.parameters}>
              <div className={styles.field}>
                <label htmlFor="sending-city" className={styles.field__label}>
                  Город отправки
                </label>
                <Select
                  placeholder="Например: Москва"
                  size="medium"
                  id="sending-city"
                  options={cities}
                  onChange={setShippingSelectValue}
                  selected={shippingSelectedValue || null}
                />
              </div>
              <fieldset
                className={styles.radios}
                aria-describedby="shipping-help"
              >
                <legend className={`${styles.radios__title} visually-hidden`}>
                  Информация по отправке
                </legend>

                <RadioGroup
                  value={shippingType}
                  onValueChange={setShippingType}
                  name="shipping-type"
                  className={styles.radios}
                >
                  {shippingOptions.map((option) => (
                    <Radio
                      key={option}
                      value={option}
                      label={option}
                      className={`${styles.radios__item} ${styles.radio}`}
                    />
                  ))}
                </RadioGroup>

                <div id="shipping-help" className="visually-hidden">
                  Выберите способ отправления
                </div>
              </fieldset>
            </div>
          </div>

          <div className={styles.calculator__item}>
            <Typography variant="h4" className={styles.calculator__item_title}>
              Информация о доставке
            </Typography>

            <div className={styles.parameters}>
              <div className={styles.field}>
                <label htmlFor="delivery-city" className={styles.field__label}>
                  Город получения
                </label>
                <Select
                  placeholder="Например: Самара"
                  id="delivery-city"
                  size="medium"
                  options={cities}
                  onChange={setDeliverySelectValue}
                  selected={deliverySelectedValue || null}
                />
              </div>

              <fieldset
                className={styles.radios}
                aria-describedby="delivery-help"
              >
                <legend className={`${styles.radios__title} visually-hidden`}>
                  Информация о доставке
                </legend>

                <RadioGroup
                  value={deliveryType}
                  onValueChange={setDeliveryType}
                  name="delivery-type"
                  className={styles.radios}
                >
                  {deliveryOptions.map((option) => (
                    <Radio
                      key={option}
                      value={option}
                      label={option}
                      className={`${styles.radios__item} ${styles.radio}`}
                    />
                  ))}
                </RadioGroup>

                <div id="delivery-help" className="visually-hidden">
                  Выберите способ доставки
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <Button
          size="large"
          variant="primary"
          className={styles.calculator__button}
          type="submit"
        >
          Рассчитать
        </Button>
      </form>
    </div>
  )
}

export { Calculator }
