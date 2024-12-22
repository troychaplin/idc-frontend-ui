import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from '../Main'
import { Section } from '../Section'
import { Button } from '../Button'
import { ButtonGroup } from '../ButtonGroup'
import { Header, HeaderProps } from '.'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    as: 'h2',
    title: 'Global Recognition, Local Expertise: Your Documents, Validated Everywhere',
    date: '2024-08-31 07:10:12',
    datePrefix: 'Published on',
    size: 'md',
    weight: 'semibold',
    isCenter: false,
    isItalic: false,
    children: (
      <>
        <p>
          Dive into our articles to uncover everything you need to know about the apostille process—also called
          authentication, legalization, or attestation. Get clear insights and expert advice to make your document
          journey smooth and stress-free!
        </p>
        <ButtonGroup>
          <Button
            label="Read the article"
            color="dark-blue"
            onClick={() => {
              window.location.href = 'https://www.idocscanada.ca'
            }}
          />
        </ButtonGroup>
      </>
    ),
  } as HeaderProps,
  render: (args) => (
    <Main>
      <Section>
        <Header {...args} size="md" weight="bold" isItalic />
      </Section>
    </Main>
  ),
}
