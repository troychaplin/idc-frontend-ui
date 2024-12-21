import React from "react";

export interface HeroMediaProps {
  children: React.ReactNode;
}

export const HeroMedia = ({ children }: HeroMediaProps) => {
  return <div className="not-prose">{children}</div>;
};

HeroMedia.displayName = "Hero.Media";
