import { uiMaxWidth, uiGridColumns } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
type ColumnKeys = keyof typeof uiGridColumns;
export interface BlueColumnsProps {
    children?: React.ReactNode;
    maxWidth?: MaxWidthKeys;
    cols?: ColumnKeys;
}
export declare const BlueColumnsContainer: ({ children, maxWidth, cols }: BlueColumnsProps) => import("react/jsx-runtime").JSX.Element;
export declare const BlueColumns: (({ children, maxWidth, cols }: BlueColumnsProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children, bgType, }: import('./content').BlueColumnsContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
