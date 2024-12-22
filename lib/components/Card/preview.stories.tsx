import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from '.'
import { CardData as data } from './data'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Card Item',
    maxWidth: 'md',
    addFlex: false,
  } as CardProps,
  render: (args) => <Card {...args} />,
}
