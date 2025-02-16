import { default as React } from '../../../node_modules/react';
export interface HeroContentProps {
    children: React.ReactNode;
    title: string;
    date?: string;
    datePrefix?: string;
    headerType?: "h1" | "h2" | "h3";
    width?: number;
    isCenter?: boolean;
    isItalic?: boolean;
}
export declare const HeroContent: {
    ({ children, title, date, datePrefix, width, headerType, isCenter, isItalic, }: HeroContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
