import { type ChangeEvent, type InputHTMLAttributes, type ReactNode } from 'react'
import styles from './Checkbox.module.scss'

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size'
> {
  label?: ReactNode
  size?: 'small' | 'medium' | 'large'
  checked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  name?: string
  id?: string
  className?: string
}

export const Checkbox = ({
  label,
  disabled,
  id,
  size = 'medium',
  className,
  ...props
}: CheckboxProps) => {
  return (
    <div className={`${styles.fieldWrapper} ${className || ''}`}>
      <label
        htmlFor={id}
        className={`${styles.checkboxLabel} ${styles[size]} ${
          disabled ? styles.disabled : ''
        }`}
      >
        <input
          id={id}
          type="checkbox"
          className={styles.input}
          disabled={disabled}
          {...props}
        />

        <span className={styles.box} />

        {label && <span className={styles.text}>{label}</span>}
      </label>
    </div>
  )
}
