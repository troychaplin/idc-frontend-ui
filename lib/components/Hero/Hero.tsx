import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroMedia } from './HeroMedia';

export interface HeroProps {
  children?: React.ReactNode;
}

export const HeroContainer = ({ children }: HeroProps) => {
  return <div className={`flex flex-col md:flex-row gap-6 md:gap-10`}>{children}</div>;
};

export const Hero = Object.assign(HeroContainer, {
  Content: HeroContent,
  Media: HeroMedia,
});
