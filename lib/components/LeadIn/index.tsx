import React from "react";

export interface LeadInProps {
  headerTop: string;
  headerBottom: string;
  text?: string;
}

export const LeadIn = ({ headerTop, headerBottom, text }: LeadInProps) => {
  return (
    <div className="not-prose idc-leadin idc-component grid lg:grid-cols-3 lg:[&>*:last-child]:col-span-2 gap-4 md:gap-10 items-center">
      <div className="md:border-r md:border-solid md:border-idc-black-100">
        {headerTop && (
          <h2 className="block text-base italic not-prose md:text-lg text-idc-black-500">
            {headerTop}
          </h2>
        )}
        {headerBottom && (
          <h3 className="block text-2xl italic font-semibold not-prose md:text-3xl text-idc-orange-600">
            {headerBottom}
          </h3>
        )}
      </div>
      <div>{text && <p className="text-base md:text-lg">{text}</p>}</div>
    </div>
  );
};

LeadIn.displayName = "Hero.Intro";
