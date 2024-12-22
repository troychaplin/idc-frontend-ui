import { uiMaxWidth, uiGridColumns } from "../../utils/propClasses";
import { BlueColumnsContent } from "./content";

type MaxWidthKeys = keyof typeof uiMaxWidth;
type ColumnKeys = keyof typeof uiGridColumns;

export interface BlueColumnsProps {
  children?: React.ReactNode;
  maxWidth?: MaxWidthKeys;
  cols?: ColumnKeys;
  gap?: number;
}

export const BlueColumnsContainer = ({
  children,
  maxWidth = "7xl",
  cols = "60/40",
}: BlueColumnsProps) => {
  return (
    <div
      className={`idc-bluecolumns ${uiMaxWidth[maxWidth]} mx-auto grid ${uiGridColumns[cols]} rounded-xl overflow-hidden bg-idc-blue-50`}
    >
      {children}
    </div>
  );
};

export const BlueColumns = Object.assign(BlueColumnsContainer, {
  Content: BlueColumnsContent,
});
