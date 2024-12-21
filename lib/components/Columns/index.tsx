import { uiMaxWidth, uiGridColumns } from "../../utils/propClasses";
import { ColumnsContent } from "./content";

type MaxWidthKeys = keyof typeof uiMaxWidth;
type ColumnKeys = keyof typeof uiGridColumns;

export interface ColumnsProps {
  children?: React.ReactNode;
  maxWidth?: MaxWidthKeys;
  cols?: ColumnKeys;
  gap?: number;
}

export const ColumnsContainer = ({
  children,
  maxWidth = "5xl",
  cols = 2,
}: ColumnsProps) => {
  return (
    <div
      className={`ui-column ui-no-max-width ${uiMaxWidth[maxWidth]} mx-auto grid ${uiGridColumns[cols]} gap-4 md:gap-10`}
    >
      {children}
    </div>
  );
};

export const Columns = Object.assign(ColumnsContainer, {
  Content: ColumnsContent,
});
