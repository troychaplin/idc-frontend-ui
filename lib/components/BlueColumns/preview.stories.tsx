import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../Main'
import { Section } from '../Section'
import { BlueColumns, BlueColumnsProps } from '../BlueColumns'

const meta = {
  title: 'Components/Blue Columns',
  component: BlueColumns,
  tags: ['autodocs'],
} satisfies Meta<typeof BlueColumns>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    maxWidth: '7xl',
    cols: 2,
  } as BlueColumnsProps,
  render: (args) => (
    <Main>
      <Section>
        <BlueColumns {...args}>
          <BlueColumns.Content>
            <p>Content goes here</p>
          </BlueColumns.Content>
          <BlueColumns.Content bgType="dark">
            <p>Form goes here</p>
          </BlueColumns.Content>
        </BlueColumns>
      </Section>
    </Main>
  ),
}
