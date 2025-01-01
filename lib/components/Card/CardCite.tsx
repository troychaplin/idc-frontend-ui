import React from "react";

export interface CardCiteProps {
  children?: React.ReactNode;
  cite?: string;
}

export const CardCite = ({ children, cite }: CardCiteProps) => {
  return (
    <footer className="flex items-center gap-4 mt-4 italic font-semibold text-idc-blue-800">
      {children}
      <span>{cite}</span>
    </footer>
  );
};

CardCite.displayName = "Card.Cite";
