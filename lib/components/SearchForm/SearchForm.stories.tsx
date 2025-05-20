import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from './SearchForm';

const meta = {
  title: 'Components/Search Form',
  component: SearchForm,
  tags: ['autodocs'],
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: args => <SearchForm {...args} />,
};
