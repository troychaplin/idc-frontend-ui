import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { CardData as data } from './data'

const meta = {
  title: 'Components/Card/Icon',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    maxWidth: 'md',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Icon iconName={data[0].iconName} />
      <Card.Header title={data[0].title} />
      <Card.Content text={data[0].excerpt} link={data[0].link} isExcerpt />
    </Card>
  ),
}