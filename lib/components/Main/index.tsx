import React from "react";

export interface MainProps {
  children: React.ReactNode;
  noProse?: boolean;
}

export const Main = ({ children, noProse }: MainProps) => {
  const proseClass = noProse ? "" : "prose md:prose-lg max-w-none";

  return (
    <main
      className={`ui-main flex justify-center font-sans  ${proseClass}`}
      // className={`ui-main flex justify-center font-sans pt-20 py-5 md:p-8 md:pt-24 ${proseClass}`}
    >
      {children}
    </main>
  );
};
