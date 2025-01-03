import { default as React } from '../../../node_modules/react';
export interface HeroProps {
    children?: React.ReactNode;
    cols?: 1 | 2 | '60/40';
}
export declare const HeroContainer: ({ children, cols }: HeroProps) => import("react/jsx-runtime").JSX.Element;
export declare const Hero: (({ children, cols }: HeroProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children, title, date, datePrefix, headerType, isCenter, }: import('./HeroContent').HeroContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Media: {
        ({ children }: import('./HeroMedia').HeroMediaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
