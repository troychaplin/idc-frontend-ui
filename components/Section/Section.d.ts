import { default as React } from '../../../node_modules/react';
import { uiMaxWidth, uiBgTypes } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
type BgTypeKeys = keyof typeof uiBgTypes;
export interface SectionProps {
    children?: React.ReactNode;
    as?: 'section' | 'div' | 'header';
    maxWidth?: MaxWidthKeys;
    bgType?: BgTypeKeys;
}
export declare const Section: ({ children, as, maxWidth, bgType }: SectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
