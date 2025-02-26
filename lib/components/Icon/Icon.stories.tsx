import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    color: {
      control: 'color'
    }
  }
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'phone-volume-solid',
    size: 'md',
    color: 'currentColor'
  }
}

export const Large: Story = {
  args: {
    name: 'phone-volume-solid',
    size: 'xl',
    color: 'rgb(40 98 161)'
  }
}

export const CustomColor: Story = {
  args: {
    name: 'phone-volume-solid',
    size: 'lg',
    color: '#ff0000'
  }
} 