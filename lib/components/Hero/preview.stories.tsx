import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../Main'
import { Section } from '../Section'
// import { Button } from '../Button'
// import { ButtonGroup } from '../ButtonGroup'
import { Hero, HeroProps } from '.'

const meta = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    maxWidth: '6xl',
    cols: 2,
    bgType: 'none',
  } as HeroProps,
  render: (args) => (
    <Main>
      <Section>
        <Hero {...args}>
          <Hero.Content title="Title goes here" headerType="h1">
            <p>Content goes here</p>
          </Hero.Content>
          <Hero.Media>
            <p>Media goes here</p>
          </Hero.Media>
        </Hero>
      </Section>
    </Main>
  ),
}
