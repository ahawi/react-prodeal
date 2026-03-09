import type {Meta, StoryObj} from '@storybook/react'
import {Typography, type TypographyProps} from './Typography'

const meta = {
  component: Typography,
  title: 'UI/Typography',
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const AllTypography: Story = {
  render: (args: TypographyProps) => (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <Typography {...args} variant='h1'>
        Заголовок 1
      </Typography>
      <Typography {...args} variant='h2'>
        Заголовок 2
      </Typography>
      <Typography {...args} variant='h3'>
        Заголовок 3
      </Typography>
      <Typography {...args} variant='h4'>
        Заголовок 4
      </Typography>
      <Typography {...args} variant='h5'>
        Заголовок 5
      </Typography>

      <Typography {...args} variant='numbers'>
        Цифры 1
      </Typography>

      <Typography {...args} variant='desc_1'>
        Дескриптор 1
      </Typography>
      <Typography {...args} variant='desc_2'>
        Дескриптор 2
      </Typography>
      <Typography {...args} variant='desc'>
        Дескриптор
      </Typography>

      <Typography {...args} variant='text'>
        Текст
      </Typography>

      <Typography {...args} variant='caption_1'>
        Подпись 1
      </Typography>
      <Typography {...args} variant='caption_2'>
        Подпись 2
      </Typography>
    </div>
  ),
}
