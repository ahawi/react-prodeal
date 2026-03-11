import type {Meta, StoryObj} from '@storybook/react-vite'
import {Button} from './Button'
import {PlusIcon} from '../icons/PlusIcon'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['border', 'fill', 'link', 'primary'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
    children: 'Primary Button',
    loading: false,
    disabled: false,
  },
}

export const PrimaryIcon: Story = {
  args: {
    size: 'large',
    variant: 'primary',
    children: 'Primary Icon Button',
    iconLeft: <PlusIcon />,
    loading: false,
    disabled: false,
  },
}

export const Border: Story = {
  args: {
    size: 'medium',
    variant: 'border',
    children: 'Border Button',
    loading: false,
    disabled: false,
  },
}

export const Fill: Story = {
  args: {
    size: 'medium',
    variant: 'fill',
    children: 'Fill Button',
    loading: false,
    disabled: false,
  },
}

export const Link: Story = {
  args: {
    size: 'medium',
    variant: 'link',
    children: 'Link Button',
    loading: false,
    disabled: false,
  },
}
