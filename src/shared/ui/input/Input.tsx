import {type HTMLAttributes, type InputHTMLAttributes, type ReactNode} from 'react'
import styles from './Input.module.scss'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'medium' | 'large'
  placeholder?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  status?: 'default' | 'warning' | 'error'
  disabled?: boolean
  label?: string
  id?: string
  helperText?: string
  type?: string
}

export const Input = ({
  size = 'medium',
  placeholder,
  iconLeft,
  iconRight,
  status = 'default',
  disabled,
  label,
  id,
  type,
  helperText,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={`${styles.fieldWrapper}`}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <div className={`${styles.inputWrapper} ${status ? styles[status] : ''}`}>
        {iconLeft && (
          <button type='button' className={`${styles.iconLeft} ${styles[size]}`}>
            {iconLeft}
          </button>
        )}

        <input
          type={type}
          className={`${styles.input} ${styles[size]}`}
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
        />

        {iconRight && (
          <button type='button' className={`${styles.iconRight} ${styles[size]}`}>
            {iconRight}
          </button>
        )}
      </div>

      {helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  )
}
