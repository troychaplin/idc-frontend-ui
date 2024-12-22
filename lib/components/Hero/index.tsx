import { HeroContent } from "./content";
import { HeroMedia } from "./media";
import { Section } from "../Section";
import { uiMaxWidth, uiGridColumns, uiBgTypes } from "../../utils/propClasses";

// Define the types for this component
type MaxWidthKeys = keyof typeof uiMaxWidth;
type BgTypeKeys = keyof typeof uiBgTypes;

export interface HeroProps {
  children?: React.ReactNode;
  maxWidth?: MaxWidthKeys;
  cols?: 1 | 2 | "60/40";
  bgType?: BgTypeKeys;
}

export const HeroContainer = ({
  children,
  maxWidth = "5xl",
  cols = 1,
  bgType = "white",
}: HeroProps) => {
  return (
    <Section as="div" maxWidth={maxWidth} bgType={bgType}>
      <div className={`grid ${uiGridColumns[cols]} gap-6`}>{children}</div>
    </Section>
  );
};

export const Hero = Object.assign(HeroContainer, {
  Content: HeroContent,
  Media: HeroMedia,
});
