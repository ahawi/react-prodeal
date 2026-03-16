import { ArrowDownIcon } from '../icons/ArrowDown'
import { OptionEl, type Option } from './Option'
import styles from './Select.module.scss'
import type { KeyboardEvent } from 'react'

import { useEffect, useRef, useState, type MouseEventHandler } from 'react'

interface SelectProps {
  selected: Option | null
  options: Option[]
  placeholder?: string
  size: 'small' | 'medium' | 'large'
  onChange?: (selected: Option['value']) => void
  onClose?: () => void
}

export const Select = (props: SelectProps) => {
  const {
    size = 'medium',
    options,
    placeholder,
    selected,
    onChange,
    onClose,
  } = props

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0)
  const rootRef = useRef<HTMLDivElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event
      if (
        isOpen &&
        target instanceof Node &&
        !rootRef.current?.contains(target)
      ) {
        onClose?.()
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [isOpen, onClose])

  const handleKeydown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen && event.key === 'Enter') {
      setIsOpen(true)
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setHighlightedIndex((prev) => (prev + 1) % options.length)
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setHighlightedIndex((prev) =>
        prev === 0 ? options.length - 1 : prev - 1,
      )
    }

    if (event.key === 'Enter') {
      const option = options[highlightedIndex]
      onChange?.(option.value)
      setIsOpen(false)
    }

    if (event.key === 'Escape') setIsOpen(false)
  }

  const handleOptionClick = (value: Option['value']) => {
    setIsOpen(false)
    onChange?.(value)
  }

  const handlePlaceholderClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.selectWrapper} ref={rootRef}>
      <div
        className={`${styles.iconRight} ${styles[size]} ${isOpen ? styles.rotated : ''}`}
      >
        <ArrowDownIcon />
      </div>
      <div
        className={`${styles.select} ${styles[size]}`}
        onClick={handlePlaceholderClick}
        onKeyDown={handleKeydown}
        role="button"
        tabIndex={0}
        ref={placeholderRef}
      >
        {selected?.title || placeholder}
      </div>
      <ul
        className={`${styles.options} ${isOpen ? styles.open : ''} ${!isOpen ? styles.close : ''} ${styles[size]}`}
      >
        {options.map((option, index) => (
          <OptionEl
            size={size}
            key={option.value}
            option={option}
            onClick={handleOptionClick}
            isSelected={option.value === selected?.value}
            isActive={index === highlightedIndex}
          />
        ))}
      </ul>
    </div>
  )
}
