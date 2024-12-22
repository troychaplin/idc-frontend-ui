import { uiGridColumns, uiColumns } from '../../utils/propClasses';
type GridColumnsKeys = keyof typeof uiGridColumns;
type ColumnsKeys = keyof typeof uiColumns;
export interface CardGroupProps {
    children?: React.ReactNode;
    cols?: GridColumnsKeys | ColumnsKeys;
    layout?: "grid" | "masonry";
}
export declare const CardGroup: ({ children, cols, layout, }: CardGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
