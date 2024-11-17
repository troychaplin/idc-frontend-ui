import { uiMaxWidth, uiGridColumns } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
type ColumnKeys = keyof typeof uiGridColumns;
export interface ColumnProps {
    children?: React.ReactNode;
    maxWidth?: MaxWidthKeys;
    cols?: ColumnKeys;
    gap?: number;
}
export declare const ColumnContainer: ({ children, maxWidth, cols, gap }: ColumnProps) => import("react/jsx-runtime").JSX.Element;
export declare const Column: (({ children, maxWidth, cols, gap }: ColumnProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children }: import('./content').ColumnContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
