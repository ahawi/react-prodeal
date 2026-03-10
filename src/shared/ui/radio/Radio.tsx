import {useContext, useId, type ChangeEvent, type InputHTMLAttributes} from 'react'
import styles from './Radio.module.scss'
import {RadioGroupContext} from './RadioGroupContext'

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  id?: string
  label?: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  status?: 'default' | 'warning' | 'error'
  value?: string
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Radio = ({
  id: idProp,
  name: nameProp,
  value,
  checked: checkedProp,
  onChange: onChangeProp,
  label,
  size = 'medium',
  disabled,
  status,
  className,
  ...props
}: RadioProps) => {
  const generatedId = useId()
  const id = idProp ?? generatedId

  const groupContext = useContext(RadioGroupContext)
  const isInGroup = groupContext !== null

  const name = isInGroup ? groupContext.name : nameProp
  const checked = isInGroup && value !== undefined ? groupContext.value === value : checkedProp

  const onChange = isInGroup ? groupContext.onChange : onChangeProp

  const classes = [
    styles.radioWrapper,
    status ? styles[status] : '',
    disabled ? styles.disabled : '',
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <label htmlFor={id} className={styles.labelWrapper}>
        <input
          type='radio'
          className={styles.radioInput}
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
        <span className={styles.customRadio} />
        {label && <span className={styles.labelText}>{label}</span>}
      </label>
    </div>
  )
}
