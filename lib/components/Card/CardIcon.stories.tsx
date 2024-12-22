import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from '.'
import { CardData as data } from './data'

const meta = {
  title: 'Components/Card/Icon Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: '',
    maxWidth: 'md',
    rounded: 'base',
    shadow: 'md',
    borderWidth: 1,
    borderColor: '#dfdfdf',
  } as CardProps,
  render: (args) => (
    <Card {...args}>
      <Card.Figure iconName={data[0].iconName} />
      <Card.Header title={data[0].title} date={data[0].date} />
      <Card.Content text={data[0].excerpt} link={data[0].link} isExcerpt hideMobile />
    </Card>
  ),
}
