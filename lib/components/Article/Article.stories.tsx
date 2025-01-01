import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Article, ArticleProps } from './Article'
import { ArticleData } from './data'

const meta = {
  title: 'Layouts/Article',
  component: Article,
  tags: ['autodocs'],
} satisfies Meta<typeof Article>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (args) => (
    <Article {...args}>
      <p>Article element</p>
    </Article>
  ),
}

export const ContentProp: Story = {
  args: {
    content: ArticleData,
  } as ArticleProps,
  render: (args) => <Article {...args} />,
}
