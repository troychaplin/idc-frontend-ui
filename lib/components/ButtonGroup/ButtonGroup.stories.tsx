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
      <Button label="Button Two" color="dark-orange" isOutline />
      <Button label="Button Three" color="dark-blue" isOutline />
      <Button label="Button Three" color="dark-blue" isOutline noBg />
    </ButtonGroup>
  ),
}
