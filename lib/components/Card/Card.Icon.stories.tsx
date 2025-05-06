import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
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
    maxWidth: 'md',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Icon iconName={data[0].iconName} />
      <Card.Header title={data[0].title} />
      <Card.Content>
        <p>{data[0].excerpt}</p>
        <ButtonGroup>
          <Button color="light-blue" label="Get more info" onClick={() => {}} size="xs" type="button" isOutline />
        </ButtonGroup>
      </Card.Content>
    </Card>
  ),
}
