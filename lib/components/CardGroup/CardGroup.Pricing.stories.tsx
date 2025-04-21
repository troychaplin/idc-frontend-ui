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
        {data.slice(0, 3).map(({ id }) => (
          <Card key={id} hasBorder>
            <Card.Header title="Standard Apostille" />
              <Card.Content>
                <p><strong>IDC walk-in:</strong> $150 for the first document, $50 each additional document.</p>
                <p><strong>Agent walk-in:</strong> $200 for the first document, $50 each additional document.</p>
                <p><strong>Mail-in:</strong> $100 for the first document, $25 each additional document.</p>
              </Card.Content>
          </Card>
        ))}
      </CardGroup>
    </Section>
  ),
}
