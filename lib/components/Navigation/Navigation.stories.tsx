import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';
import { navItems } from '../../data/navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
  args: {},
  render: () => (
    <Navigation>
      <Navigation.Desktop>
        <Navigation.Logo siteUrl="/" />
        <Navigation.Menu items={navItems} />
        <Navigation.Aside />
      </Navigation.Desktop>
      <Navigation.Mobile items={navItems} />
    </Navigation>
  ),
};
