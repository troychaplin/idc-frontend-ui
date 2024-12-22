import React from "react";
import { Header } from "../Header";

export interface HeroContentProps {
  children: React.ReactNode;
  title: string;
  date?: string;
  datePrefix?: string;
  headerType?: "h1" | "h2" | "h3";
  isCenter?: boolean;
}

export const HeroContent = ({
  children,
  title,
  date,
  datePrefix,
  headerType = "h2",
  isCenter,
}: HeroContentProps) => {
  let headerSize: "sm" | "md" | "lg" | "xl";
  switch (headerType) {
    case "h1":
      headerSize = "xl";
      break;
    case "h2":
      headerSize = "lg";
      break;
    case "h3":
      headerSize = "md";
      break;
    default:
      headerSize = "sm";
      break;
  }

  const centerText = isCenter ? true : false;

  return (
    <Header
      as={headerType}
      title={title}
      date={date}
      datePrefix={datePrefix}
      size={headerSize}
      isCenter={centerText}
    >
      {children}
    </Header>
  );
};

HeroContent.displayName = "Hero.Content";
