import { default as React } from '../../../node_modules/react';
export interface HeroProps {
    children?: React.ReactNode;
}
export declare const HeroContainer: ({ children }: HeroProps) => import("react/jsx-runtime").JSX.Element;
export declare const Hero: (({ children }: HeroProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children, title, date, datePrefix, width, headerType, isCenter, }: import('./HeroContent').HeroContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Media: {
        ({ children }: import('./HeroMedia').HeroMediaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
