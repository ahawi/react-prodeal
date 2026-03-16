import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const options = [
      { value: 'opt-1', title: 'Option 1' },
      { value: 'opt-2', title: 'Option 2' },
      { value: 'opt-3', title: 'Option 3' },
    ]

    const [value, setValue] = useState<string>('')
    const selectedValue = options.find((item) => item.value === value)

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          maxWidth: 300,
        }}
      >
        <Select
          placeholder="Text"
          size="small"
          onChange={setValue}
          options={options}
          selected={selectedValue || null}
        />
        <Select
          placeholder="Text"
          size="medium"
          onChange={setValue}
          options={options}
          selected={selectedValue || null}
        />
        <Select
          placeholder="Text"
          size="large"
          onChange={setValue}
          selected={selectedValue || null}
          options={options}
        />
      </div>
    )
  },
}
