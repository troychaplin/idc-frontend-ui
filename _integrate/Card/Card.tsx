import React from 'react';

import { uiMaxWidth } from '../../utils/propClasses';

import { CardCite } from './CardCite';
import { CardContent } from './CardContent';
import { CardFigure } from './CardFigure';
import { CardHeader } from './CardHeader';
import { CardIcon } from './CardIcon';
import { CardQuote } from './CardQuote';
type MaxWidthKeys = keyof typeof uiMaxWidth;

export interface CardProps {
  children?: React.ReactNode;
  maxWidth?: MaxWidthKeys;
  hasBorder?: boolean;
}

export const CardContainer = ({ children, maxWidth, hasBorder = false }: CardProps) => {
  const cardWidth = maxWidth ? uiMaxWidth[maxWidth] : '';
  const borderClasses = hasBorder
    ? 'border border-solid border-idc-black-200 bg-white px-4 py-3 md:px-6 md:py-5'
    : '';

  return (
    <div className={`not-prose idc-card rounded-md ${cardWidth} ${borderClasses}`}>{children}</div>
  );
};

export const Card = Object.assign(CardContainer, {
  Header: CardHeader,
  Figure: CardFigure,
  Icon: CardIcon,
  Content: CardContent,
  Quote: CardQuote,
  Cite: CardCite,
});
