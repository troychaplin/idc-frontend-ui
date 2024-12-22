import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../Main'
import { Section } from '../Section'
import { BluePanel, BluePanelProps } from '.'

const meta = {
  title: 'Components/Blue Panel',
  component: BluePanel,
  tags: ['autodocs'],
} satisfies Meta<typeof BluePanel>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    maxWidth: '7xl',
    cols: 2,
  } as BluePanelProps,
  render: (args) => (
    <Main>
      <Section>
        <BluePanel {...args}>
          <BluePanel.Content>
            <p>Content goes here</p>
          </BluePanel.Content>
          <BluePanel.Content bgType="dark">
            <p>Form goes here</p>
          </BluePanel.Content>
        </BluePanel>
      </Section>
    </Main>
  ),
}
