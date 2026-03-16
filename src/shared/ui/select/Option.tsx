import { useEffect, useRef, type MouseEventHandler } from 'react'
import styles from './Option.module.scss'

export interface Option {
  title: string
  value: string
}

interface OptionProps {
  option: Option
  size?: 'small' | 'medium' | 'large'
  isSelected?: boolean
  isActive?: boolean
  onClick: (value: Option['value']) => void
}

export const OptionEl = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
    isSelected,
    isActive,
    size = 'medium',
  } = props

  const optionRef = useRef<HTMLLIElement>(null)

  const handleClick =
    (clickedValue: Option['value']): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue)
    }

  useEffect(() => {
    const option = optionRef.current
    if (!option) return
    const handleEnterKeydown = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value)
      }
    }

    option.addEventListener('keydown', handleEnterKeydown)
    return () => {
      option.removeEventListener('keydown', handleEnterKeydown)
    }
  }, [value, onClick])

  return (
    <li
      className={`${styles.option} ${styles[size]} ${isSelected ? styles.selected : ''} ${isActive ? styles.active : ''}`}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
      ref={optionRef}
    >
      {title}
    </li>
  )
}
