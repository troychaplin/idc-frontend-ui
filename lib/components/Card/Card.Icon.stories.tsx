import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { iconNames } from '../../utils/iconList'

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
        date="2024-03-20" 
      />
      <Card.Content 
        text="Get in touch with our support team for assistance with your documentation needs." 
        link="#" 
        isExcerpt 
        hideMobile 
      />
    </Card>
  ),
}