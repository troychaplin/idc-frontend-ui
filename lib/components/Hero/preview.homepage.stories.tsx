import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../Main'
import { Section } from '../Section'
import { Button } from '../Button'
import { ButtonGroup } from '../ButtonGroup'
import { Hero, HeroProps } from '.'

const meta = {
  title: 'Components/Hero/Homepage',
  component: Hero,
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    maxWidth: '6xl',
    cols: '60/40',
    bgType: 'gradient',
  } as HeroProps,
  render: (args) => (
    <Main>
      <Section>
        <Hero {...args}>
          <Hero.Content title="The document apostille process made simple" headerType="h1">
            <p>
              We expertly manage all aspects of the document apostille &ndash; authentication & legalization &ndash;
              attestation &ndash; process for our clients. If you need to present Canadian documents in a foreign
              jurisdiction we can help!
            </p>
            <ButtonGroup>
              <Button
                label="Get Started Now"
                color="dark-blue"
                onClick={() => {
                  window.location.href = 'https://www.idocscanada.ca'
                }}
              />
            </ButtonGroup>
          </Hero.Content>
          <Hero.Media>
            <p>Media</p>
          </Hero.Media>
        </Hero>
      </Section>
    </Main>
  ),
}
