import React from "react";

export interface BlueColumnsContentProps {
  children: React.ReactNode;
  bgType?: "dark" | "light";
}

export const BlueColumnsContent = ({
  children,
  bgType = "light",
}: BlueColumnsContentProps) => {
  const bgColor =
    bgType === "light" ? "bg-idc-blue-50" : "bg-idc-blue-600 text-white";
  return (
    <div
      className={`ui-prose-first-last px-7 py-6 md:px-16 md:py-12 ${bgColor}`}
    >
      {children}
    </div>
  );
};

BlueColumnsContent.displayName = "BlueColumns.Content";
