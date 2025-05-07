import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'
import { FooterDisclaimer } from './FooterDisclaimer'

const meta = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => (
    <Footer>
      <Footer.Contact />
      <Footer.Disclaimer />
    </Footer>
  ),
}
