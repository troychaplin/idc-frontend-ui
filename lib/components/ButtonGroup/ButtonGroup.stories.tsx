import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup, ButtonGroupProps } from '.'
import { Button } from '../Button'

const meta = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  // subcomponents: { Button },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    gap: 20,
    isCenter: false,
  } as ButtonGroupProps,
  render: (args) => (
    <ButtonGroup {...args}>
      <Button label="Button One" />
      <Button label="Button Two" color="#E6EEF8" textColor="#191919" />
      <Button label="Button Three" color="#C7DAF0" textColor="#0b4a35" isOutline />
    </ButtonGroup>
  ),
}
