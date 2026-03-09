import styles from './Button.module.scss'

import type {ButtonHTMLAttributes} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  variant: 'border' | 'fill' | 'link' | 'primary'
  loading?: boolean
}

export const Button = ({
  size = 'small',
  variant = 'border',
  disabled,
  loading,
  children,
  className,
  ...props
}: ButtonProps) => {
  const classes = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ')

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {children}
    </button>
  )
}
