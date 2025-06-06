import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardGroup, CardGroupProps } from './CardGroup';
import { Card } from '../Card/Card';
import { Main } from '../Main/Main';
import { Section } from '../Section/Section';
import { CardData as data } from '../Card/data';

const meta = {
  title: 'Components/Card Group/Article Cards',
  component: CardGroup,
  // subcomponents: { Card },
  tags: ['autodocs'],
} satisfies Meta<typeof CardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {} as CardGroupProps,
  render: args => (
    <Main>
      <Section>
        <CardGroup {...args}>
          {data.slice(0, 3).map(({ id, link, title, excerpt, image, alt, date }) => (
            <Card key={id} addFlex>
              <Card.Figure>
                <img className="rounded-md" src={image} alt={alt} width="400" height="300" />
              </Card.Figure>
              <Card.Header title={title} date={date} />
              <Card.Content text={excerpt} link={link} isExcerpt />
            </Card>
          ))}
        </CardGroup>
      </Section>
    </Main>
  ),
};
