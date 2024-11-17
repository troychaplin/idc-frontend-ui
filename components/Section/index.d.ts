import { default as React } from '../../../node_modules/react';
import { uiMaxWidth } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
export interface SectionProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    maxWidth?: MaxWidthKeys;
    notConstrained?: boolean;
    isBlue?: boolean;
}
export declare const Section: ({ children, as, maxWidth, notConstrained, isBlue }: SectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
