import { uiGridColumns } from '../../utils/propClasses';
type GridColumnsKeys = keyof typeof uiGridColumns;
export interface CardGroupProps {
    children?: React.ReactNode;
    cols?: GridColumnsKeys;
}
export declare const CardGroup: ({ children, cols }: CardGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
