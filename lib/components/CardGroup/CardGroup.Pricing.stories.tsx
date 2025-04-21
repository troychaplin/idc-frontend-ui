import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../Section/Section'
import { CardGroup, CardGroupProps } from './CardGroup'
import { Card } from '../Card/Card'
import { CardData as data } from '../Card/data'

const meta = {
  title: 'Components/Card Group/Pricing Cards',
  component: CardGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof CardGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {} as CardGroupProps,
  render: (args) => (
    <Section>
      <CardGroup {...args}>
        {data.slice(0, 3).map(({ id, link, title, excerpt, iconName, alt, date }) => (
          <Card key={id} addFlex hasBorder>
            <Card.Header title={title} date={date} />
            <Card.Content text={excerpt} />
          </Card>
        ))}
      </CardGroup>
    </Section>
  ),
}
