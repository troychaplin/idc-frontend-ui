import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from './Card'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { CardData as data } from './data'

const meta = {
  title: 'Components/Card/Page Card',
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
      <Card.Header title={data[0].title} />
      <Card.Content>
        <p>{data[0].excerpt}</p>
        <ButtonGroup>
          <Button color="light-blue" label="View full page" onClick={() => {}} size="xs" type="button" isOutline />
        </ButtonGroup>
      </Card.Content>
    </Card>
  ),
}
