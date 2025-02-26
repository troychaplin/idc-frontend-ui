import { default as React } from '../../../node_modules/react';
import { uiMaxWidth } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
export interface CardProps {
    children?: React.ReactNode;
    maxWidth?: MaxWidthKeys;
    addFlex?: boolean;
}
export declare const CardContainer: ({ children, maxWidth, addFlex, }: CardProps) => import("react/jsx-runtime").JSX.Element;
export declare const Card: (({ children, maxWidth, addFlex, }: CardProps) => import("react/jsx-runtime").JSX.Element) & {
    Header: {
        ({ title, as, date, datePrefix }: import('./CardHeader').CardHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children }: import('./CardFooter').CardFooterProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Figure: {
        ({ children }: import('./CardFigure').CardFigureProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Icon: {
        ({ iconName }: import('./CardIcon').CardIconProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Content: {
        ({ text, link, isExcerpt, hideMobile }: import('./CardContent').CardContentProps): import("react/jsx-runtime").JSX.Element;
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
