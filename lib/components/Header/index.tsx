import React from "react";
import { headerSizeClasses, fontWeightClasses } from "../../utils/propClasses";

type headerSizeKeys = keyof typeof headerSizeClasses;
type fontWeightKeys = keyof typeof fontWeightClasses;

export interface HeaderProps {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  title: string;
  date?: string | Date;
  datePrefix?: string;
  size?: headerSizeKeys;
  weight?: fontWeightKeys;
  isCenter?: boolean;
  isItalic?: boolean;
}

export const Header = ({
  children,
  as = "h2",
  title,
  date,
  datePrefix,
  size = "lg",
  weight = "semibold",
  isCenter,
  isItalic,
}: HeaderProps) => {
  const HeaderComponent = as;
  const formattedDate = date
    ? new Date(date).toLocaleString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
    : null;

  const centerContent = isCenter ? "idc-header--center" : "";
  const italicContent = isItalic ? "italic" : "";

  // Set spacing for header with underline
  let headerPadding;

  switch (size) {
    case "sm":
      headerPadding = "pb-3.5";
      break;
    case "md":
      headerPadding = "pb-4";
      break;
    case "lg":
      headerPadding = "pb-5";
      break;
    case "xl":
      headerPadding = "pb-6";
      break;
    default:
      headerPadding = "pb-5";
      break;
  }

  return (
    <header
      className={`ui-prose-first-last idc-header idc-component ${centerContent}`}
    >
      {date && (
        <time className="block mb-2 text-base italic md:text-lg text-idc-black-400 md:mb-3">
          {datePrefix && `${datePrefix} `}
          {formattedDate}
        </time>
      )}

      <HeaderComponent
        className={`not-prose text-idc-blue-800 ${headerSizeClasses[size]} ${fontWeightClasses[weight]} ${italicContent} ${headerPadding} last:pb-0`}
      >
        {title}
      </HeaderComponent>

      {children}
    </header>
  );
};
