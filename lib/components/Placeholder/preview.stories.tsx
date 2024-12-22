import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Placeholder, PlaceholderProps } from '.'

const meta: Meta<typeof Placeholder> = {
  title: 'Layouts/Placeholder',
  component: Placeholder,
  tags: ['autodocs'],
} satisfies Meta<typeof Placeholder>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: 'Placeholder element',
    maxWidth: '5xl',
  } as PlaceholderProps,
  render: (args) => <Placeholder {...args} />,
}
