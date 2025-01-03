import { default as React } from '../../../node_modules/react';
import { uiMaxWidth } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
export interface MainProps {
    children: React.ReactNode;
    maxWidth?: MaxWidthKeys;
    noProse?: boolean;
}
export declare const Main: ({ children, noProse, maxWidth }: MainProps) => import("react/jsx-runtime").JSX.Element;
export {};
