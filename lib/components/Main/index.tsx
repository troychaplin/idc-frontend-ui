import React from "react";

export interface MainProps {
  children: React.ReactNode;
  noProse?: boolean;
}

export const Main = ({ children, noProse }: MainProps) => {
  const proseClass = noProse ? "" : "prose prose-lg md:prose-xl";

  return (
    <main
      className={`ui-main flex justify-center px-6 py-5 md:p-8 ${proseClass}`}
    >
      {children}
    </main>
  );
};
