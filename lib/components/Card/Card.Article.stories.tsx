import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from './Card'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { CardData as data } from './data'

const meta = {
  title: 'Components/Card/Article Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    maxWidth: 'md',
    addFlex: true,
  } as CardProps,
  render: (args) => (
    <Card {...args}>
      <Card.Figure>
        <img className="rounded-md" src={data[0].image} alt={data[0].alt} />
      </Card.Figure>
      <Card.Header title={data[0].title} date={data[0].date} />
      <Card.Content text={data[0].excerpt} isExcerpt />
      <Card.Footer>
        <a href={data[0].link} className="idc-button idc-button--light-blue idc-button--xs idc-button--outline">
          Learn more
        </a>
      </Card.Footer>
    </Card>
  ),
}
