import React from 'react';

import { Header } from '../Header/Header';

export interface HeroContentProps {
  children: React.ReactNode;
  title: string;
  date?: string;
  datePrefix?: string;
  headerType?: 'h1' | 'h2' | 'h3';
  width?: number;
  isCenter?: boolean;
  isItalic?: boolean;
}

export const HeroContent = ({
  children,
  title,
  date,
  datePrefix,
  width = 50,
  headerType = 'h2',
  isCenter,
  isItalic,
}: HeroContentProps) => {
  let headerSize: 'sm' | 'md' | 'lg' | 'xl';
  switch (headerType) {
    case 'h1':
      headerSize = 'xl';
      break;
    case 'h2':
      headerSize = 'lg';
      break;
    case 'h3':
      headerSize = 'md';
      break;
    default:
      headerSize = 'sm';
      break;
  }

  const centerText = isCenter ? true : false;
  const italicText = isItalic ? true : false;

  return (
    <div style={{ flex: `0 0 ${width}%` }}>
      <Header
        as={headerType}
        title={title}
        date={date}
        datePrefix={datePrefix}
        size={headerSize}
        isCenter={centerText}
        isItalic={italicText}
      />
      {children}
    </div>
  );
};

HeroContent.displayName = 'Hero.Content';
