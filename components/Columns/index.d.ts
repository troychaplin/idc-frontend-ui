import { uiMaxWidth, uiGridColumns } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
type ColumnKeys = keyof typeof uiGridColumns;
export interface ColumnsProps {
    children?: React.ReactNode;
    maxWidth?: MaxWidthKeys;
    cols?: ColumnKeys;
    gap?: number;
}
export declare const ColumnsContainer: ({ children, maxWidth, cols, }: ColumnsProps) => import("react/jsx-runtime").JSX.Element;
export declare const Columns: (({ children, maxWidth, cols, }: ColumnsProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children }: import('./content').ColumnsContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
