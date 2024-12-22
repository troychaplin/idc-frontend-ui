import React from "react";
import { uiMaxWidth, uiBgTypes } from "../../utils/propClasses";

// Define the types for this component
type MaxWidthKeys = keyof typeof uiMaxWidth;
type BgTypeKeys = keyof typeof uiBgTypes;

export interface SectionProps {
  children?: React.ReactNode;
  as?: "section" | "div" | "header";
  maxWidth?: MaxWidthKeys;
  bgType?: BgTypeKeys;
}

export const Section = ({
  children,
  as = "section",
  maxWidth = "5xl",
  bgType = "none",
}: SectionProps) => {
  const SectionComponent = as;

  // Set full width bg based on type
  const fullWidthBg = bgType !== "none" ? true : false;

  const maxWidthClass = fullWidthBg
    ? `ui-max-w-child-${maxWidth}`
    : `ui-max-w-${maxWidth}`;

  const mainWrapperClass = fullWidthBg
    ? `ui-section ui-layout w-screen ml-offset-center`
    : `ui-section ui-layout box-border relative w-full ${maxWidthClass}`;

  return (
    <SectionComponent className={`${mainWrapperClass} ${uiBgTypes[bgType]}`}>
      {fullWidthBg ? (
        <div className={`${maxWidthClass} px-0 md:px-8 ui-prose-first-last`}>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </SectionComponent>
  );
};
