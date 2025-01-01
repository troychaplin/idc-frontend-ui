import { uiMaxWidth, uiGridColumns } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
type ColumnKeys = keyof typeof uiGridColumns;
export interface BluePanelProps {
    children?: React.ReactNode;
    maxWidth?: MaxWidthKeys;
    cols?: ColumnKeys;
}
export declare const BluePanelContainer: ({ children, maxWidth, cols }: BluePanelProps) => import("react/jsx-runtime").JSX.Element;
export declare const BluePanel: (({ children, maxWidth, cols }: BluePanelProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children, bgType }: import('./BluePanelContent').BluePanelContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
