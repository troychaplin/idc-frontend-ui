import React from "react";

export interface CardHeaderProps {
  title: string;
  as?: "h2" | "h3";
  date?: string | Date;
  datePrefix?: string;
}

export const CardHeader = ({
  title,
  as = "h2",
  date,
  datePrefix,
}: CardHeaderProps) => {
  const HeaderComponent = as;
  const formattedDate = date
    ? new Date(date).toLocaleString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
    : null;

  return (
    <header>
      <HeaderComponent className="text-lg font-semibold md:text-xl">
        {title}
      </HeaderComponent>

      {date && (
        <time className="block mt-1 text-sm italic md:text-base text-idc-black-500 md:mt-3">
          {datePrefix && `${datePrefix} `}
          {formattedDate}
        </time>
      )}
    </header>
  );
};

CardHeader.displayName = "Card.Header";
