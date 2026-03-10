import {createContext, type ChangeEvent} from 'react'

export interface RadioGroupContextValue {
  name: string
  value: string | undefined
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)
