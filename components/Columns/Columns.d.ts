import { default as React } from '../../../node_modules/react';
import { uiMaxWidth, uiGridColumns } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
type ColumnKeys = keyof typeof uiGridColumns;
export interface ColumnsProps {
    children?: React.ReactNode;
    maxWidth?: MaxWidthKeys;
    cols?: ColumnKeys;
}
export declare const ColumnsContainer: {
    ({ children, maxWidth, cols }: ColumnsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Columns: {
    ({ children, maxWidth, cols }: ColumnsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ children }: import('./ColumnsContent').ColumnsContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
