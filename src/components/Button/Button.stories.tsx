import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    type: 'button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    color: 'light-blue',
    type: 'button',
  },
};

export const Outline: Story = {
  args: {
    label: 'Button',
    isOutline: true,
    type: 'button',
  },
};
