import React from "react";

export interface CardFooterProps {
  children: React.ReactNode;
}

export const CardFooter = ({ children }: CardFooterProps) => {
  return <footer className="mt-4 md:mt-6">{children}</footer>;
};

CardFooter.displayName = "Card.Footer";
