import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  // tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Button',
    color: 'dark-blue',
    type: 'button',
    size: 'md',
    isOutline: false,
    noBg: false,
    onClick: () => console.log('Button clicked'),
  } as ButtonProps,
  render: (args) => <Button {...args} />,
}
