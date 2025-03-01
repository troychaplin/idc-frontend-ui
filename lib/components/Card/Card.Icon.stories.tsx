import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'

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
      <Card.Icon iconName="phone-volume-solid" />
      <Card.Header 
        title="Contact our support team" 
      />
      <Card.Content 
        text="Get in touch with our support team for assistance with your documentation needs." 
        isExcerpt
      />
      <Card.Footer>
        <a href="#" className="idc-button idc-button--light-blue idc-button--xs idc-button--outline">
          Learn more
        </a>
      </Card.Footer>
    </Card>
  ),
}