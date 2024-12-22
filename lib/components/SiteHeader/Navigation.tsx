import React from "react";

export interface NavigationProps {
  children: React.ReactNode;
}

export const Navigation = ({ children }: NavigationProps) => {
  return (
    <div className="items-center flex-none hidden md:flex">
      {/* <div className="items-center flex-none hidden px-6 border border-solid rounded md:flex border-idc-blue-200"> */}
      <ul className="flex gap-5 text-[15px] text-black">{children}</ul>
    </div>
  );
};
