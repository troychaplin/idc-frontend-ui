import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main, MainProps } from './Main'
import { Section } from '../Section/Section'

const meta = {
  title: 'Layouts/Main',
  component: Main,
  // subcomponents: { Button },
  tags: ['autodocs'],
} satisfies Meta<typeof Main>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    noProse: false,
  } as MainProps,
  render: (args) => (
    <Main {...args}>
      <p>Main element</p>
    </Main>
  ),
}

export const WithSection: Story = {
  args: {
    ...Primary.args,
    children: (
      <Section>
        <p>Main element</p>
      </Section>
    ),
  } as MainProps,
  render: (args) => <Main {...args} />,
}
