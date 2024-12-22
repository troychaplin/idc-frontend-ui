import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CardGroup, CardGroupProps } from '.'
import { Card } from '../Card'
import { CardData as data } from '../Card/data'

const meta = {
  title: 'Components/Card Group',
  component: CardGroup,
  // subcomponents: { Card },
  tags: ['autodocs'],
} satisfies Meta<typeof CardGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    cols: 3,
  } as CardGroupProps,
  render: (args) => (
    <CardGroup {...args}>
      {data.slice(0, 3).map(({ id }) => (
        <Card key={id} addFlex>
          <p>Card Item</p>
        </Card>
      ))}
    </CardGroup>
  ),
}
