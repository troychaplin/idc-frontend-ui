import React, { useEffect, useState } from "react";

export interface CardFigureProps {
  children?: React.ReactNode;
  iconName?: string;
}

export const CardFigure = ({ children, iconName }: CardFigureProps) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const type = iconName ? "svg" : "image";

  useEffect(() => {
    if (type === "svg" && iconName) {
      const fetchSVG = async () => {
        try {
          const response = await fetch(`/assets/icons/${iconName}.svg`);
          if (response.ok) {
            const svgText = await response.text();
            setSvgContent(svgText);
          } else {
            console.error(`Error fetching SVG: ${response.statusText}`);
          }
        } catch (error) {
          console.error("Error fetching SVG:", error);
        }
      };
      fetchSVG();
    }
  }, [iconName]);

  return (
    <figure className={`idc-card-figure-${type} mb-4 md:mb-6`}>
      {type === "svg" && svgContent ? (
        <span
          dangerouslySetInnerHTML={{ __html: svgContent }} // Render the inline SVG
        />
      ) : (
        children
      )}
    </figure>
  );
};

CardFigure.displayName = "Card.Figure";
