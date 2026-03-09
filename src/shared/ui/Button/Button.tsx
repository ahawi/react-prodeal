import styles from './Button.module.scss'
import type {ButtonHTMLAttributes, ReactNode} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  variant: 'border' | 'fill' | 'link' | 'primary'
  loading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Button = ({
  size = 'small',
  variant = 'border',
  disabled,
  loading,
  iconLeft,
  iconRight,
  children,
  className,
  ...props
}: ButtonProps) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    iconLeft ? styles.iconLeft : '',
    iconRight ? styles.iconRight : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      <span className={styles.label}>{children}</span>
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  )
}
