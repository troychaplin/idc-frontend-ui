import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SiteHeader, SiteHeaderProps } from './SiteHeader';
import { NavItems } from './data';

const meta: Meta<typeof SiteHeader> = {
  title: 'Components/Site Header',
  component: SiteHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {} as SiteHeaderProps,
  render: () => (
    <SiteHeader>
      <a href="/" aria-label="Go to homepage">
        <SiteHeader.SiteLogo />
      </a>
      <SiteHeader.Navigation>
        {NavItems.map((item, index) => (
          <li key={index} className="idc-navitem">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </SiteHeader.Navigation>
      <SiteHeader.Aside />
    </SiteHeader>
  ),
};
