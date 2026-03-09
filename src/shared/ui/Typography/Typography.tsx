import type {HTMLAttributes} from 'react'
import styles from './Typography.module.scss'

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'numbers'
  | 'desc_1'
  | 'desc_2'
  | 'desc'
  | 'text'
  | 'caption_1'
  | 'caption_2'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: Variant
  as?: keyof HTMLElementTagNameMap
}

const variantTagMap: Record<Variant, keyof HTMLElementTagNameMap> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  numbers: 'span',
  desc_1: 'p',
  desc_2: 'p',
  desc: 'p',
  text: 'p',
  caption_1: 'span',
  caption_2: 'span',
}

export const Typography = ({variant = 'text', as, children, className, ...props}: TypographyProps) => {
  const Component = as || variantTagMap[variant]

  const classes = [styles.typography, styles[variant], className].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
