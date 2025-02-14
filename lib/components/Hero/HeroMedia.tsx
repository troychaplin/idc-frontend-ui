import React from "react";

export interface HeroMediaProps {
  children: React.ReactNode;
}

export const HeroMedia = ({ children }: HeroMediaProps) => {
  return <div className="flex-1 not-prose">{children}</div>;
};

HeroMedia.displayName = "Hero.Media";
