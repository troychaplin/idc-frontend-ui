import { default as React } from '../../../node_modules/react';
import { uiMaxWidth } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
export interface CardProps {
    children?: React.ReactNode;
    maxWidth?: MaxWidthKeys;
    hasBorder?: boolean;
}
export declare const CardContainer: ({ children, maxWidth, hasBorder, }: CardProps) => import("react/jsx-runtime").JSX.Element;
export declare const Card: (({ children, maxWidth, hasBorder, }: CardProps) => import("react/jsx-runtime").JSX.Element) & {
    Header: {
        ({ title, as, date, datePrefix }: import('./CardHeader').CardHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Figure: {
        ({ children }: import('./CardFigure').CardFigureProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Icon: {
        ({ iconName, basePath }: import('./CardIcon').CardIconProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Content: {
        ({ text, link, linkText, isExcerpt, hideMobile, children, }: import('./CardContent').CardContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Quote: {
        ({ children }: import('./CardQuote').CardQuoteProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Cite: {
        ({ children, cite }: import('./CardCite').CardCiteProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
