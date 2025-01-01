import { uiMaxWidth } from "../../utils/propClasses";
import { CardHeader } from "./CardHeader";
import { CardFooter } from "./CardFooter";
import { CardContent } from "./CardContent";
import { CardQuote } from "./CardQuote";
import { CardCite } from "./CardCite";
import { CardFigure } from "./CardFigure";

type MaxWidthKeys = keyof typeof uiMaxWidth;

export interface CardProps {
  children?: React.ReactNode;
  maxWidth?: MaxWidthKeys;
  addFlex?: boolean;
}

export const CardContainer = ({
  children,
  maxWidth,
  addFlex = false,
}: CardProps) => {
  const cardWidth = maxWidth ? uiMaxWidth[maxWidth] : "";
  const flexClass = addFlex ? "flex gap-4 md:block" : "";

  return (
    <div className={`not-prose idc-card rounded-md ${cardWidth} ${flexClass}`}>
      {children}
    </div>
  );
};

export const Card = Object.assign(CardContainer, {
  Figure: CardFigure,
  Header: CardHeader,
  Footer: CardFooter,
  Content: CardContent,
  Quote: CardQuote,
  Cite: CardCite,
});
