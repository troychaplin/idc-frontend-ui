import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { LeadIn, LeadInProps } from './LeadIn';

const meta = {
  title: 'Components/LeadIn',
  component: LeadIn,
  tags: ['autodocs'],
} satisfies Meta<typeof LeadIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headerTop: 'Our Process',
    headerBottom: 'As simple as A-B-C',
    text: 'We take the anxiety and uncertainty out of the document apostille process in these three simple steps! We take the anxiety and uncertainty out of the document apostille process in these three simple steps!',
  } as LeadInProps,
  render: args => (
    <Main>
      <Section>
        <LeadIn {...args} />
      </Section>
    </Main>
  ),
};
