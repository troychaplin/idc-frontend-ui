import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { iconNames } from '../../../public/assets/icons/icons.js';

const meta: Meta = {
  title: 'Resources/Icons',
};

export default meta;
type Story = StoryObj;

export const Icons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-12 px-12 mx-auto my-6 sm:grid-cols-6 md:grid-cols-8 max-w-screen-2xl">
      {iconNames.map(icon => (
        <div key={icon.value}>
          <img className="w-10 h-10 mx-auto" src={`./assets/icons/${icon.value}.svg`} alt="" />
          <p className="mt-4 text-xs text-center">{icon.value}</p>
        </div>
      ))}
    </div>
  ),
};
