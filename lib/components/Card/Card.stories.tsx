import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from '.'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Customize the card',
    maxWidth: 'md',
    rounded: 'base',
    shadow: 'md',
    borderWidth: 1,
    borderColor: '#dfdfdf',
  } as CardProps,
  render: (args) => (
    <Card {...args}>
      <p className="py-4 px-5">Card component</p>
    </Card>
  ),
}
