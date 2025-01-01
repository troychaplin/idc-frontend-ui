import { uiGridColumns, uiColumns } from "../../utils/propClasses";

type GridColumnsKeys = keyof typeof uiGridColumns;
type ColumnsKeys = keyof typeof uiColumns;

export interface CardGroupProps {
  children?: React.ReactNode;
  cols?: GridColumnsKeys | ColumnsKeys;
  layout?: "grid" | "masonry";
}

export const CardGroup = ({
  children,
  cols = 3,
  layout = "grid",
}: CardGroupProps) => {
  const layoutClasses =
    layout === "grid"
      ? `grid ${uiGridColumns[cols as GridColumnsKeys]}`
      : `ui-masonry ${uiColumns[cols as ColumnsKeys]}`;

  return (
    <div
      className={`ui-cardgroup idc-component ${layoutClasses} gap-8 md:gap-10`}
    >
      {children}
    </div>
  );
};
