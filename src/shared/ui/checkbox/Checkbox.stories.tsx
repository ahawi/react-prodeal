import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const AllCheckbox: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Checkbox size="small" label="Text" />
        <Checkbox size="medium" label="Text" />
        <Checkbox size="large" label="Text" />
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <Checkbox size="small" label="Text" checked />
        <Checkbox size="medium" label="Text" checked />
        <Checkbox size="large" label="Text" checked />
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <Checkbox size="small" label="Text" checked disabled />
        <Checkbox size="medium" label="Text" checked disabled />
        <Checkbox size="large" label="Text" checked disabled />
      </div>
    </div>
  ),
}
