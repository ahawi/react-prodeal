import type {Meta, StoryObj} from '@storybook/react-vite'
import {Input} from './Input'
import {useState} from 'react'
import {CloseIcon} from '../icons/CloseIcon'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    status: {
      control: 'select',
      options: ['default', 'warning', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: function DefaultStory() {
    const [value, setValue] = useState('')

    return (
      <div style={{width: 280}}>
        <Input label='Label' placeholder='Текст' value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    )
  },
}

export const AllStates: Story = {
  render: function AllStates() {
    const [value, setValue] = useState('')
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: 16, width: 280}}>
        <Input placeholder='Default' status='default' value={value} onChange={(e) => setValue(e.target.value)} />
        <Input placeholder='Error' status='error' value={value} onChange={(e) => setValue(e.target.value)} />
        <Input placeholder='Warning' status='warning' value={value} onChange={(e) => setValue(e.target.value)} />
        <Input placeholder='Disabled' disabled />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: function AllStates() {
    const [value, setValue] = useState('')

    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: 16, width: 280}}>
        <Input size='small' placeholder='Small input' value={value} onChange={(e) => setValue(e.target.value)} />
        <Input size='medium' placeholder='Medium input' value={value} onChange={(e) => setValue(e.target.value)} />
        <Input size='large' placeholder='Large input' value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    )
  },
}

export const WithIcon: Story = {
  render: function IconStory() {
    const [value, setValue] = useState('')

    return (
      <div style={{width: 280}}>
        <Input
          size='medium'
          value={value}
          placeholder='Icon input'
          onChange={(e) => setValue(e.target.value)}
          iconRight={<CloseIcon onClick={() => setValue('')} />}
        />
      </div>
    )
  },
}
