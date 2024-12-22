import { uiMaxWidth } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
export interface CardProps {
    children?: React.ReactNode;
    maxWidth?: MaxWidthKeys;
    addFlex?: boolean;
}
export declare const CardContainer: ({ children, maxWidth, addFlex, }: CardProps) => import("react/jsx-runtime").JSX.Element;
export declare const Card: (({ children, maxWidth, addFlex, }: CardProps) => import("react/jsx-runtime").JSX.Element) & {
    Figure: {
        ({ children, iconName }: import('./figure').CardFigureProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Header: {
        ({ title, as, date, datePrefix }: import('./header').CardHeaderProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Footer: {
        ({ children }: import('./footer').CardFooterProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Content: {
        ({ text, link, isExcerpt, hideMobile }: import('./content').CardContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Quote: {
        ({ children }: import('./quote').CardQuoteProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Cite: {
        ({ children, cite }: import('./cite').CardCiteProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
