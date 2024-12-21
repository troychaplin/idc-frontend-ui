import React from "react";

export interface ColumnsContentProps {
  children: React.ReactNode;
}

export const ColumnsContent = ({ children }: ColumnsContentProps) => {
  return <div>{children}</div>;
};

ColumnsContent.displayName = "Columns.Content";
