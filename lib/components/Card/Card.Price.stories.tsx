import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps } from './Card';
import { CardData as data } from './data';

const meta = {
  title: 'Components/Card/Price Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    maxWidth: 'md',
    hasBorder: true,
  } as CardProps,
  render: args => (
    <Card {...args}>
      <Card.Header title="Standard Apostille" />
      <Card.Content>
        <p>
          <strong>IDC walk-in:</strong> $150 for the first document, $50 each additional document.
        </p>
        <p>
          <strong>Agent walk-in:</strong> $200 for the first document, $50 each additional document.
        </p>
        <p>
          <strong>Mail-in:</strong> $100 for the first document, $25 each additional document.
        </p>
      </Card.Content>
    </Card>
  ),
};
