import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { Definition, DefinitionProps } from './Definition';
import { DefinitionData as data } from './data';

const meta = {
  title: 'Components/Definition',
  component: Definition,
  // subcomponents: { Definition },
  tags: ['autodocs'],
} satisfies Meta<typeof Definition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {} as DefinitionProps,
  render: args => (
    <Main>
      <Section>
        <Definition {...args}>
          <Definition.Accordion title={data[0].title}>
            <p>Definition Item</p>
          </Definition.Accordion>
        </Definition>
      </Section>
    </Main>
  ),
};
