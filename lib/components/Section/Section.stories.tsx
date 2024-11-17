import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Section, SectionProps } from '.'

const meta: Meta<typeof Section> = {
  title: 'Layouts/Section',
  component: Section,
  tags: ['autodocs'],
} satisfies Meta<typeof Section>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: <p>Section element</p>,
    as: 'section',
    isBlue: false,
    maxWidth: '5xl',
  } as SectionProps,
  render: (args) => <Section {...args} />,
}
