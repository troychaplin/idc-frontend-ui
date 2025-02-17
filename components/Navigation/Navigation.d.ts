import { NavigationProps } from './types';
export declare const Navigation: {
    ({ children }: NavigationProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Desktop: {
        ({ children }: import('./NavigationDesktop').NavigationDesktopProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Mobile: ({ items }: Omit<import('./types').NavigationMobileProps, "isOpen" | "onClose">) => import("react/jsx-runtime").JSX.Element;
    Logo: ({ siteUrl }: import('./types').NavigationLogoProps) => import("react/jsx-runtime").JSX.Element;
    Menu: ({ items }: import('./types').NavigationMenuProps) => import("react/jsx-runtime").JSX.Element;
    Aside: () => import("react/jsx-runtime").JSX.Element;
};
export type { NavigationProps };
