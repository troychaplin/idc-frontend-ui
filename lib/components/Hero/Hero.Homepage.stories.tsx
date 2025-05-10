import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../Main/Main'
import { Section } from '../Section/Section'
import { Button } from '../Button/Button'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Hero, HeroProps } from './Hero'

const meta = {
  title: 'Components/Hero/Homepage',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => (
    <Main>
      <Section bgType="blue">
        <Hero>
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
          <Hero.Media imageUrl="https://picsum.photos/seed/picsum/1280/800" />
        </Hero>
      </Section>
    </Main>
  ),
}
