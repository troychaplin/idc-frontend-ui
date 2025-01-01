import React from "react";

export interface CardQuoteProps {
  children?: React.ReactNode;
  cite?: string;
}

export const CardQuote = ({ children }: CardQuoteProps) => {
  return (
    <div className="idc-card-quote text-base leading-7 px-5 py-3.5 bg-white rounded-md md:px-8 md:py-6 shadow-md">
      {children}
    </div>
  );
};

CardQuote.displayName = "Card.Quote";
