import type {Meta, StoryObj} from '@storybook/react-vite'
import {Radio} from './Radio'
import {useState} from 'react'
import {RadioGroup} from './RadioGroup'

const meta = {
  title: 'UI/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    status: {
      control: 'select',
      options: ['default', 'warning', 'error'],
    },
  },
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof Radio>

export const Statuses: Story = {
  render: () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
      <Radio label='Default' status='default' checked />
      <Radio label='Warning' status='warning' checked />
      <Radio label='Error' status='error' checked />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    checked: true,
  },
}

export const Group: Story = {
  render: function GroupStory() {
    const [value, setValue] = useState<string>('option-2')
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
          <Radio value='option-1' label='First option' />
          <Radio value='option-2' label='Second option' />
          <Radio value='option-3' label='Third option' />
        </div>
      </RadioGroup>
    )
  },
}

export const GroupSizes: Story = {
  render: () => {
    const [small, setSmall] = useState('a')
    const [medium, setMedium] = useState('a')
    const [large, setLarge] = useState('a')
    return (
      <div style={{display: 'flex', gap: 32}}>
        <RadioGroup value={small} onValueChange={setSmall}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Radio size='small' value='a' label='Small A' />
            <Radio size='small' value='b' label='Small B' />
          </div>
        </RadioGroup>
        <RadioGroup value={medium} onValueChange={setMedium}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Radio size='medium' value='a' label='Medium A' />
            <Radio size='medium' value='b' label='Medium B' />
          </div>
        </RadioGroup>
        <RadioGroup value={large} onValueChange={setLarge}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <Radio size='large' value='a' label='Large A' />
            <Radio size='large' value='b' label='Large B' />
          </div>
        </RadioGroup>
      </div>
    )
  },
}
