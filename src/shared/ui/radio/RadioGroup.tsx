import {useId, type ChangeEvent, type HTMLAttributes} from 'react'
import {RadioGroupContext} from './RadioGroupContext'

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
  name?: string
}

export const RadioGroup = ({value, onValueChange, name: nameProp, children, ...props}: RadioGroupProps) => {
  const generatedName = useId()
  const name = nameProp ?? generatedName

  const contextValue = {
    name,
    value,
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(event.target.value)
    },
  }

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div role='radiogroup' {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}
