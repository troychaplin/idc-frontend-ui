import { uiMaxWidth, uiBgTypes } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
type BgTypeKeys = keyof typeof uiBgTypes;
export interface HeroProps {
    children?: React.ReactNode;
    maxWidth?: MaxWidthKeys;
    cols?: 1 | 2 | "60/40";
    bgType?: BgTypeKeys;
}
export declare const HeroContainer: ({ children, maxWidth, cols, bgType, }: HeroProps) => import("react/jsx-runtime").JSX.Element;
export declare const Hero: (({ children, maxWidth, cols, bgType, }: HeroProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children, title, date, datePrefix, headerType, isCenter, }: import('./HeroContent').HeroContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Media: {
        ({ children }: import('./HeroMedia').HeroMediaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
