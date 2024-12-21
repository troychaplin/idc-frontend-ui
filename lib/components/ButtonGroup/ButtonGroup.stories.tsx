import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup, ButtonGroupProps } from '.'
import { Button, ButtonProps } from '../Button'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  tags: ['autodocs'],
}

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
      <Button label="Button Two" color="dark-orange" isOutline />
      <Button label="Button Three" color="dark-blue" isOutline />
      <Button label="Button Four" color="dark-blue" isOutline noBg />
    </ButtonGroup>
  ),
}
